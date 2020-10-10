import * as React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import Button from './index';

const ButtonWrapper = styled.div`
  margin: 3rem;
`;

storiesOf('Button', module)
  .add(`vanilla`, () => (
    <ButtonWrapper>
      <Button
        background="red"
        text="Test"
        // tslint:disable-next-line: no-console
        onclick={() => console.log('hello')}
      />
    </ButtonWrapper>
  ))
  .add(`blue`, () => (
    <ButtonWrapper>
      <Button
        background="#171c8f"
        color="red"
        text="Test"
        // tslint:disable-next-line: no-console
        onclick={() => console.log('hello')}
      />
    </ButtonWrapper>
  ));
