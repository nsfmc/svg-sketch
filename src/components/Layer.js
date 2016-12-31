import React from 'react';


class Layer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dx: 0,
      dy: 0,
    }
  }

  render() {
    const {type, rest} = this.props;
    const width = type === 'rect' ? rest.width : rest.r * 2;
    const height = type === 'rect' ? rest.height: rest.r * 2;
    const x = type === 'rect' ? rest.x : rest.cx - rest.r;
    const y = type === 'rect' ? rest.y : rest.cy - rest.r;
    const {dy, dx} = this.state;
    const transform = `translate(${dx} ${dy})`;
    return <g transform={transform}>
      {React.createElement(type, {...rest})}
      <rect className="Layer-Box" width={width} height={height} x={x} y={y}
        ref={el => this.el = el} onMouseDown={this.startMove}></rect>
    </g>
  }
  startMove = (e) => {
    this.startX = e.pageX;
    this.startY = e.pageY;
    document.addEventListener('mouseup', this.stopDragging)
    document.addEventListener('mousemove', this.dragLayer)
  }
  dragLayer = (e) => {
    const {pageX, pageY} = e;
    const {startX, startY} = this;
    const delta = {dx: (pageX-startX), dy:(pageY-startY)}
    this.setState((ps, p) => {
      return {...delta}
    })
  }
  stopDragging = (e) => {
    this.props.onDragEnd(this.state.dx, this.state.dy)
    this.setState({dx:0, dy:0})
    document.removeEventListener('mouseup', this.stopDragging)
    document.removeEventListener('mousemove', this.dragLayer)
  }
}

export default Layer;
