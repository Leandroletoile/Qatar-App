import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth/authSlice';
import figurinesSlice from './figurines/figurinesSlice';

export const store = configureStore({
    reducer: {
        auth: authSlice,
        figurines: figurinesSlice
    }
})