// Individual Reducer
const todo = (state = 0,action) => { 
  switch(action){
    case '1' : return state + 99
    default: return state
  }
}

// Individual Reducer
const visibility = (state = false,action) => {
  switch(action){
    case 'TOGGLE' : return state= !state
    default: return state
  }
}

const combineReducer = (reducer) => {
  return (state = {} ,action) => {
    return Object.keys(reducer).reduce(
      (nextState,key) => {
        nextState[key] = reducer[key](state[key],action)
        return nextState
      },
      {}
    )
  }
}


const mainReducer = combineReducer({
  todo,
  visibility,
})

const globalObj = mainReducer()

console.log('globalObj is ', globalObj)
