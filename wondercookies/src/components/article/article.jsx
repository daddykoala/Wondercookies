import React from 'react';
// import PropTypes from 'prop-types';
import COOKIES from '../../assets/cookie_choco.png'

import './articleStyles.scss';

function article() {
return (
    <article className='card'>
        <h1>Choco</h1>
        <div className='circle'>

            <div className='article--describe'>
            <h3>ingredients</h3>
            <p>farine,oeuf,lait,sucre,choco et bcp d'amour </p>
            <h3>allergenes</h3>
            <p>gluten</p>
            </div>
        <img src={COOKIES} alt="cookies" />
        </div>






    </article>
);
}
// article.propTypes = {};

// article.defaultProps = {};

export default React.memo(article);