import React, { useEffect, useState, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation, useNavigate } from "react-router-dom";

function SearcBox() {
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);

  const navigate = useNavigate();

  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
      setOpen(false);
    }
    setSuggestions("");
  };

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!searchTerm.trim()) {
        setSuggestions([]);
        return;
      }

      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${searchTerm}`
        );
        const data = await res.json();
        setSuggestions(data.products.slice(0, 5) || []);
      } catch (error) {
        console.error("search error :", error);
        setSuggestions([]);
      }
    };
    const debonce = setTimeout(() => {
      fetchSuggestions();
    }, 300);
    return () => clearTimeout(debonce);
  }, [searchTerm]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSuggestions([]);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setOpen(false);
        setSuggestions([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="searchBox_container" ref={searchRef}>
      <button className="search_icon" onClick={() => setOpen(!open)}>
        <CiSearch />
      </button>

      <form
        onSubmit={handleSubmit}
        className={`search_box ${open ? "open" : ""}`}
      >
        <input
          type="text"
          id="search"
          name="search"
          value={searchTerm}
          placeholder="Search for products"
          autoComplete="off"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <CiSearch />
        </button>
        {suggestions.length > 0 && (
          <ul className="suggestions">
            {suggestions.map((item) => (
              <Link to={`/product/${item.id}`}>
                <li key={item.id}>
                  <img src={item.images[0]} alt="" />
                  <span>{item.title}</span>
                </li>
              </Link>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}

export default SearcBox;
