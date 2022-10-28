import { FooterDiv } from './footer.styles';
import WeddingWire from '../../assets/badge-weddingawards_en_US.png';
import IGLogo from '../../assets/iglogo.png';
import FBLogo from '../../assets/fblogo.png';

const Footer = () => {
  return (
    <FooterDiv>
      <a
        href="https://www.weddingwire.com/biz/sc-beauty-austin/180d2c99e8efa991.html"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={WeddingWire}
          alt="WeddingAwards"
          style={{ height: 36, width: 36 }}
        />
      </a>
      <a
        href="https://www.instagram.com/samanthacronkbeauty/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={IGLogo}
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
          src={FBLogo}
          alt=""
          style={{ height: 36, width: 36 }}
        />
      </a>
    </FooterDiv>
  );
};

export default Footer;
