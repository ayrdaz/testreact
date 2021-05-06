import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  marign: 0,
  padding: '0 2em',
  width: '100%',
});

const GotoTestButton = styled.button({
  height: '3em',
  width: '100%',
  border: 0,
  
  fontWeight: 'bold',
  padding: '.4em 1.4em',
  margin: '1em 0',
  backgroundColor: '#8041D9',
  alignItems: 'center',
  outline: 'none',
  boxShadow: '0 5px 5px -5px #4646CD',
  '&:hover': {
    transition: '.5s',
    boxShadow: '0 15px 15px -15px #4646CD',
  },
});

const ContributorsButton = styled.button({
  height: '3em',
  width: '100%',
  border: '2px solid 4646CD',
  
  fontWeight: 'bold',
  padding: '.4em 1.4em',
  margin: '1em 0',
  color: '4646CD',
  backgroundColor: 'transparent',
  alignItems: 'center',
  outline: 'none',
  boxShadow: '0 5px 5px -5px #4646CD',
  '&:hover': {
    transition: '.5s',
    boxShadow: '0 15px 15px -15px #4646CD',
    color: '#b2f4ff',
  },
});

const InspiredText = styled.div({
  color: '#4646CD',
  textAlign: 'center',
  fontSize: '.8em',
  marginTop: '.5em',
});

export default function HomeButtons({
  onClickTest, onClickContributors,
}) {
  return (
    <Container>
      <GotoTestButton
        onClick={onClickTest}
      >
        Start Test!!
      </GotoTestButton>
      {/*
      <ContributorsButton
        onClick={onClickContributors}
      >
        만든 사람들
      </ContributorsButton>
      */}
      <InspiredText>
        {/* Inspired by Instagram */}
      </InspiredText>
    </Container>
  );
}
