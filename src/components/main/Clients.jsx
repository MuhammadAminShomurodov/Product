import "../main/Clients.scss";
import stars from "../../assets/images/stars.svg";
import person1 from "../../assets/images/person1.png";
import person2 from "../../assets/images/person2.png";
import person3 from "../../assets/images/person3.png";

const Clients = () => {
  return (
    <div className="Clients">
      <div className="container">
        <h2>What Clients Say</h2>
        <p>
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <div className="cards">
          <div className="card">
            <img src={stars} alt="" />
            <p>
              Product helps you see how many more days you need to work to reach
              your financial goal.
            </p>
            <div className="person">
              <img src={person1} alt="" />
              <div className="person2">
                <p>Wahid Ari</p>
                <h4>Designer</h4>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={stars} alt="" />
            <p>
              Product helps you see how many more days you need to work to reach
              your financial goal.
            </p>
            <div className="person">
              <img src={person2} alt="" />
              <div className="person2">
                <p>Wahid Ari</p>
                <h4>Designer</h4>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={stars} alt="" />
            <p>
              Product helps you see how many more days you need to work to reach
              your financial goal.
            </p>
            <div className="person">
              <img src={person3} alt="" />
              <div className="person2">
                <p>Wahid Ari</p>
                <h4>Designer</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
