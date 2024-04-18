import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { cardSlice } from '../features/cardApiThunks/cardSlice';

export const store = configureStore({
  reducer: {
    phones: cardSlice.reducer,
  },
});

//Typings
type RootState = ReturnType<typeof store.getState>;
export const useTypedDispatch = () => useDispatch<typeof store.dispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
