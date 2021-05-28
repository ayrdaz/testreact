

import React from "react";
import styled from '@emotion/styled';
import Checkbox from '@material-ui/core/Checkbox';


import { ACCENT_COLOR } from '../../styles/constants';

const Icon = styled.i(({ selected }) => ({
  float: 'right',
 // margin: 'auto 0 auto 1em',
  color: selected ? ACCENT_COLOR : 'white',

}));

export default function CheckboxIcon({ isSelected }) {
  return (
    <>
      {
        isSelected
          ? (
            <Icon
              className="material-icons"
              selected={isSelected}
            >
              ✓
            </Icon>
          )
          : (
            <Icon
              className="material-icons"
              selected={isSelected}
            >
              ✓
            </Icon>
          )
      }
    </>
  );
}