import { configureStore } from '@reduxjs/toolkit'
import { blogDataReducer } from './slices';

const rootReducer = {
    blogDataReducer
}

export const store = configureStore({
    reducer: rootReducer
})

export const dispatch = store.dispatch;