import { Fragment } from "react";
import Header from "../components/layout/Header";
import MainContainer from "../components/layout/MainContainer";
import Navbar from "../components/layout/Navbar";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Navbar />
      <MainContainer />
    </Fragment>
  );
};

export default Home;
