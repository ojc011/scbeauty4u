import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import { SliderContainer } from './home-slider.styles';

const HomeSlider = () => {
  function importAll(r) {
    let images = {};
    r.keys().map((item) => {
      images[item.replace('./', '')] = r(item);
      return images;
    });
    return images;
  }

  const images = importAll(require.context('../../assets', false, /.jpg/));
  return (
      <SliderContainer>
        <Carousel>
          <div>
            <img src={images['Alexis-2.jpg']} alt="Alexis" />
          </div>
          <div>
            <img src={images['Alexis-3.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Alexis-4.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Alexis-9.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Alexis-10.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Alison-480x320.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Jordyn_and_Bob-281-750x500.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Jordyn_and_Bob-438-750x500.jpg']} alt="" />
          </div>
          <div>
            <img src={images['bri-wedding-2-750x500.jpg']} alt="" />
          </div>
          <div>
            <img src={images['bri-wedding-3-719x479.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Debbie-750x500.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Debbie2-750x500.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Glenna-480x320.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Glenna2-480x320.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Harleigh-2-750x500.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Harleigh-3-750x500.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Harleigh-4-750x500.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Harleigh-5-750x500.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Harleigh-6-750x500.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Harleigh-750x500.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Kyle-480x320.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Kyle2-480x320.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Laura--480x320.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Laura-2-480x320.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Laura-3-480x320.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Laura-4-480x320.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Liz-2-480x320.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Liz-3-480x320.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Liz-4-1-480x320.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Liz-4-480x320.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Liz-5-480x320.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Liz-6-480x320.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Liz-9-480x320.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Liz-10-480x320.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Liz-480x320.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Liz-and-Sean-2-750x500.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Liz-and-Sean-3-750x500.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Lizzie-3-750x500.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Lizzie-4-750x500.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Lizzie-750x500.jpg']} alt="" />
          </div>
          <div>
            <img src={images['MaKinzi-480x320.jpg']} alt="" />
          </div>
          <div>
            <img src={images['MaKinzi2-480x320.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Mariana-2-750x500.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Mariana-750x500.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Mary-480x320.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Mary2-480x320.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Mary3-480x320.jpg']} alt="" />
          </div>
          <div>
            <img src={images['MaryBM-480x320.jpg']} alt="" />
          </div>
          <div>
            <img src={images['MaryBM2-480x320.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Natalia-480x320.jpg']} alt="" />
          </div>
          <div>
            <img src={images['Timbre-2-480x320.jpg']} alt="" />
          </div>
          <div>
            <img src={images['timbre-480x320.jpg']} alt="" />
          </div>
        </Carousel>
      </SliderContainer>
  );
};

export default HomeSlider;
