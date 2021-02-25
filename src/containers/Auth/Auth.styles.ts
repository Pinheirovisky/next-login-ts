import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 15px;
  position: absolute;
  z-index: 3;
  width: 100%;
  max-width: 350px;
  height: 400px;
  border: 1px solid #fff;
  background-color: #fff;
  border-top-width: 10px;
  border-radius: 8px;
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
  border-top-color: #383e71;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: growUp 1s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  overflow: hidden;

  @keyframes growUp {
    from {
      width: 0;
      height: 0;
      visibility: hidden;
    }
    to {
      max-width: 350px;
      width: 100%;
      height: 400px;
      visibility: block;
    }
  }

  h1 {
    text-align: center;
  }

  button {
    position: relative;
    width: 100%;
    max-width: 300px;
    height: 48px;
    color: #ffffff;
    font-size: 16px;
    font-family: 'Montserrat';
    background-image: linear-gradient(to right, #9d25b0, #383e71);
    border: 1px solid transparent;
    border-radius: 8px;
    transition: 300ms all;
    cursor: pointer;
    margin-top: 30px;

    &:enabled::before {
      transition: all 300ms ease;
      content: '';
      width: 0;
      height: 48px;
      background-color: #9d25b0;
      border-radius: 8px;
      position: absolute;
      top: 0;
      left: 0;
    }

    & span {
      color: #fff;
      mix-blend-mode: color-dodge;
    }

    &:hover::before {
      background-color: #9d25b0;
      color: #ffffff;
      width: 100%;
      max-width: 300px;
    }
  }
`;

export default Wrapper;
