import { Fragment } from 'react';
import FeaturedImgs1 from '../../components/featured-imgs/featured-imgs1.component';
import FeaturedImgs2 from '../../components/featured-imgs/featured-imgs2.component';
import HomeSlider from '../../components/home-slider/home-slider.component';
import { HomeCont } from './home.styles';

const Home = () => {
  return (
    <Fragment>
      <HomeCont>
        <FeaturedImgs1 />
        <HomeSlider />
        <FeaturedImgs2 />
      </HomeCont>
    </Fragment>
  );
};

export default Home;
