import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import {BsCart2} from "react-icons/bs"
import SearchBar from "../ui/SearchBar";

const Header = () => {
  return (
    <section>
      <article className="bg-[#D9D9D9] flex flex-row items-center p-[.5rem]">
        <FaWhatsapp className="mx-[.75rem] text-[1rem] text-[#A61212]" />
        <FaInstagram className="mr-[1rem] text-[1rem] text-[#A61212]" />
        <p className="text-[#A61212] text-[0.8rem] mx-auto">
          {" "}
          Aceptamos Mercado Pago y todas las tarjetas de crédito. Envíos a todo
          el país
        </p>
      </article>
      
      <article className="bg-[#F8F9FA] border-b-2 border-[#A61212]">
        <div className=" flex flex-row items-center justify-between mx-[10rem] py-[1rem]">
          <img src="/images/logo.png" alt="" className="w-[8rem]" />
          <SearchBar />
          <BsCart2 className="text-[2.5rem] text-[#A61212]" />
        </div>
      </article>
    </section>
  );
};

export default Header;
