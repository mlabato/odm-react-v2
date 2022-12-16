import {FaSearch} from "react-icons/fa"

const searchBar = () => {
    return(
      <section className="relative">
        
        <input
          className="bg-[#F8F9FA] border-2 border-red-700 w-[30rem] text-red-700  p-[.5rem] rounded-lg  "
          type="text"
          placeholder="¿Qué estás buscando?"
        
        />
        <button className="text-red-700 text-[1.5rem] absolute right-4 bottom-2 cursor-pointer    ">
          <FaSearch />
        </button>
        
   
      </section>
    )
}

export default searchBar;