import { Fragment } from "react";
import { useContext, useState } from "react";
import { FaCartPlus } from "react-icons/fa";

import CartContext from "../../store/cart-context";

const ProductDetailCard = (props) => {
  const cartCtx = useContext(CartContext);
  const [cartIsClicked, setCartIsClicked] = useState(false);

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.id,
      model: props.model,
      category: props.category,
      discount: props.discount,
      amount: 1,
      price: props.price,
    });

    setCartIsClicked(true);
  };

  const renderVirola = (category) => {
    switch (category) {
      case 1:
        return "Aluminio";
      case 2:
        return "Alpaca Lisa";
      case 3:
        return "Alpaca Cincelada";
      case 4:
        return "Sin Virola";
      default:
        return "foo";
    }
  };

  const renderColor = (category) => {
    switch (category) {
      case 1:
        return "bg-white";
      case 2:
        return "bg-black";
      case 3:
        return "bg-[#523A28]";
      case 4:
        return "bg-[#A47551]";
      case 5:
        return "bg-[#523A28]";
      case 6:
        return "bg-red-500";
      case 7:
        return "bg-green-500";
      case 8:
        return "bg-blue-500";
      case 9:
        return "bg-yellow-500";
      case 10:
        return "No aplica";
      default:
        return "foo";
    }
  };

  const renderMaterial = (category) => {
    switch (category) {
      case 1:
        return "Aluminio";
      case 2:
        return "Alpaca Lisa";
      case 3:
        return "Alpaca Cincelada";
      case 4:
        return "Sin Virola";
      default:
        return "foo";
    }
  };

  return (
    <Fragment>
      <section className="mx-[20rem] my-[5rem] flex flex-row items-center">
        <img src={props.image} alt="" className="w-[35rem]"></img>
        <article className="flex flex-col">
          <div className="font-bold text-[2.3rem]">{props.model}</div>
          <div className="text-[1.5rem] mb-[2rem]">{props.description}</div>

          <ul>
            <li className="text-[1.2rem] mt-[.5rem]">
              Virola: {renderVirola(props.virola)}
            </li>
            <li className="text-[1.2rem] mt-[.5rem]">
              Material: {renderMaterial(props.material)}
            </li>
            <li className="text-[1.2rem] mt-[.5rem] flex flex-row items-center "></li>
            <li>
              <div
                className={
                  "border-2  border-black w-[2rem] mt-[1rem] h-[2rem] rounded-[10rem] " +
                  renderColor(props.color)
                }
              />
            </li>
          </ul>

          <div className="flex flex-row mt-[4rem]">
            <div className="text-[#A61212] text-[3rem] mr-[2rem] font-bold">
              $ {props.price}
            </div>
            <button
              className={`${
                cartIsClicked && "animate-wiggle"
              } text-[#A61212] text-[3rem]`}
              onClick={addToCartHandler}
              onAnimationEnd={() => setCartIsClicked(false)}
            >
              <FaCartPlus />
            </button>{" "}
          </div>
          <a
            href="/"
            className="text-center font-bold mt-[4rem] text-[1.5rem] hover:text-[#A61212]"
          >
            Volver a la Home
          </a>
        </article>
      </section>
    </Fragment>
  );
};

export default ProductDetailCard;
