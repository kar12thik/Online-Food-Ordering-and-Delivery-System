const navbarReducer = (state=false,action) =>{
    switch(action.type){
        case 'SET_NAVBAR':
            return !state
        default:
            return state
    }
}

export default navbarReducer;