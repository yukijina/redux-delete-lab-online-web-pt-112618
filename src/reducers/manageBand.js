export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
    const band = {
      name: action.name,
      id: Math.random()*1000000000000
    }
      return { ...state, bands: [...state.bands, band] }

    case 'DELETE_BAND':
      return {bands: state.bands.filter(band => band.id !== action.id)}

    default:
      return state;
  }
};
