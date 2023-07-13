import { configureStore } from '@reduxjs/toolkit';
import articlesListSlice from './articleList/articlesListSlice';

export const store = configureStore({
  reducer: {
    articleList: articlesListSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
