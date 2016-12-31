import {combineReducers} from 'redux';


const layers = (state=[], action) => {
  const {data} = action;
  switch(action.type) {
    case 'MOVE_LAYER':
      return state.map(layer => {
        if (layer.id === data.id) {
          if (layer.type === 'circle') {
            return {
              ...layer,
              cx: layer.cx + data.dx,
              cy: layer.cy + data.dy,
            }
          }
          if (layer.type === 'rect') {
            return {
              ...layer,
              x: layer.x + data.dx,
              y: layer.y + data.dy,
            }
          }
          throw new Error('wtf dude')
        }
        return layer
      })
    default:
      return state;
  }
}

export default combineReducers({
  layers
});
