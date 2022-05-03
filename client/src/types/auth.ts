type FirebaseError = {
  code: string;
  message: string;
  name: string;
};

export const isFirebaseError = (e: Error): e is FirebaseError =>
  'code' in e && 'message' in e;
