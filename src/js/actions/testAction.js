import axios from 'axios';

export function data() {
    return function(dispatch) {
        axios.get("https://api.github.com/users/mralexgray/repos")
        .then((response) => {
            dispatch({
                type : "DATA",
                payload: response.data
            })
        }).catch((error) => {
            dispatch({
                type : "DATA",
                payload: error 
            })
        })
    }
}