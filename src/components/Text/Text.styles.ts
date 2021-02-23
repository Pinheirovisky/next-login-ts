import styled from 'styled-components';

const Wrapper = styled.div`
  h1 {
    font-size: 24px;
    line-height: 32px;
    font-weight: 400;
    width: 139px;
    text-align: center;
    color: #383e71;

    @media (min-width: 768px) {
      font-size: 40px;
      line-height: 48px;
      text-align: start;
      width: 231px;
    }
  }

  h4 {
    font-size: 12px;
    line-height: 20px;
    font-weight: 600;
    text-align: center;
    /* width: 255px; */
    color: #989fdb;
    margin-top: 16px;

    @media (min-width: 768px) {
      font-size: 16px;
      text-align: start;
      width: 222px;
    }
  }

  h3 {
    font-size: 14px;
    line-height: 20px;
    font-weight: 300;
    text-align: center;
    width: 100%;
    color: #fff;
    margin: 0;

    @media (min-width: 768px) {
      color: #989fdb;
    }
  }
`;

export default Wrapper;
