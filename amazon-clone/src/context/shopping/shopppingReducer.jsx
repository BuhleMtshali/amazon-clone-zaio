import { act, useReducer } from "react";

export const shoppingReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TO_BASKET':
        default:
            return {
                state,
                basket: [...state.basket, action.payload]
            }
    }
}

