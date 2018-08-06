import React from 'react';
import {get} from 'axios';
import SubComponent from './SubComponent.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    get('/immediate')
    .then((a,b) => {
      console.log(a,b);
    })
  }
  render() {
    return (<div id="app-container"><SubComponent /></div>)
  }
}