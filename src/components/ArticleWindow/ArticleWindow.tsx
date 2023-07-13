import React from 'react';
import { ArticleType } from '../../types';
import './index.css';

interface Props {
  article: ArticleType;
  handleCloseArticleWindow: () => void;
}

function ModalWindow({ article, handleCloseArticleWindow }: Props) {
  function onClick(e: any) {
    const target = e.target as Element;

    if (target.id === 'overlay' || target.id === 'hidePopupBtn') {
      handleCloseArticleWindow();
    }
  }
  return (
    <div className='pop-up' id='overlay' onClick={(e) => onClick(e)}>
      <div className='pop-up__container'>
        <article className='article'>
          <button className='pop-up__close' id='hidePopupBtn'>
            x
          </button>
          <img
            src={article.img}
            srcSet={`${article.img_2x} 2x`}
            alt={article.title}
            width='335'
            height='230'
          />
          <span className='article__tag'>{article.tags}</span>
          <h2 className='article__title'>{article.title}</h2>
          <p className='article__text'>{article.text}</p>
          <p className='article__info'>
            <span className='article__author'>{article.autor}</span>
            <span className='article__date'>{article.date}</span>
            <span className='article__views'>{article.views} Views</span>
          </p>
        </article>
      </div>
    </div>
  );
}

export default ModalWindow;
