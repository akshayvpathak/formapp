import * as ActionTypes from '../ActionTypes/CurrentPage';

export const CurrentPage = (
    state = {
        currentpage : 1,
        totalpage: 0
    },action
)=>{
    switch(action.type){
        case ActionTypes.INCREMENT_PAGE_NUMBER:
            if(state.currentpage != state.totalpage)
            return {
                ...state,
                currentpage: state.currentpage + 1
            }
            else
            return state
        case ActionTypes.DECREMENT_PAGE_NUMBER:
            if(state.currentpage != 1)
            return{
                ...state,
                currentpage: state.currentpage - 1
            }
            else
            return state
        case ActionTypes.SET_PAGE_NUMBER:
            return{
                ...state,
                totalpage: action.payload
            }
        default: 
            return state
    }
}