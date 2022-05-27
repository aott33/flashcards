import { createSlice } from "@reduxjs/toolkit";


const cardsSlice = createSlice({
    name: 'cards',
    initialState: 
        {
            cards: {}
        },
    reducers: {
        addCard: (state, action) => {
            const payload = action.payload;
            const id = action.payload.id;
            state.cards[id]=payload;
        },
    }
});

export const selectCard = state => state.cards.cards;
export const {addCard} = cardsSlice.actions;
export default cardsSlice.reducer;