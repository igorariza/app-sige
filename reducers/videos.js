function videos(state = {}, action) {
  switch (action.type){
    case 'SET_SUBJECT_LIST': {
      return {...state, ...action.payload}
    }
    case 'SET_SELECTED_MOVIE': {
      return {...state, selectedMovie: action.payload.movie}
    }
    default:
      return state
  }
}

export default videos;