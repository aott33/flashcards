import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
    name: 'topics',
    initialState: 
        {
            topics: {}
        },
    reducers: {
        addTopic: (state, action) => {
            const payload = action.payload;
            const id = action.payload.id;
            state.topics[id]=payload;
            state.topics[id]['quizIds'] = [];
        },
        addQuizId : (state, action) => {
            const { quizId, topicId } = action.payload
            state.topics[topicId].quizIds.push(quizId)
        }
    }
});

export const selectTopics = state => state.topics.topics;
export const {addTopic, addQuizId} = topicsSlice.actions;
export default topicsSlice.reducer;