import { useCallback, useState } from "react";
import Input from "./Components/Input";
import gas from "./assets/gas_station.svg";
import setting from "./assets/setting.svg";
import currencylogo from "./assets/currencylogo.png";
import Modal from "./Components/Modal";
import Navbar from "./Components/Navbar";

function App() {
  const [from, setFrom] = useState("BTC");
  const [amount, setAmount] = useState(0);
  const [to, setTo] = useState("AVA");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const [showModal, setShowModal] = useState(false);
  const [inputToUpdate, setInputToUpdate] = useState("from");
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  // console.log(inputToUpdate); // Track which input to update

  // const [whichtoupdate, setWhichtoupdate] = useState(() => {});
  // let set = "from";

  const options = [
    { Native: ["RUNE", "BTC", "ETH", "LTC", "BNB"] },
    { synth: ["AVAX", "USDC", "BCH", "AVA", "BTCB"] },
    { AVAX: ["AVAX", "BTC", "USDT", "WETH"] },
  ];

  // const handlemodal = useCallback(
  //   (val) => {
  //     // val === "from" ? (set = "from") : (set = "to");
  //     setInputToUpdate(val);
  //     setShowModal(true);
  //   },
  //   [inputToUpdate]
  // );

  // const handlemodal = (val) => {
  //   // val === "from" ? (set = "from") : (set = "to");
  //   setInputToUpdate(val);
  //   setShowModal(true);
  //   openmodal();
  // };

  // const openModel = () => {
  //   setShowModal(true); // Show modal when called
  // };
  // const closeModal = () => {
  //   setShowModal(false); // Close modal
  // };

  return (
    <>
      <Navbar />
      <div
        className="h-screen bg-cover flex items-center justify-center "
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg")`,
        }}
      >
        <div className="w-full max-w-96">
          <div className="flex justify-between">
            <div className="text-3xl"> Swap</div>
            <div className="flex">
              <img src={gas} height={20} width={20} className="" />
              <img src={setting} height={30} width={30} />
            </div>
          </div>
          <div className="rounded-3xl mt-3 p-5 bg-white/30">
            <div>
              <Input
                amount={amount}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
                // onCurrencyChange={() => handlemodal("from")}
                onCurrencyChange={() => setShowModal1(true)}
                imgurl={currencylogo}
              />
            </div>
            <div>
              <div className="relative h-0.5">
                <button
                  onClick={swap}
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2  bg-blue-600 rounded-xl text-white px-2 py-0.5"
                >
                  swap
                </button>
              </div>
            </div>
            <div>
              <Input
                amount={convertedAmount}
                selectCurrency={to}
                onAmountChange={(amount) => setAmount(amount)}
                // onCurrencyChange={() => handlemodal("to")}
                onCurrencyChange={() => setShowModal2(true)}
                imgurl={currencylogo}
                amountDisable
              />
            </div>
            <div>
              <div className="bg-gray-500 rounded-2xl mt-1 p-2">
                <div className="text-sm">Recipient Address</div>
                <input
                  type="text"
                  className="bg-transparent pt-1 outline-none"
                  placeholder="THORName or Recipient Address"
                />
              </div>
            </div>
            <button className="bg-blue-400 rounded-2xl p-2 mt-2 w-full">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
      {/* {showModal && (
        <Modal
          setShowModal={setShowModal}
          options={options}
          set={inputToUpdate}
          setFrom={setFrom}
          setTo={setTo}
        />
      )} */}
      {showModal1 && (
        <Modal setShowModal={setShowModal1} options={options} set={setFrom} />
      )}
      {showModal2 && (
        <Modal setShowModal={setShowModal2} options={options} set={setTo} />
      )}
    </>
  );
}

export default App;
