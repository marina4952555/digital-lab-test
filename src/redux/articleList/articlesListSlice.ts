import { createSlice } from '@reduxjs/toolkit';
import { ArticleType } from '../../types';
import { getAllArticles, getFilteredArticles } from './thunks';

const initialState = [] as ArticleType[];

const articleListSlice = createSlice({
  name: 'articleList',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllArticles.fulfilled, (state, action) => {
      if (action.payload) {
        return action.payload;
      }
    });
    builder.addCase(getFilteredArticles.fulfilled, (state, action) => {
      if (action.payload) {
        return action.payload;
      }
    });
  },
});

export default articleListSlice.reducer;
