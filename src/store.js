import reducer from './reducer';
import { configureStore } from '@reduxjs/toolkit'

const initialState = {cart: []};

const store = configureStore({
    reducer: reducer,
    preloadedState: initialState,
    devTools: true
})

export default store