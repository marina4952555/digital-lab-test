import React from 'react';
import Article from '../Article/Article';
import { useAppSelector } from '../../redux/hooks';
import './index.css';

interface Props {
  handleOpenArticleWindow: (index: number) => void;
}

function ArticleList({ handleOpenArticleWindow }: Props) {
  const { articleList } = useAppSelector((state) => ({
    articleList: state.articleList,
  }));

  return (
    <ul className='article__list'>
      {articleList.map((article, index) => (
        <Article
          article={article}
          key={index}
          index={index}
          handleOpenArticleWindow={handleOpenArticleWindow}
        />
      ))}
    </ul>
  );
}

export default ArticleList;
