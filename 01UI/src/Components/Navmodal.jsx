import React, { useState } from "react";
import imgurl from "../assets/currencylogo.png";

export default function Navmodal({ setShowModal }) {
  const myMap = new Map();

  myMap.set("Thorchain", ["Trust Wallet"]);
  myMap.set("Avalanche", [
    "Trust Browser",
    "WalletConnect",
    "MetaMask",
    "XDEFI",
  ]);
  myMap.set("Bitcoin", ["XDEFI"]);
  myMap.set("Ethereum", [
    "Trust Browser",
    "WalletConnect",
    "rainbow",
    "MetaMask",
    "XDEFI",
  ]);

  const [activecoins, setactivecoins] = useState([]);

  const coins = Array.from(myMap.keys());
  const allwallets = [...new Set(Array.from(myMap.values()).flat())];
  const [visiblewallets, setVisiblewallets] = useState(allwallets);

  // const handlevisible = (coin) => {
  //   if (activecoins.length == 0) {
  //     console.log("ok");
  //     const arr = [coin];
  //     setactivecoins(arr);
  //     setVisiblewallets(myMap.get(coin));
  //     return;
  //   }
  //   // console.log(activecoins);
  //   const arrays = [];
  //   for (let x of activecoins) {
  //     arrays.push(myMap.get(x));
  //   }
  //   arrays.push(myMap.get(coin));
  //   // console.log(array);

  //   const commonValues = arrays.reduce((acc, array) => {
  //     return acc.filter((value) => array.includes(value));
  //   }, arrays[0]);
  //   setVisiblewallets(commonValues);
  //   // console.log(commonValues);

  //   // const intersectionArray = array.reduce((acc, arr) => {
  //   //   return acc.filter((value) => arr.includes(value));
  //   // });
  //   // console.log(intersectionArray);

  //   // const val = visiblewallets.filter((value) =>
  //   //   myMap.get(coin).includes(value)
  //   // );
  //   // setVisiblewallets(val);
  // };

  const handlecoinchange = (coin) => {
    if (activecoins.includes(coin)) {
      const acarray = activecoins.filter((item) => item !== coin);
      if (acarray.length == 0) {
        setVisiblewallets(allwallets);
        setactivecoins(acarray);
        return;
      }
      const arrays = [];
      for (let x of acarray) {
        arrays.push(myMap.get(x));
      }
      const commonValues = arrays.reduce((acc, array) => {
        return acc.filter((value) => array.includes(value));
      }, arrays[0]);
      setVisiblewallets(commonValues);
      setactivecoins(acarray);
      return;
    }
    const arrays = [];
    for (let x of activecoins) {
      arrays.push(myMap.get(x));
    }
    arrays.push(myMap.get(coin));
    // console.log(array);

    const commonValues = arrays.reduce((acc, array) => {
      return acc.filter((value) => array.includes(value));
    }, arrays[0]);
    setVisiblewallets(commonValues);
    setactivecoins((prev) => [...prev, coin]);

    // handlevisible(coin);
    // if (JSON.stringify(visiblewallets) === JSON.stringify(allwallets)) {
    //   setVisiblewallets(myMap.get(coin));
    //   return;
    // }
    // const val = visiblewallets.filter((value) =>
    //   myMap.get(coin).includes(value)
    // );
    // setVisiblewallets(val);
  };
  // console.log(visiblewallets);

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("navmodal-overlay")) {
      setShowModal(false);
    }
  };

  const selectcoins = (wallet) => {
    const allkeys = Array.from(myMap.keys()).filter((key) =>
      myMap.get(key).includes(wallet)
    );
    setactivecoins(allkeys);
    setVisiblewallets(wallet);
  };
  return (
    <>
      <div
        className="navmodal-overlay justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={handleOverlayClick}
      >
        <div className="relative w-auto my-6 mx-auto max-w-6xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-600 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold text-white">
                Connect Wallets
              </h3>
              <button
                className="p-1 ps-5 ml-auto border-0 text-white  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal && setShowModal(false)}
              >
                X
                {/* <span className="bg-transparent text-black opacity-0.1  h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span> */}
              </button>
            </div>
            {/*body*/}
            <div className="flex text-white">
              <div className="flex-col p-4 items-center bg-gray-900">
                <div className="pb-3 flex justify-center text-lg">
                  Select Chains
                </div>
                <div className="flex flex-wrap w-[80%] md:w-36 justify-center">
                  {coins.map((coin) => (
                    <div key={coin} className="px-1 py-3 ">
                      <img
                        className={`cursor-pointer rounded-full ${
                          activecoins.includes(coin)
                            ? "border-2 border-blue-200"
                            : ""
                        }`}
                        src={imgurl}
                        alt="img"
                        height={60}
                        width={60}
                        onClick={() => handlecoinchange(coin)}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col w-96 bg-slate-800">
                <div className="flex justify-between p-4">
                  <div className="flex-1 text-white text-lg">Select wallet</div>
                  <div className="text-white text-sm">Reset</div>
                </div>
                <div className="flex pl-6 pr-4 flex-wrap pb-5">
                  <div>
                    <p className="text-sm">Software Wallets</p>
                    <div className="flex flex-wrap">
                      {allwallets.map((wallet) => (
                        <div
                          key={wallet}
                          onClick={() => selectcoins(wallet)}
                          className={`flex items-center justify-between cursor-pointer bg-slate-400 hover:brightness-110 w-fit h-10 rounded-xl m-1 gap-x-2 px-2 ${
                            visiblewallets.includes(wallet) ? "" : "opacity-40"
                          }`}
                        >
                          {wallet}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal && setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
