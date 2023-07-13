import React from 'react';
import { ArticleType } from '../../types';
import './index.css';

interface Props {
  article: ArticleType;
  index: number;
  handleOpenArticleWindow: (index: number) => void;
}

function Article({ article, index, handleOpenArticleWindow }: Props) {
  return (
    <li className='article__item'>
      <article className='article'>
        <img
          src={article.img}
          srcSet={`${article.img_2x} 2x`}
          alt={article.title}
          width='335'
          height='230'
        />
        <span className='article__tag'>{article.tags}</span>
        <h2
          className='article__title'
          onClick={() => handleOpenArticleWindow(index)}
        >
          {article.title}
        </h2>
        <p className='article__info'>
          <span className='article__author'>{article.autor}</span>
          <span className='article__date'>{article.date}</span>
          <span className='article__views'>{article.views} Views</span>
        </p>
        <p className='article__text'>{article.text}</p>
      </article>
    </li>
  );
}

export default Article;
