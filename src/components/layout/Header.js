import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import CartButton from "../ui/CartButton"
import SearchBar from "../ui/SearchBar";

const Header = (props) => {
  return (
    <section>
      <article className="bg-[#D9D9D9] flex flex-row items-center p-[.5rem]">
        <a href="https://api.whatsapp.com/send/?phone=5492323517210&text&type=phone_number&app_absent=0"><FaWhatsapp className="mx-[.75rem] text-[1rem] text-[#A61212]" /></a>
        <a href="https://www.instagram.com/outletde_mates/"><FaInstagram className="mr-[1rem] text-[1rem] text-[#A61212]" /></a>
        <p className="text-[#A61212] text-[0.8rem] mx-auto">
          {" "}
          Aceptamos Mercado Pago y todas las tarjetas de crédito. Envíos a todo
          el país
        </p>
      </article>
      
      <article className="bg-[#F8F9FA] border-b-2 border-[#A61212]">
        <div className=" flex flex-row items-center justify-between mx-[10rem] py-[1rem]">
          <a href="/"><img src="/images/logo.png" alt="" className="w-[8rem]" /></a>
          <SearchBar />
          <CartButton onClick={props.onClick} />
        </div>
      </article>
    </section>
  );
};

export default Header;
