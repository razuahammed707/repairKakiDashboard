
function reducer(state,action){
    
    switch(action.type){
       
        case "LOAD_PARTNER":
            return {
                ...state,
                partners:action.payload,
                loading:false
            };
        case "LOAD_USER":
            return {
                ...state,
                users:action.payload,
                loading:false
            };

            case "LOAD_REQUEST":
                return {
                    ...state,
                    requests:action.payload,
                    loading:false
                };
            case "LOAD_DASHBOARD":
                return {
                    ...state,
                    dashboard:action.payload,
                    loading:false
                };
            case "ACTIVE_STATUS":
                return {
                    ...state,
                    partners:action.payload,
                    loading:false
                };
            case "LOAD_ALL_QUOTES":
                return {
                    ...state,
                    allQuotes:action.payload,
                    loading:false
                };
            
            case "SET_LOADING":
                return {
                    ...state,
                    loading:action.payload,
                };
                
            default:
                throw new Error();
        }

}

export default reducer;