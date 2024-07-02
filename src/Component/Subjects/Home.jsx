import React, { useState } from 'react';
// import React , {useRef} from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import "../Blogs/style.css"
import CardUi from "../layout/CardUi"
import SwiperLayout from '../layout/SwiperLayout';
import CarouselSlider from '../layout/CarouselSlider';
import FilteringData from '../layout/FilteringData';
import AnySuggestion from './AnySuggestion';



function Home({ src }) {
  document.title="SuccessBloger"
  return (
    <>
      {/* first silder start */}
      <CarouselSlider />
      {/* first slider end */}


      {/* filtering data start */}
      <FilteringData></FilteringData>
      {/* filtering data end */}


      {/* swiper  slider bar  start */}
      <SwiperLayout/>
      {/* <SwiperLayout></SwiperLayout> */}
      {/* swiper slider bar end  */}

      {/* AnyBlogSuggestion part start */}
      <AnySuggestion/>
      {/* AnyBlogSuggestion part End */}
    </>
  );
}
export default Home;