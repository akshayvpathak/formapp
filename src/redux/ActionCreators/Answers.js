import * as ActionTypes from '../ActionTypes/Answers';

export const addAnswer = (answer) =>({
    type: ActionTypes.ADD_ANSWER,
    payload: answer
});

export const resetAnswers = () => ({
    type: ActionTypes.RESET_ANSWERS
})