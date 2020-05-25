import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  componentDidMount() {
    let tempId = this.props.match.params.id
    this.setState({ id: tempId })
  }

  render() { 
    return (
      <h2>
        林书豪--{ this.state.id }
      </h2>
    );
  }
}
 
export default List;