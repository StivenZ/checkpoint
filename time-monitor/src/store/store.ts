import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import personasReducer, { NOMBRE_PERSONAS } from './personas/personas.slice';


export const store = configureStore({
  reducer: {
    [NOMBRE_PERSONAS]: personasReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
