import { Fragment } from "react";
import Header from "../components/layout/Header";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CategoryDescriptionContainer from "../components/layout/CategoryDescriptionContainer";

const ProductDescription = () => {
    return(
        <Fragment>
        <Header />
        <Navbar />
        <CategoryDescriptionContainer />
        <Footer />
      </Fragment>
    )
}

export default ProductDescription;