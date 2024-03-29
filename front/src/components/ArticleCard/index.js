import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Loader from './Loader';

const ArticleCard = ({ name, author, date, url, image, loading }) => {
    if (loading) return <Loader />;

    return (
        <Link to={url} className="article-item__link" title={name}>
            <div className="article-item__image-wrapper">
                <picture className="article-item__image">
                    <img className="article-item__image" src={image} alt="" />
                </picture>
            </div>
            <div className="article-item__text">
                <h2 className="article-item__title">{name}</h2>
                {(author || date) && (
                    <div className="article-item__meta">
                        {author && <div className="article-item__author">{author}</div>}
                        {date && <div className="article-item__date">{date}</div>}
                    </div>
                )}
            </div>
        </Link>
    );
};

ArticleCard.defaultProps = {
    name: 'Без названия',
    date: null,
    loading: false,
    author: null,
    image: 'https://placehold.it/300x300',
};

ArticleCard.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string,
    date: PropTypes.string,
    loading: PropTypes.bool,
    image: PropTypes.string,
    author: PropTypes.string,
};

export default ArticleCard;
