import React from 'react';

import styled from '@emotion/styled';

import ExternalLink from './ExternalLink';

import { contributorsImages } from '../../assets/images';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#6B66FF',
  color:'#6B66FF',
  margin: '2em',
  padding: '2em',
  color:'white',
 
  boxShadow: '0 8px 8px -8px rgba(0,0,0,.5)',
});

const Role = styled.div({
  marginBottom: '.5em',
  paddingBottom: '.8em',
  width: '100%',
  borderBottom: '.5px solid #6B66FF',
  color:'white',
  fontFamily: 'Source Code Pro',
  fontSize: '1.2em',
  fontWeight: 'bold',
  textAlign: 'center',
 
});

const ProfileImage = styled.img({
  display: 'block',
 
  border: 0,
  
  background: 'black',
  boxShadow: '0 6px 6px -6px rgba(0,0,0,.4)',
});

const Name = styled.div({
  fontWeight: 'bold',
  fontSize: '1.2em',
});

const Email = styled.div({
  margin: '.5em 0',
  color: '#4285E6',
});

const Description = styled.div({
  margin: '.5em 0 1em 0',
});

export default function MainContributor({ contributor }) {
  const {
    id, role, name, description, email, link,
  } = contributor;

  return (
    <Container>
      <Role>{role}</Role>
      <ProfileImage
        src={contributorsImages[id]}
        alt=""
        width="200"
        height="270" //contributor사진크기
    
      />
      <Name>{name}</Name>
      <Email>{email}</Email>
      <Description>{description}</Description>
      <ExternalLink link={link[0]} />
      {/* <ExternalLink link={link[1]} /> */}
    </Container>
  );
}
