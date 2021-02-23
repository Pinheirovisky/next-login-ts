import styled from 'styled-components';

interface WrapperProps {
  error: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  label {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 15px 0 0 0;

    span {
      font-size: 12px;
      font-weight: 400;
      color: #383e71;
      margin: 0 0 5px 10px;
    }

    input {
      width: 256px;
      height: 48px;
      background-color: #faf5ff;
      border: 1px solid ${(props) => (props.error ? '#FF377F' : '#989fdb')};
      border-radius: 8px;
      padding: 0 10px;

      @media (min-width: 768px) {
        width: 360px;
      }
    }

    input::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: #989fdb;
    }
    input::-moz-placeholder {
      /* Firefox 19+ */
      color: #989fdb;
    }
    input:-ms-input-placeholder {
      /* IE 10+ */
      color: #989fdb;
    }
    input:-moz-placeholder {
      /* Firefox 18- */
      color: #989fdb;
    }

    p {
      margin: 5px 0 0 10px;
      color: #ff377f;
    }

    svg {
      position: absolute;
      right: 12px;
      top: 40px;
    }
  }
`;

export default Wrapper;
