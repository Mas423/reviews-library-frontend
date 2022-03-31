import axios from 'axios';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseApp } from '../../sdk/firebase';
import { isFirebaseError } from '../../types/auth';

export type Inputs = {
  username: string;
  email: string;
  password: string;
  exampleRequired: string;
};

export const signUp = async (data: Inputs): Promise<void> => {
  try {
    if (JSON.stringify(data)) {
      console.log(data);
    }
    const username = data?.username;
    const email = data?.email;
    const password = data?.password;
    const auth = getAuth(firebaseApp);
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );

    if (userCredential) {
      console.log('user: ', userCredential.user);
    }

    const idToken = await userCredential.user.getIdToken();

    const _ = axios.post(
      '/api/users/',
      {
        username,
      },
      {
        headers: {
          Authorization: idToken,
        },
      },
    );
  } catch (error) {
    if (
      error instanceof Error &&
      isFirebaseError(error) &&
      error.code === 'auth/email-already-in-use'
    ) {
      console.error('既に使用されているメールアドレスです。');
    } else {
      console.error('不明なエラー: ', error);
    }
  }
};
