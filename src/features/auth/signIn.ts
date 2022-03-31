import axios from 'axios';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseApp } from '../../sdk/firebase';
import { isFirebaseError } from '../../types/auth';

export type LoginInputs = {
  email: string;
  password: string;
  exampleRequired: string;
};

export const signIn = async (data: LoginInputs): Promise<void> => {
  try {
    const auth = getAuth(firebaseApp);

    if (!data.email || !data.password) {
      console.log('ありません');
    }

    const userCredential = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password,
    );

    const idToken = await userCredential.user?.getIdToken();

    if (idToken) {
      console.log('idTokenあり');
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const res = await axios.post(
        '/api/users',
        {},
        {
          headers: {
            Authorization: idToken,
          },
        },
      );
      console.log('post完了');
    } else {
      console.log('idTokenなし');
    }
  } catch (error) {
    if (
      error instanceof Error &&
      isFirebaseError(error) &&
      error.code === 'auth/user-not-found'
    ) {
      console.error('ユーザが見つかりませんでした。');
    }
  }
};
