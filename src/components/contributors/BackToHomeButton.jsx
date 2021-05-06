import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  margin: '0 2em',
});

const Button = styled.button({
  height: '3em',
  width: '100%',
  border: '2.5px solid #3C5A91',
  color:'white',
 
  backgroundColor: '#3C5A91',
  fontWeight: 'bold',
  boxShadow: '0 6px 6px -6px #3C5A91',
  outline: 'none',
  '&:hover': {
    backgroundColor: '#506EA5',
    boxShadow: '0 10px 10px -10px #506EA5',
  },
});

export default function BackToHomeButton({ onClick }) {
  return (
    <Container>
      <Button onClick={onClick}>
        Home
      </Button>
    </Container>
  );
}
