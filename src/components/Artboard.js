import React from 'react'
import {connect} from 'react-redux'

import Layer from './Layer'

import "./Artboard.css"

const mapStateToProps = state => ({
  layers: state.layers.map(({name, ...rest}) => rest),
})

const mapDispatchToProps = dispatch => ({
  handleDragEnd: (id) => {
    return (dx, dy) => dispatch({type: 'MOVE_LAYER', data: {id, dx, dy}})
  }
})

class Artboard extends React.Component {
  render() {
    return <svg width="400" height="400" viewBox="0 0 400 400" stroke="black" fill="white" strokeWidth="1">
      <g ref={ref=>this.svgRoot = ref}>
        {this.props.layers.map(({type, ...rest}, idx) => <Layer
          type={type} key={idx} rest={rest}
          onDragEnd={this.props.handleDragEnd(rest.id)}
          />)}
      </g>
    </svg>

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Artboard)
