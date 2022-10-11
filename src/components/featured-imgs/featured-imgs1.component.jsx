import { FeatImgContOne } from './featured-imgs.styles';

const FeaturedImgs1 = () => {
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
    <FeatImgContOne>
      <div>
        <img
          src={images['anthonyandkendra-388-of-555-630x417.jpg']}
          alt="Alexis"
        />
      </div>
      <div>
        <img src={images['untitled17of62-630x417.jpg']} alt="Alexis" />
      </div>
    </FeatImgContOne>
  );
};

export default FeaturedImgs1;
