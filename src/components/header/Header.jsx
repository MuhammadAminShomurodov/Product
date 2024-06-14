const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <div className="header-all">
          <div className="header-left">
            <a href="#">
              <img src="./src/assets/images/Logo.svg" alt="" />
              Product
            </a>
          </div>
          <div className="header-right">
            <a href="#">Product</a>
            <a href="#">Custumers</a>
            <a href="#">Pricing</a>
            <a href="#">Resources</a>
            <button>Sign In</button>
            <button>Sign Up</button>
            <img src="./src/assets/images/dark-mode.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
