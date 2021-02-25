import styled from 'styled-components';

interface WrapperProps {
  showBg: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  height: 100vh;
  background-color: #130525;
  position: relative;

  ${(props) =>
    props.showBg &&
    `&:after {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    top: 0;
    z-index: 1;
    left: 0;
    background-color: #000000b3;
    animation: changeBG 1s;
  }`}

  @keyframes changeBG {
    from {
      background-color: transparent;
    }
    to {
      background-color: #000000b3;
    }
  }

  @media (min-width: 768px) {
    background-color: #faf5ff;
  }

  .main {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    height: 100vh;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
      width: 60%;
      margin-left: 40%;
      justify-content: center;
    }

    @media (min-width: 1366px) {
      width: 45%;
      margin-left: 55%;
    }

    &__content {
      width: 311px;
      height: 357px;

      @media (min-width: 768px) {
        width: 300px;
        height: 400px;
      }

      &__data {
        position: relative;
        padding-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 311px;
        height: 357px;
        background-color: #faf5ff;
        border: 1px solid #faf5ff;
        border-radius: 8px;

        @media (min-width: 768px) {
          align-items: flex-start;
          width: 300px;
          height: 400px;
          padding-bottom: 20px;

          h4 {
            margin-bottom: 30px;
          }
        }
      }

      &__links {
        text-align: center;
        margin-top: 50px;

        a {
          text-decoration: underline;
        }
      }
    }
  }
`;

const BgImage = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;
  background-color: #130525;
  background-image: url('/assets/bg-mobile.jpeg');

  @media (min-width: 768px) {
    width: 40%;
    height: 100vh;
  }

  @media (min-width: 1366px) {
    width: 55%;
    height: 100vh;
  }

  background-position: center;
  background-size: cover;

  &:after {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(#69399900, #130525);
  }
`;

export { BgImage, Wrapper };
