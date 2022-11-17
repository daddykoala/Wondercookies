import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss/pagination';
// import 'swiper/scss/navigation';
// import PropTypes from 'prop-types';

import Article from '../article/article';


import './cookiesListStyles.scss';

function cookiesList() {
return (
    <section className='container'>

<Swiper
      spaceBetween={50}
      slidesPerView={5}
      navigation
    //   pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Article/></SwiperSlide>
  
      ...
    </Swiper>
        <ul className='list--cookies'>

        </ul>
    </section>
);
}
// cookiesList.propTypes = {};

// cookiesList.defaultProps = {};

export default React.memo(cookiesList);