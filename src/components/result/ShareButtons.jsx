import React from 'react';

import styled from '@emotion/styled';

import {
  FacebookShareButton,
  FacebookIcon,

  TwitterShareButton,
  TwitterIcon,
} from 'react-share';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
});

const ButtonWrapper = styled.div({
  margin: '.2em',
});

export default function ShareButtons() {
  const shareUrl = 'https://ayrdaz.github.io/testreact/';

  return (
    <Container>
      <ButtonWrapper>
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon
            size={32}
            round
          />
        </FacebookShareButton>
      </ButtonWrapper>
      
      <ButtonWrapper>
        <TwitterShareButton url={shareUrl}>
          <TwitterIcon
            size={32}
            round
          />
        </TwitterShareButton>
      </ButtonWrapper>
    </Container>
  );
}
