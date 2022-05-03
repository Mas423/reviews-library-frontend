import axios, { AxiosError } from 'axios';

export type Inputs = {
  username: string;
  email: string;
  password: string;
  exampleRequired: string;
};

type ErrorResponse = {
  message: string;
};

export const signUp = async (data: Inputs): Promise<void> => {
  try {
    const username = data?.username;
    const email = data?.email;
    const password = data?.password;

    const res = await axios({
      method: 'post',
      url: '/api/users',
      data: {
        username,
        email,
        // TODO: 平文で送らない
        password,
      },
    });
    console.log(res.data);
  } catch (error) {
    // TODO: Axios->Firebaseのエラー判断をしたい
    if (error instanceof Error) {
      if (axios.isAxiosError(error)) {
        console.error(
          `isAxiosError: ${JSON.stringify(
            (error as AxiosError<ErrorResponse>).response?.data.message,
          )}`,
        );
      } else {
        console.error(`不明なエラー: ${error.message}`);
      }
    }
  }
};
