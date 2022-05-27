import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

export const addQuizForTopicId = quiz => {
    const { quizId, topicId } = quiz;
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quiz));
        dispatch(addQuizId( { quizId: quizId, topicId: topicId } ));
    }
};

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: 
        {
            quizzes: {}
        },
    reducers: {
        addQuiz: (state, action) => {
            const { quizId, name, topicId, cardIds } = action.payload;
            state.quizzes[quizId] = {
                id: quizId,
                name: name, 
                topicId: topicId,
                cardIds: cardIds
            }
        } 
    }
});

export const selectQuizzes = state => state.quizzes.quizzes;
export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;