import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #130525;
  position: relative;

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

    &__content {
      width: 311px;
      height: 357px;

      &__data {
        position: relative;
        padding-bottom: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 311px;
        height: 357px;
        background-color: #faf5ff;
        border: 1px solid #faf5ff;
        border-radius: 8px;

        button {
          position: absolute;
          width: 168px;
          height: 48px;
          bottom: -24px;
          color: #ffffff;
          font-size: 16px;
          font-family: 'Montserrat';
          box-shadow: 0px 10px 6px #000;
          background-image: linear-gradient(to right, #9d25b0, #383e71);
          border: 1px solid transparent;
          border-radius: 8px;
        }
      }

      &__links {
        text-align: center;
        margin-top: 50px;
      }
    }
  }
`;

const BgImage = styled.div`
  width: 100%;
  height: 60vh;
  position: relative;
  background-image: url('/assets/bg-mobile.jpeg');
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
