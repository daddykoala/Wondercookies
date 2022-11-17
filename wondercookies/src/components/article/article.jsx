import React from 'react';
// import PropTypes from 'prop-types';
import COOKIES from '../../assets/cookie_choco.png'

import './articleStyles.scss';

function article() {
return (
    <article className='card'>
        <h1>cookies choco</h1>
        <div className='circle'>

        <img src={COOKIES} alt="cookies" />
        </div>
            {/* <div className='article--describe'>
            <h3>ingredients</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere aspernatur inventore temporibus commodi alias in.</p>
            <h3>allergenes</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere aspernatur inventore temporibus commodi alias in.</p>
            </div> */}






    </article>
);
}
// article.propTypes = {};

// article.defaultProps = {};

export default React.memo(article);