import { createSlice, PayloadAction, configureStore } from '@reduxjs/toolkit';

export interface TVElement {
  label: string
  description: string
}

export interface TVState {
  mas: TVElement[]
  actives: number[]
  newElement: string
  editIndex: number | null
}

const getInitialArray = <T>(key: string): T[] => {
  if (typeof window !== 'undefined') {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }
  return [];
};

const initialState: TVState = {
  mas: getInitialArray<TVElement>('mas'),
  actives: getInitialArray<number>('actives'),
  newElement: '',
  editIndex: null,
};

const tvSlice = createSlice({
  name: 'tv',
  initialState,
  reducers: {
    setNewElement(state, action: PayloadAction<string>) {
      state.newElement = action.payload;
    },
    addElement(state) {
      const [label = '', description = ''] = state.newElement.split(':');
      if (label.trim() && description.trim()) {
        state.mas.push({ label: label.trim(), description: description.trim() });
        state.actives.push(1);
        state.newElement = '';
      }
    },
    removeElement(state, action: PayloadAction<number>) {
      const idx = action.payload;
      state.actives[idx] = 0;
    },
    resurrectElement(state, action: PayloadAction<number>) {
      const idx = action.payload;
      state.actives[idx] = 1;
    },
    editElement(state, action: PayloadAction<number>) {
      const idx = action.payload;
      state.editIndex = idx;
      const el = state.mas[idx];
      state.newElement = `${el.label}:${el.description}`;
    },
    saveElement(state) {
      const idx = state.editIndex;
      const [label = '', description = ''] = state.newElement.split(':');
      if (idx !== null && label.trim() && description.trim()) {
        state.mas[idx] = { label: label.trim(), description: description.trim() };
        state.editIndex = null;
        state.newElement = '';
      }
    },
  },
});

// Persistence subscriber
export const store = configureStore({
  reducer: { tv: tvSlice.reducer },
});

store.subscribe(() => {
  const state = store.getState().tv;
  if (typeof window !== 'undefined') {
    localStorage.setItem('mas', JSON.stringify(state.mas));
    localStorage.setItem('actives', JSON.stringify(state.actives));
  }
});

export const {
  setNewElement,
  addElement,
  removeElement,
  resurrectElement,
  editElement,
  saveElement,
} = tvSlice.actions;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
