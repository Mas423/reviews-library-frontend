import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebaseApp } from '../../sdk/firebase';
import { isFirebaseError } from '../../types/auth';

export const signUp = async (): Promise<void> => {
  try {
    const email = 'email@gmail.com';
    const password = 'hogehoe_1234';
    const auth = getAuth(firebaseApp);
    const user = await createUserWithEmailAndPassword(auth, email, password);
    if (user) {
      console.log(user);
    }
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
