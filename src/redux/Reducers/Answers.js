import * as ActionTypes from '../ActionTypes/Answers';

export const Answers = (
    state = { 
        answers: [],
        errors: null
    },action
)=>{
    switch (action.type) {
        case ActionTypes.ADD_ANSWER:
            let answerExists=false;
            let newAnswers = state.answers.map((answer)=>{
                if(answer.question.id == action.payload.question.id){
                    answerExists=true;
                    return(action.payload)
                }
                else{
                    return answer
                }
            })
            if(answerExists){
                return{
                    ...state,
                    answers: newAnswers
                }
            }
            else{
                return{
                    ...state,
                    answers: [...state.answers,{...action.payload}]
                }
            }
            
        default: 
        return state
    }
}