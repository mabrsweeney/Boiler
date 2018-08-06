import React from 'react';
import axios from 'axios';

export default class SubCompnent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    axios.get('/wait')
    .then((a,b) => {
      console.log(a)
      this.setState({data:a.data});
    })
  }

  render() {
    return !this.state.data ? (<div>Loading...</div>) : (<div>{this.state.data}</div>);
  }
}