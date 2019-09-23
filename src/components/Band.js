import React, { Component } from 'react';
//import { connect } from 'react-redux';

class Band extends Component {

  render() {
    return(
      <div>
        <li>{this.props.band.name}<span><button onClick={() => this.props.delete(this.props.band.id)}>Delete</button></span></li>

      </div>
    );
  }
};

// const mapDispatchToProps = dispatch => {
//   return {
//     delete: id => dispatch({type: 'DELETE_BAND', id: id})
//   }
// }

//export default connect(null, mapDispatchToProps)(Band);
export default Band;
