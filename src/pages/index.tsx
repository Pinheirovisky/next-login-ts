import React from 'react';
import Head from 'next/head';

// Screens
import { Login } from '../screens';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>

      <Login />
    </div>
  );
};

export default Home;
