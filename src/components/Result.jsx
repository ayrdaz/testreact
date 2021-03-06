import React from 'react';

import styled from '@emotion/styled';

import { RESULT_GRADIENT_COLORS } from '../styles/constants';

import ProfileBar from './result/ProfileBar';
import ResultContent from './result/ResultContent';
import ResultPageButtons from './result/ResultPageButtons';

const Container = styled.div(({ id }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '100vh',
  margin: 0,
  padding: 0,
  backgroundImage: `linear-gradient(
    60deg,
    ${RESULT_GRADIENT_COLORS[id][0]},
    ${RESULT_GRADIENT_COLORS[id][1]}
  )`,
  backgroundAttachment: 'fixed',
}));

const Wrapper = styled.div({
  margin: 0,
  padding: 0,
});

export default function Result({
  first, second, third, last, handleClick,
}) {
  return (
    <Container id={first.id}>
      <Wrapper>
        <ProfileBar
          isBackgroundDark={first.type === 'dark'}
        />
        
          {}
        
        <ResultContent
          first={first}
          second={second}
          third={third}
          last={last}
        />
      </Wrapper>
      <ResultPageButtons
        onClick={handleClick}
      />
    </Container>
  );
}
