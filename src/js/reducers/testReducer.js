export default function reducer(state = {
    repositoryData : {}
}, action){
    switch(action.type){
        case "DATA" : {
            return { ...state, repositoryData : action } 
        }
        default : {}
    }

    return state;
}