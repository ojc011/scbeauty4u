import { FeatImgContTwo } from './featured-imgs.styles';

const FeaturedImgs2 = () => {
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
    <FeatImgContTwo>
      <div>
        <img src={images['IMG_4600-630x417.jpg']} alt="Alexis" />
      </div>
      <div>
        <img src={images['MG_0118-630x417.jpg']} alt="Alexis" />
      </div>
    </FeatImgContTwo>
  );
};

export default FeaturedImgs2;
