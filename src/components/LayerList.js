import React from 'react';

import { connect } from 'react-redux';

import './LayerList.css'

const mapStateToProps = state => ({
  layers: state.layers.map(({name, type}) => ({name, type})).reverse(),
})
class LayerList extends React.Component {
  render() {
    return <div>
      <ul className="LayerList">
        <li><h4>layers</h4></li>
        {this.props.layers.map(({name, type}, idx) => <li key={idx}>{name} ({type})</li>)}
      </ul>
    </div>
  }
}

export default connect(mapStateToProps)(LayerList)
