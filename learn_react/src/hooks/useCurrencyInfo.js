import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    const fatchData = async () => {
      try {
        const res = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );
        const jsonData = await res.json();
        // console.log(jsonData);
        // console.log(jsonData[currency]);
        setData(jsonData[currency]);
        // console.log(data);   // setData is async so if you print data it is {}
      } catch (error) {
        console.log(error);
      }
    };
    fatchData();
  }, [currency]);

  // console.log(data);

  return data;
}

export default useCurrencyInfo;
