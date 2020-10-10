import * as React from 'react';
import styled from 'styled-components';
import { subtitle1CSS } from '../../styles';

interface ButtonProps {
  text: React.ReactNode;
  background?: string;
  onclick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Btn = styled.button`
  ${subtitle1CSS};
  font-weight: bold;
  font-size: 25px;
  width: 100px;
  height: 55px;
  color: #fff;
  border-radius: 15px;
`;

const Button: React.FC<ButtonProps> = ({ text, background, onclick }) => {
  return (
    <Btn style={{ background }} onClick={onclick}>
      {text}
    </Btn>
  );
};

export default Button;
