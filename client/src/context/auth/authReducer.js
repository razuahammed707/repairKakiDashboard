
function reducer(state,action){
    switch(action.type){
        case "add":
            return {count:state.count+20}
        case "LOAD_POST":
            return {
                ...state,
                post:action.payload,
                loading:false
            };
        default:
            throw new Error();
    }

}

export default reducer;