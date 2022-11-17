import React from 'react';
import PropTypes from 'prop-types';

import './connectStyles.scss';

function connect() {
return (
    <section>
        
        <label htmlFor="nom">Mon nom</label>
        <label htmlFor="nom">Mon prénom</label>
        <label htmlFor="nom">Mon email</label>
        <input type="text" />
    </section>
);
}
connect.propTypes = {};

connect.defaultProps = {};

export default React.memo(connect);