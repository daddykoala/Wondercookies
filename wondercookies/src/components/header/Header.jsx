import React from 'react';
// import PropTypes from 'prop-types';
import LOGO from '../../assets/logo.png';

//ICON//
import { GrBasket } from 'react-icons/gr';

import './headerStyles.scss';

function header() {
return (
    <header>
        <img src={LOGO} alt="logo"  className='logo'/>
        <div className='header__icons'>
            <a href="#signin">Connectez vous</a>
            <a href="#signup">Inscrivez vous</a>
            <a href="#panier"><GrBasket/></a>
        </div>
    </header>
);
}
// header.propTypes = {};

// header.defaultProps = {};

export default React.memo(header);