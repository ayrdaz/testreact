

/*
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
      isToggleOn:!state.isToggleOn
     
    }));
  }
  render() {
    return (
      <div>
        <Button
      
        color={this.state.isToggleOn ? "primary" : "secondary"}
          _onClick={this.handleClick}

         variant="contained"
          
        >
          Click
        </Button>
      </div>
    );
  }
}


*/

import React from "react";
import styled from '@emotion/styled';
import Checkbox from '@material-ui/core/Checkbox';


import { ACCENT_COLOR } from '../../styles/constants';

const Icon = styled.i(({ selected }) => ({
  float: 'right',
 // margin: 'auto 0 auto 1em',
  color: selected ? ACCENT_COLOR : '#FF00DD',
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
/*

import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend"></FormLabel>
      <FormGroup aria-label="position" row>
      
        <FormControlLabel
          value="CLICK"
          control={<Checkbox color="secondary" />}
          label="CLICK"
          labelPlacement="CLICK"
        />
      </FormGroup>
    </FormControl>

  );
}

*/