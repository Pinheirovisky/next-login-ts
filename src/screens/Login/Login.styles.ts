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
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 311px;
        height: 357px;
        background-color: #faf5ff;
        border: 1px solid #faf5ff;
        border-radius: 8px;

        h1 {
          font-size: 24px;
          line-height: 32px;
          font-weight: 400;
          width: 139px;
          text-align: center;
          color: #383e71;
        }

        h4 {
          font-size: 12px;
          line-height: 20px;
          font-weight: 700;
          text-align: center;
          width: 255px;
          color: #989fdb;
          margin: 16px 0 20px 0;
        }
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
