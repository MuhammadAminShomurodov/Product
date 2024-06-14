import "./Contents.scss";
import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";

const Contents = () => {
  return (
    <div className="Contents">
      <div className="container">
        <h2>Contents Strategies</h2>
        <p>
          We focus on ergonomics and meeting you where you work. It's only a
          keystroke away.{" "}
        </p>
        <div className="cards">
          <div className="card">
            <img src={image1} alt="" />
            <p>By Wahid Ari | 03 March 2019</p>
            <h3>Increasing Prosperity With Positive Thinking</h3>
          </div>
          <div className="card">
            <img src={image2} alt="" />
            <p>By Wahid Ari | 03 March 2019</p>
            <h3>Motivation Is The First Step To Success</h3>
          </div>
          <div className="card">
            <img src={image3} alt="" />
            <p>By Wahid Ari | 03 March 2019</p>
            <h3>Success Steps For Your Personal Or Business</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contents;
