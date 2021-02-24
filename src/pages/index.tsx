import React from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../store';

// Screens
import { Login } from '../screens';

// Store
import { loadRequest } from '../store/ducks/repositories/actions';
import { Repository } from '../store/ducks/repositories/types';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  const initialState: ApplicationState = useSelector(
    (state: ApplicationState) => state.repositories.data,
  );

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>

      <button onClick={() => dispatch(loadRequest())}>Search</button>

      {initialState.map((repo: Repository) => (
        <ul key={repo.id}>{repo.name}</ul>
      ))}

      <Login />
    </div>
  );
};

export default Home;
