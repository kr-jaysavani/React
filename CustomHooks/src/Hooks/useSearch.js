import { useEffect } from "react";
import { useState } from "react";

const useSearch = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (search === "") return;

    const fetchData = () => {
      fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${search}.json`
      )
        .then((res) => {
          if (!res.ok) {
            setData("");
            setError(`HTTP error! Status: ${res.status}`);
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setError(null);
        })
        .catch((error) => {
          console.error(error.message);
          setError(error.message);
        });
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  return { search, setSearch, data, error };
};

export default useSearch;
