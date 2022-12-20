import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import { FaSearch } from "react-icons/fa";

const SearchBar = () => {

  const searchInputRef = useRef()
  const navigate = useNavigate()

  

  const searchHandler = (e) => {
    e.preventDefault()
    const enteredSearchTerm = searchInputRef.current.value;
    navigate("/results/" + enteredSearchTerm);
  };

  return (
    <form className="relative" onSubmit={searchHandler}>
      <input
        className="bg-[#F8F9FA] border-2 border-[#A61212] w-[30rem] text-[#A61212] p-[.5rem] rounded-lg  "
        type="text"
        placeholder="¿Qué estás buscando?"
        ref={searchInputRef}
      />
      <button className="text-red-700 text-[1.5rem] absolute right-4 bottom-2 cursor-pointer    ">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;
