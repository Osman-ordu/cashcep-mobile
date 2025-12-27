
import { configureStore } from '@reduxjs/toolkit';
import { currencyReducer } from '@/store/currency';


export const store = configureStore({
  reducer: {
    currencyValue: currencyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
