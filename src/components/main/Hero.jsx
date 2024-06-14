export default function Hero() {
  return (
    <div className="Hero">
      <div className="container">
        <div className="hero-all">
          <div className="hero-left">
            <h1>Work at the speed of thought</h1>
            <p>
              Tools, tutorials, design and innovation experts, all in one place!
              The most intuitive way to imagine your next user experience.
            </p>
            <div className="btns">
              <button className="get-start">Get started</button>
              <button className="play">
                <img src="./src/assets/images/play.svg" alt="" />
                Watch the Video
              </button>
            </div>
          </div>
          <div className="hero-right">
            <img src="./src/assets/images/amico.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
