export const addItem = item => ({
    type: "ADD_TO_CART",
    payload: item
});

export const removeItem = item => ({
    type: "REMOVE_FROM_CART",
    payload: item
});