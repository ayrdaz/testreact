import React from 'react';

import styled from '@emotion/styled';

import { GradientButton } from '../../styles/who-are-you';

const Icon = styled.i({
  fontSize: '1em',
  color:'white',
  fontcolor:'white'
});

export default function NextButton({ onClick, disabled }) {
  return (
    <GradientButton
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <div>
        <span>NEXT</span>
        <Icon className="material-icons">
          arrow_forward_ios
        </Icon>
      </div>
    </GradientButton>
  );
}
