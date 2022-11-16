import React from 'react';
// import PropTypes from 'prop-types';

import Article from '../article/article';


import './cookiesListStyles.scss';

function cookiesList() {
return (
    <section className='container'>
        <ul className='list--cookies'>
            <Article/>
            <Article/>
            <Article/>
            <Article/>
            <Article/>

        </ul>

        
    </section>
);
}
// cookiesList.propTypes = {};

// cookiesList.defaultProps = {};

export default React.memo(cookiesList);