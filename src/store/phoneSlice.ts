import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Phone {
  id: string
  name: string
  description: string
}

interface PhoneState {
  list: Phone[]
}

const initialState: PhoneState = {
  list: [],
};

export const phoneSlice = createSlice({
  name: 'phones',
  initialState,
  reducers: {
    addPhone: (state, action: PayloadAction<Phone>) => {
      state.list.push(action.payload);
    },
    removePhone: (state, action: PayloadAction<string>) => {
      state.list = state.list.filter(p => p.id !== action.payload);
    },
  },
});

export const { addPhone, removePhone } = phoneSlice.actions;
export default phoneSlice.reducer;
