const Navbar = () => {
  return (
    <section className="bg-[#F8F9FA]    ">
      <article className="mx-[10rem] flex flex-row justify-center py-[.75rem]">
        <a href="/nuestros-productos" className="text-[#A61212] text-[1.5rem]  hover:font-bold">
          Productos
        </a>
        <a
          href="/#"
          className="text-[#A61212] text-[1.5rem] mx-[4rem]  hover:font-bold"
        >
          Personalizá tu mate
        </a>
        <a href="#contacto" className="text-[#A61212] text-[1.5rem]   hover:font-bold">
          Contacto
        </a>

        <a href="/nosotros" className="text-[#A61212] text-[1.5rem] ml-[4rem]  hover:font-bold">
          Nosotros
        </a>
      </article>
      <article >
        <img src="/images/mate-bg.jpg" alt="" className="w-full h-[30rem] object-cover"/>
      </article>
    </section>
  );
};

export default Navbar;
