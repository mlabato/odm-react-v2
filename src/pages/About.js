import { Fragment } from "react";
import Header from "../components/layout/Header";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AboutContainer from "../components/layout/AboutContainer";

const About = (props) => {
    return(

        <Fragment>
        <Header onClick={props.onShowCart}/>
        <Navbar />
        <AboutContainer />
        <Footer />
      </Fragment>
    )
}

export default About;