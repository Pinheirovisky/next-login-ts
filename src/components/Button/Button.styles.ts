import styled from 'styled-components';

const Wrapper = styled.button`
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
  transition: 300ms all;
  cursor: pointer;

  &:enabled::before {
    // transition: all 0.85s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition: all 300ms ease;
    content: '';
    width: 0;
    height: 100%;
    background-color: #9d25b0;
    border-radius: 8px;
    position: absolute;
    top: 0;
    left: 0;
  }

  & span {
    color: $white;
    mix-blend-mode: color-dodge;
  }

  &:hover::before {
    background-color: #9d25b0;
    color: #ffffff;
    width: 100%;
  }

  @media (min-width: 768px) {
    margin-top: 30px;
    width: 300px;
    box-shadow: 0px 10px 25px #cf99db;
  }
`;

export default Wrapper;
