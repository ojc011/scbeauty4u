import { FeatImgContOne } from './featured-imgs.styles';
import FI1 from '../../assets/anthonyandkendra-388-of-555-630x417.jpg';
import FI2 from '../../assets/untitled17of62-630x417.jpg';

const FeaturedImgs1 = () => {
  return (
    <FeatImgContOne>
      <div>
        <img src={FI1} alt="Featured" />
      </div>
      <div>
        <img src={FI2} alt="Featured" />
      </div>
    </FeatImgContOne>
  );
};

export default FeaturedImgs1;
