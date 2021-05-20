import React from 'react';

import styled from '@emotion/styled';

import { WhiteLogoImage } from '../../assets/images';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  padding: '2em',

});

const Logo = styled.img({
  height: '240px', //첫화면로고크기
  width: '210px',
  margin: '1em auto',
});

const Text = styled.div({
  textAlign: 'center',
  color: 'white',
});

export default function HomeTitle() {
  return (
    <Container>
      {
      <Logo
        src={WhiteLogoImage}
        alt=""
      />
      
    }
      {/* <Text>나에게 맞는</Text>
      <Text>컴퓨터공학부 트랙은?</Text> */}
    </Container>
  );
}
