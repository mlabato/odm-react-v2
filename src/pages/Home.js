import { Fragment } from "react";
import Header from "../components/layout/Header";
import MainContainer from "../components/layout/MainContainer";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Home = (props) => {
  return (
    <Fragment>
      <Header  onClick={props.onShowCart} />
      <Navbar/>
      <MainContainer />
      <Footer />
    </Fragment>
  );
};

export default Home;
