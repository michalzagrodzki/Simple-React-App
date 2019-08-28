import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="Main">
        <h1>Item Component</h1>
        <p>{this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Item;
