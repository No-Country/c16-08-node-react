import { useState, useEffect } from "react";
import { MagnifyingGlass, X } from "@phosphor-icons/react/dist/ssr";
import style from './Searchbar.module.css'

// eslint-disable-next-line react/prop-types
const Searchbar = ({ onSearch, onClear })  => {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
      onSearch(query);
      localStorage.setItem("searchQuery", query);
    };
  
    useEffect(() => {
      const storedQuery = localStorage.getItem("searchQuery");
      if (storedQuery && storedQuery !== query) {
        setQuery(storedQuery);
        onSearch(storedQuery);
      }
    }, [onSearch, query]);
  
    const handleClear = () => {
      setQuery("");
      onClear();
      clearLocalStorage();
    };
  
    const clearLocalStorage = () => {
      localStorage.removeItem("searchQuery");
      localStorage.removeItem("filteredProducts");
      localStorage.removeItem("filterQuery");
    };
  
    const handleChange = (e) => {
      setQuery(e.target.value);
    };
  
   
  
    const handleKeyDown = (e) => {
      if (e.key === "Backspace" && query.length > 0) {
        const updatedQuery = query.slice(0, -1);
        setQuery(updatedQuery);
        onSearch(updatedQuery);
        localStorage.setItem("searchQuery", updatedQuery);
      } else if (e.key === "Enter" && query.trim() !== "") {
        handleSearch();
      }
    };
    
   

  return (
    <div className={`container-fluid ${style.searchContainer}`}>
    <div className="row align-items-center"> 
      {!query && (
        <div className={`col-auto ${style.searchIcon}`}> 
          <MagnifyingGlass size={20} />
        </div>
      )}
      <div className={`col ${style.inputContainer}`}> 
      <div className={style.inputWrapper}>
        <input 
          type="text"
          placeholder="Escribe aquí el rubro o categoría de tu interés"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className={` form-control shadow-lg ${style.input}`} 
         
        />
        </div>
        {query && ( // Mostrar la 'X' solo si hay texto en el input
          <div className={style.clearButton}> 
            <button className={style.clearIcon} onClick={handleClear}>
              <X size={20} />
            </button>
          </div>
        )}
      </div>
      <div className={`col-auto ${style.searchButton}`}> 
        <button onClick={handleSearch} className={style.btn}>Buscar</button>
      </div>
    </div>
  </div>
  )
}

export default Searchbar