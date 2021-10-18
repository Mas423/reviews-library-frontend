// TODO: 一時的にコンソール表示のため許可
/* eslint-disable no-console */
import { FC, useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/user';

type UserData = {
  Id: number;
  Name: string;
  Memo: string;
}[];

const Home: FC = () => {
  const [users, setUser] = useState<UserData>();

  useEffect(() => {
    void axios.get<UserData>('http://localhost:3000/user').then((res) => {
      console.log(res);
      setUser(res.data);
    });
  }, []);

  const getUser = (): void => {
    console.log(users);
  };

  return (
    <>
      <h1>[Home]</h1>

      <ul>
        {users?.map((user) => (
          <li key={user.Id}>{user.Name}</li>
        ))}
      </ul>

      <button onClick={() => getUser()} type="button">
        user確認
      </button>
    </>
  );
};

export default Home;
