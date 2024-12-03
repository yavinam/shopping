import "./App.css";
import Signup_Signin from "./components/Signup_Signin";
import Product from "./components/Product";
import "swiper/css";
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
    <Navbar/>
      <Signup_Signin />
      <Product />
    </>
  );
}

export default App;
