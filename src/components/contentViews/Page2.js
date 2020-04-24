import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LabelBottomNavigation from "./LabelBottomNavigation";
import ControlledExpansionPanels from "./ControlledExpansionPanels";
import ListDividers from "./ListDividers";
import InsetDividers from "./InsetDividers";
import MiddleDividers from "./MiddleDividers";
import SimpleList from "./SimpleList";

export default class Page2 extends Component {

  render() {
    return(
      <div style={{marginBottom: '32px'}}>
        <h1>List</h1>
        <ControlledExpansionPanels/>
        <div style={{margin: '4px'}}/>
        <InsetDividers/>
        <div style={{display: 'flex'}}>
          <ListDividers/>
          <MiddleDividers/>
        </div>
        <SimpleList/>
        <LabelBottomNavigation/>
      </div>
    )
  }
}
