import React, { useId } from "react";
import downarrow from "../assets/down_arrow.svg";

function Input({
  amount,
  imgurl,
  onAmountChange,
  onCurrencyChange,
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <>
      <div className={`bg-gray-500 p-3 rounded-2xl flex ${className}`}>
        <input
          id={amountInputId}
          className="w-full outline-none bg-transparent text-xl"
          type="number"
          placeholder="0"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
        <button
          className=" flex rounded-xl  justify-center items-center gap-1 py-2 px-4 bg-slate-700"
          onClick={() => onCurrencyChange && onCurrencyChange()}
        >
          <img src={imgurl} alt="img" height={20} width={20} />
          <div>{selectCurrency}</div>
          <img src={downarrow} height={25} width={25} />
        </button>
      </div>
    </>
  );
}

export default Input;
