import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DenseTable from "./DenseTable";
import ImgMediaCard from "./ImgMediaCard";
import LabelBottomNavigation from "./LabelBottomNavigation";

export default class Page1 extends Component {

  render() {
    return(
      <div style={{marginBottom: '32px'}}>
        <h1>Table</h1>
        <DenseTable/>
        <h1>Card view</h1>
        <div style={{display: 'flex'}}>
          <ImgMediaCard/>
          <ImgMediaCard/>
          <ImgMediaCard/>
          <ImgMediaCard/>
        </div>
        <LabelBottomNavigation/>
      </div>
    )
  }
}
