import { FaInstagram, FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  const paymentMethodsImages = [
    "amex@2x.png",
    "mastercard@2x.png",
    "mercadopago@2x.png",
    "tarjeta-naranja@2x.png",
    "visa@2x.png",
  ];

  const imagesMap = paymentMethodsImages.map((image) => {
    return (
      <li>
        <img src={"/images/" + image} alt="" className="h-[3rem] mr-[1rem]" />
      </li>
    );
  });

  return (
    <section className="bg-[#D9D9D9]  ">
      <article className="mx-[10rem] flex flex-row justify-between border-b-2 border-[#A61212] py-[3rem]">
        <div>
          <p id="contacto" className="font-bold text-[2rem] text-[#A61212]">Contacto</p>
          <div className="text-[1.2rem] my-[1rem] flex flex-row items-center">
            <FaPhone className="mr-[1rem] text-[#A61212]" /> +5492323-123456
          </div>
          <div className="text-[1.2rem] my-[1rem] flex flex-row items-center">
            <FaInstagram className="mr-[1rem] text-[#A61212]" /> @outlet_demates
          </div>
          <div className="text-[1.2rem] my-[1rem] flex flex-row items-center">
            <AiOutlineMail className="mr-[1rem] text-[#A61212]" />{" "}
            hola@outletdemates.com.ar
          </div>
        </div>
      </article>
      <article className="mx-[10rem] py-[1rem]">
        <p className="font-bold text-[2rem] text-[#A61212]">Medios de Pago</p>
        <ul className="flex flex-row my-[1rem]">{imagesMap}</ul>
        <p className="font-bold text-[2rem] text-[#A61212]">Medios de Envío</p>
        <img
          src="/images/oca@2x.png"
          alt=""
          className="h-[3rem]  mr-[1rem] my-[1rem]"
        />
      </article>

      <p className="px-[10rem] bg-[#A61212] text-[#D9D9D9] py-[1rem]">
        Copyright Outlet de Mates | www.outletdemates.com.ar | 2022. Todos los
        derechos reservados.
      </p>
    </section>
  );
};

export default Footer;
