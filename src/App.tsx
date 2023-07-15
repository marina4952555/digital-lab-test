import React, { useEffect, useState } from 'react';
import './App.css';
import './fonts.css';
import Header from './components/Header/Header';
import ArticleWindow from './components/ArticleWindow/ArticleWindow';
import { ArticleType } from './types';
import ArticleList from './components/ArticleList/ArticleList';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { getAllArticles } from './redux/articleList/thunks';

function App() {
  const [currentArticle, setCurrentArticle] = useState<ArticleType | null>(
    null,
  );

  const dispatch = useAppDispatch();

  const articleList = useAppSelector((state) => state.articleList);

  const handleOpenArticleWindow = (index: number) => {
    const currentArticle = articleList[index];

    if (currentArticle) {
      setCurrentArticle(currentArticle);
    }
  };

  const handleCloseArticleWindow = () => {
    setCurrentArticle(null);
  };

  useEffect(() => {
    dispatch(getAllArticles());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <ArticleList handleOpenArticleWindow={handleOpenArticleWindow} />
        {currentArticle && (
          <ArticleWindow
            article={currentArticle}
            handleCloseArticleWindow={handleCloseArticleWindow}
          />
        )}
      </main>
    </>
  );
}

export default App;
