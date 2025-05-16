import { configureStore } from '@reduxjs/toolkit';         // у тебя уже был
import phoneReducer from './phoneSlice';     // вот он

export const store = configureStore({
  reducer: {
    phones: phoneReducer,
  },
});

// (опционально) для типов
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
