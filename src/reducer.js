
const shopReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state, cart: [...state.cart, action.payload]
            };
        case 'REMOVE_FROM_CART':
            return {...state, cart: state.cart.filter(item => item.title !== action.payload.title)};
        default:
            return state;
    }
};

export default shopReducer;