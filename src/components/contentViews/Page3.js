import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LabelBottomNavigation from "./LabelBottomNavigation";
import FileSystemNavigator from "./FileSystemNavigator";
import StyledTreeItem from "./StyledTreeItem";

export default class Page3 extends Component {

  render() {
    return(
      <div style={{marginBottom: '32px'}}>
        <h1>Tree View</h1>
        <FileSystemNavigator/>
        <StyledTreeItem/>
        <LabelBottomNavigation/>
      </div>
    )
  }
}
