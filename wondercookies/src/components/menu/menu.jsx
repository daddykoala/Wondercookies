import React from 'react';
// import PropTypes from 'prop-types';

import './menuStyles.scss';

function menu() {
return (
    <nav className='container menu'>
        <a href="#" className='menu__items'>Acceuil</a>
        <a href="#cookies" className='menu__items'>Nos cookies</a>
        <a href="#panier" className='menu__items'>Commande</a>
        <a href="#contact" className='menu__items'>Contact</a>
    </nav>
);
}
// menu.propTypes = {};

// menu.defaultProps = {};

export default React.memo(menu);