import axios from 'axios';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { isFirebaseError } from '../../types/auth';
import { signOut } from './signOut';

export type LoginInputs = {
  email: string;
  password: string;
  exampleRequired: string;
};

/**
 * ログイン
 * @param data
 */
export const logIn = async (data: LoginInputs): Promise<void> => {
  try {
    const auth = getAuth();

    if (!data.email || !data.password) {
      console.log('メールアドレスもしくはパスワードがない。');
    }

    const userCredential = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    );

    // API認証用
    const idToken = await userCredential.user.getIdToken();
    if (!idToken) {
      console.log('トークンがありません。');
    }

    const res = await axios({
      method: 'post',
      url: '/api/auth/',
      headers: {
        Authorization: idToken,
      },
    });

    console.log('/login/: ', res);
  } catch (error) {
    if (
      error instanceof Error &&
      isFirebaseError(error) &&
      error.code === 'auth/user-not-found'
    ) {
      console.error('ユーザが見つかりませんでした。');
    }
    // 失敗したらログアウトする
    // TODO: サーバー側でログイン状態を解除する必要があるか
    await signOut();
  }
};
