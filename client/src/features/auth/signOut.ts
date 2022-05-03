import { getAuth, signOut as firebaseSignOut } from 'firebase/auth';
// import { firebaseApp } from '../../sdk/firebase';

export const signOut = async (): Promise<void> => {
  try {
    const auth = getAuth();
    await firebaseSignOut(auth);
    console.log('ログアウトしました。');
  } catch (error) {
    console.error(error);
  }
};
