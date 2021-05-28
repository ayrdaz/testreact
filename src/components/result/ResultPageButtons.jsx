
import React from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  display: 'flex-basis',
  width: '100%',
  padding: '2em',

});

const gotoButton = styled.button({
   
     float: 'left',         
  height: '3em',
  width: '7em',
  color: 'white',
  border: '2px solid #14148C',
  color:'white',
  backgroundColor: '#14148C',
  fontWeight: 'bold',
  fontFamily: 'Source Code Pro',
  boxShadow: '0 4px 4px -4px #14148C',
  outline: 'none',
  '&:hover': {
    backgroundColor: '#28288C',
    boxShadow: '0 10px 10px -10px #28288C',
  },
});

const  HomeButton = styled.button({
  float: 'left',
  height: '3em',
  width: '7em',
  color: 'black',
  border: '2px solid #14148C',
  color:'white',
  backgroundColor: '#14148C',
  fontWeight: 'bold',
  fontFamily: 'Source Code Pro',
  boxShadow: '0 4px 4px -4px #14148C',
  outline: 'none',
  '&:hover': {
    backgroundColor: '#28288C',
    boxShadow: '0 10px 10px -10px #28288C',
  },
});





const ContributorsButton = styled.button({
  float: 'right',
  flexGrow: 1,
  height: '3em',
  width: '8em',
  marginLeft: '1em',
  border: '2.5px solid #14148C',
  color:'white',
  backgroundColor: '#14148C',
  fontWeight: 'bold',
  fontFamily: 'Source Code Pro',
  boxShadow: '0 6px 6px -6px #14148C',
  outline: 'none',
  '&:hover': {
    backgroundColor: '#28288C',
    boxShadow: '0 10px 10px -10px rgba(0,0,0,.4)',
  },
});


export default function ResultPageButtons({ onClick }) {
  return (


   <Container>
   <Container>
 <gotoButton
        type="button"
        onClick={() => window.location.href = "http://cse.hansung.ac.kr/"}
      >
       Click➡컴퓨터공학부 바로가기
       </gotoButton>
   </Container>

      < HomeButton
        type="button"
        onClick={() => onClick('/')}
      >
        Home
      </HomeButton>

      <ContributorsButton
        type="button"
        onClick={() => onClick('/contributors')}
      >
        CONTRIBUTORS
        {' '}
        <span role="img" aria-label="congrats">🥳</span>
      </ContributorsButton>


 </Container>
  );
}