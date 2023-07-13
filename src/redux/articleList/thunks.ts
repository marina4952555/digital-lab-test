import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ArticleType } from '../../types';

export const getAllArticles = createAsyncThunk('getAllArticles', async () => {
  try {
    const response = await axios.get<ArticleType[]>(
      'https://cloud.codesupply.co/endpoint/react/data.json',
    );

    return response.data;
  } catch (e) {
    console.log(e);
  }
});

export const getFilteredArticles = createAsyncThunk(
  'getFilteredArticles',
  async (searchText: string) => {
    const preparedText = searchText.toLowerCase();

    try {
      const response = await axios.get<ArticleType[]>(
        'https://cloud.codesupply.co/endpoint/react/data.json',
      );

      const filtredArticles = response.data.filter(
        (article) =>
          article.title.toLowerCase().includes(preparedText) ||
          article.text.toLowerCase().includes(preparedText),
      );

      return filtredArticles;
    } catch (e) {
      console.log(e);
    }
  },
);
