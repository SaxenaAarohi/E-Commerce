import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtocart: (state, action) => {
            const present = state.items.find(
                item => item.product.id === action.payload.id
            );

            if (present) {
                present.quantity += 1;
            }

            else {
                state.items.push(
                    {
                        product: action.payload,
                        quantity: 1,
                    }
                )
            }

        },

        removeitem: (state, action) => {
            state.items = state.items.filter(item => item.product.id != action.payload)
        },

        updatequantity: (state, action) => {
            const { id, quantity } = action.payload;
            const present = state.items.find(
                item => item.product.id == id
            );
            present.quantity = quantity;
        },

    },

});

export const { addtocart, removeitem, updatequantity } = cartSlice.actions;
export default cartSlice.reducer;
