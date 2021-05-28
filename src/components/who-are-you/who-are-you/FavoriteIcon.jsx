/*
import React from 'react';

import styled from '@emotion/styled';

import { ACCENT_COLOR } from '../../styles/constants';

const Icon = styled.i(({ selected }) => ({
  float: 'right',
  margin: 'auto 0 auto 1em',
  color: selected ? ACCENT_COLOR : '#5F5457',
}));

export default function FavoriteIcon({ isSelected }) {
  return (
    <>
      {
        isSelected
          ? (
            <Icon
              className="material-icons"
              selected={isSelected}
            >
              favorite
            </Icon>
          )
          : (
            <Icon
              className="material-icons"
              selected={isSelected}
            >
              favorite_border
            </Icon>
          )
      }
    </>
  );
}


import { Button, Icon } from '@material-ui/core'
import { Add, Delete } from '@material-ui/icons'

export default class MyComponent extends React.Component {
  render() {
    return (
     <div>
    <Button variant="contained" >클릭</Button>

        
 
 </div>
      

     )
  }
}

*/
import React from "react";

import { Button, Icon } from '@material-ui/core'
import { Add, Delete } from '@material-ui/icons'

export default class ContainedButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    return (
      <div>
        <Button
          color={this.state.isToggleOn ?"secondary" : "primary"}
          _onClick={this.handleClick}
          variant="contained"
          
        >
          Click
        </Button>
      </div>
    );
  }
}

