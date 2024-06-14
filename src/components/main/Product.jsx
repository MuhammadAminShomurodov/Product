import "./Product.scss";
import cursor from "../../assets/images/cursor.svg";
import cursor2 from "../../assets/images/icon2.svg";
import cursor3 from "../../assets/images/icon3.svg";
import cursor4 from "../../assets/images/icon4.svg";
const Product = () => {
  return (
    <div className="Product">
      <div className="container bg-image">
        <h2>
          Product was Built Specifically <br />
          for You
        </h2>
        <div className="cards">
          <div className="card">
            <img src={cursor} alt="cursor.svg" />
            <h3>First click tests</h3>
            <p>While most people enjoy casino gambling,</p>
          </div>
          <div className="card">
            <img src={cursor2} alt="cursor2.svg" />
            <h3>Design surveys</h3>
            <p>Sports betting, lottery and bingo playing for the fun</p>
          </div>
          <div className="card">
            <img src={cursor3} alt="cursor3.svg" />
            <h3>Preference tests</h3>
            <p>The Myspace page defines the individual.</p>
          </div>
          <div className="card">
            <img src={cursor4} alt="cursor4.svg" />
            <h3>Five second tests</h3>
            <p>Personal choices and the overall personality of the person. ,</p>
          </div>
        </div>
        <button>SIGN UP NOW</button>
      </div>
    </div>
  );
};

export default Product;
