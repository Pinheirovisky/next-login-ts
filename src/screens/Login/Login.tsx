import React from 'react';

// Styles
import { BgImage, Wrapper } from './Login.styles';

const Login: React.FC = () => {
  return (
    <Wrapper>
      <div className="main">
        <div className="main__content">
          <div className="main__content__data">
            <h1>Olá, seja bem-vindo!</h1>
            <h4>Para acessar a plataform, faça seu login.</h4>
            <form className="form">
              <div className="form__input">
                <label htmlFor="email">
                  <input type="email" id="email" />
                </label>
              </div>
              <div className="form__input">
                <label htmlFor="password">
                  <input type="password" id="password" />
                </label>
              </div>
            </form>
            <button type="submit">entrar</button>
          </div>
          <h3>Esqueceu seu login ou senha?</h3>
          <h3>Clique aqui</h3>
        </div>
      </div>
      <BgImage />
    </Wrapper>
  );
};

export default Login;
