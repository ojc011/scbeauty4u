import { FooterDiv } from './footer.styles';

const Footer = () => {
  function importAll(r) {
    let images = {};
    r.keys().map((item) => {
      images[item.replace('./', '')] = r(item);
      return images;
    });
    return images;
  }

  const images = importAll(require.context('../../assets', false, /.png/));

  return (
    <FooterDiv>
      {/* <a
        href="https://www.weddingwire.com/biz/sc-beauty-austin/180d2c99e8efa991.html"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={images['badge-weddingawards_en_US.png']}
          alt="WeddingAwards"
          style={{ height: 36, width: 36 }}
        />
      </a> */}
      <a
        href="https://www.instagram.com/samanthacronkbeauty/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={images['iglogo.png']}
          alt=""
          style={{ height: 36, width: 36 }}
        />
      </a>
      <a
        href="https://www.facebook.com/scbeauty4u"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={images['fblogo.png']}
          alt=""
          style={{ height: 36, width: 36 }}
        />
      </a>
    </FooterDiv>
  );
};

export default Footer;
