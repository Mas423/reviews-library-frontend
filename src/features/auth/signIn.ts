import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseApp } from '../../sdk/firebase';
import { isFirebaseError } from '../../types/auth';

export const signIn = async (
  email: string,
  password: string,
): Promise<void> => {
  try {
    const auth = getAuth(firebaseApp);
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
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
