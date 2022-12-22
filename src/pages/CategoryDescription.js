import { Fragment } from "react";
import Header from "../components/layout/Header";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CategoryDescriptionContainer from "../components/layout/CategoryDescriptionContainer";

const CategoryDescription = (props) => {
    return(
        <Fragment>
        <Header onClick={props.onShowCart}/>
        <Navbar />
        <CategoryDescriptionContainer />
        <Footer />
      </Fragment>
    )
}

export default CategoryDescription;