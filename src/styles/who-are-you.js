import styled from '@emotion/styled';

import {
  TOP_BAR_HEIGHT,
  BOTTOM_BAR_HEIGHT,
  MAIN_GRADIENT_COLOR,
  GRAY_GRADIENT_COLOR,
} from './constants';

const FeedLayout = styled.div({
  paddingTop: TOP_BAR_HEIGHT,
  paddingBottom: BOTTOM_BAR_HEIGHT,
  background: '#2a236e',
  
  
  
  
  
});

const FeedContent = styled.div({
 padding: '0 2em',
});

const GradientButton = styled.button(({ disabled }) => ({
  float: 'right',
  height: '3em',
  width: '8em',
 
  
  color: 'black',
  fontWeight: 'bold',
  padding: '.4em',
  outline: 'none',
  backgroundImage: `linear-gradient(
    60deg, 
    ${disabled ? GRAY_GRADIENT_COLOR[0] : MAIN_GRADIENT_COLOR[0]}, 
    ${disabled ? GRAY_GRADIENT_COLOR[1] : MAIN_GRADIENT_COLOR[1]}
  )`,
  '& div': {
    display: 'flex',
    height: '100%',
    
    backgroundColor: 'white',
    
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  '&:hover': {
    fontWeight: 'bold',
    boxShadow: 'none',
    color: '#003399',
    transition: '0.5s',
    '& div': {
      backgroundColor: '#003399',
    },
  },
}));

/*
var bg = new Audio('배경음.mp3');

bg.addEventListener('ended', function() { this.currentTime = 0; this.play(); }, false);
*/

export {
  FeedLayout,
  FeedContent,
  GradientButton,
};
