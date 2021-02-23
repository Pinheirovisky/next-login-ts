import React from 'react';

// Styles
import Wrapper from './Text.styles';

interface Props {
  as: string;
  children: string;
}

const Text: React.FC<Props> = ({ as, children }: Props) => {
  const SelectTypes = () => {
    switch (as) {
      case 'h1':
        return <h1>{children}</h1>;
      case 'h3':
        return <h3>{children}</h3>;
      case 'h4':
        return <h4>{children}</h4>;
      default:
        return <>{children}</>;
    }
  };

  return (
    <Wrapper>
      <SelectTypes />
    </Wrapper>
  );
};

export default Text;
