import "../main/Price.scss";

const Price = () => {
  return (
    <div className="Price">
      <div className="container">
        <h1>Price Table</h1>
        <p>We offer competitive price</p>
        <div className="price-box">
          <div className="box1">
            <h3>Free</h3>
            <p>Brief price description</p>
            <div className="box-nomber">
              <div className="nomber1">
                <h1>0</h1>
              </div>
              <div className="nomber2">
                <h4>$</h4>
                <p>Per / month</p>
              </div>
            </div>
            <div className="box-a">
              <a href="#">Only 2 Operators</a>
              <a href="#">Notifications</a>
              <a href="#">Landing Pages</a>
            </div>
            <button>Order Now</button>
          </div>
          <div className="box1">
            <h3>Standard</h3>
            <p>Brief price description</p>
            <div className="box-nomber">
              <div className="nomber1">
                <h1>5</h1>
              </div>
              <div className="nomber2">
                <h4>$</h4>
                <p>Per / month</p>
              </div>
            </div>
            <div className="box-a">
              <a href="#">5+ Operators</a>
              <a href="#">Notifications</a>
              <a href="#">Landing Pages</a>
            </div>
            <button>Order Now</button>
          </div>
          <div className="box1">
            <h3>Premium</h3>
            <p>Brief price description</p>
            <div className="box-nomber">
              <div className="nomber1">
                <h1>10</h1>
              </div>
              <div className="nomber2">
                <h4>$</h4>
                <p>Per / month</p>
              </div>
            </div>
            <div className="box-a">
              <a href="#">10+ Operators</a>
              <a href="#">Notifications</a>
              <a href="#">Landing Pages</a>
            </div>
            <button>Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
