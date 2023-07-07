import Search from '../src/Search-icon.png'
import { useState, useEffect } from "react";

export default function SearchBar({  setDisplay }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    if (input === "") {
        setDisplay([]);
        return;
      }

    const timer = setTimeout(() => {
      getApi(input);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [input]); 

  const getApi = (data) => {
    const params = {
      search: data,
      limit: 10
    }

    fetch(`https://api.toandfrom.com/v2/product?${new URLSearchParams(params).toString()}`)
      .then((response) => response.json())
      .then((json) => {
        const result = json.data
        setDisplay(result);
      });
  };

  const handleSearchChange = (data) => {
    setInput(data);
  }

  return (
    <>
      <form>
        <input
          type="text"
          size="50"
          value={input}
          placeholder="Type Something..."
          onChange={(e) => {
            handleSearchChange(e.target.value);
          }}
        />
       
      </form>
    </>
  );
}
