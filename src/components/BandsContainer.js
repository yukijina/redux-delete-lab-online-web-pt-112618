import React, { Component } from 'react'
import BandInput from './BandInput';
import Band from './Band';
import { connect } from 'react-redux'

class BandsContainer extends Component {
  
  render() {
    const bands = this.props.bands.map(band => <Band band={band} key={band.id} delete={this.props.delete} />)
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>{bands}</ul>
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({ bands })

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "ADD_BAND", name }),
  delete: id => dispatch({type: 'DELETE_BAND', id: id})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
