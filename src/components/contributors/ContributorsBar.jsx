import React from 'react';

import styled from '@emotion/styled';

import { ContributorsImage } from '../../assets/images';

import { TOP_BAR_HEIGHT } from '../../styles/constants';

const Container = styled.div({
  position: 'relative',
  padding: 'auto',
  height: TOP_BAR_HEIGHT,
  background: '#4646CD',
  font:'white',
  boxShadow: '0 6px 6px -6px #4646CD',
  '& img': {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    height: '2em',
  },
});

export default function ContributorsBar() {
  return (
    <Container>
      <img
        src={ContributorsImage}
        alt=""
      />
    </Container>
  );
}
