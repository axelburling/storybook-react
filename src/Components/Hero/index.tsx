import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${(p) => p.theme.colorOffWhite};
  width: 200px;
`;

const Hero = () => {
  return (
    <Wrapper>
      <h1>Hello Mom!</h1>
    </Wrapper>
  );
};

export default Hero;
