import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Hero from "./components/main/Hero";
import Product from "./components/main/Product";
import Contents from "./components/main/Contents";
import Price from "./components/main/Price";
import Clients from "./components/main/Clients";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Product />
      <Contents />
      <Price />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
