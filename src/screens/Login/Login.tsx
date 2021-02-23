import React from 'react';
import Link from 'next/link';

// Components
import { Form, Text } from '../../components';

// Styles
import { BgImage, Wrapper } from './Login.styles';

const Login: React.FC = () => {
  return (
    <Wrapper>
      <div className="main">
        <div className="main__content">
          <div className="main__content__data">
            <Text as="h1">Olá, seja bem-vindo!</Text>
            <Text as="h4">Para acessar a plataforma, faça seu login.</Text>
            <Form />
            <button type="submit">ENTRAR</button>
          </div>
          <div className="main__content__links">
            <Text as="h3">Esqueceu seu login ou senha?</Text>
            <Text as="h3">
              Clique{' '}
              <Link href={`/`}>
                <a>aqui</a>
              </Link>
            </Text>
          </div>
        </div>
      </div>
      <BgImage />
    </Wrapper>
  );
};

export default Login;
