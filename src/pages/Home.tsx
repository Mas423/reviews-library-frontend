import { FC } from 'react';
import Header from '../components/organisms/Header';

const Home: FC = () => {
  const home = 'Home';

  return (
    <>
      <Header />
      <h1>[{home}]</h1>
    </>
  );
};

export default Home;
