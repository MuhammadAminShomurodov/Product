import "../footer/Footer.scss";
import statistic from "../../assets/images/statistic.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="footer-all">
          <div className="footer-left">
            <h2>Join 100 Compannies who boost their business with Product</h2>
            <button>Get This</button>
          </div>
          <div className="footer-right">
            <img src={statistic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
