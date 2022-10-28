import { FeatImgContTwo } from './featured-imgs.styles';
import FI1 from '../../assets/IMG_4600-630x417.jpg';
import FI2 from '../../assets/MG_0118-630x417.jpg';

const FeaturedImgs2 = () => {
  return (
    <FeatImgContTwo>
      <div>
        <img src={FI1} alt="Featured" />
      </div>
      <div>
        <img src={FI2} alt="Featured" />
      </div>
    </FeatImgContTwo>
  );
};

export default FeaturedImgs2;
