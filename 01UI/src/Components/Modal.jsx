import React, { useState } from "react";

export default function Modal({
  setShowModal,
  options = [],
  set,
  // inputToUpdate,
  // setFrom,
  // setTo,
}) {
  // console.log(inputToUpdate);
  const [search, setSearch] = useState("");
  const [isactive, setIsactive] = useState("all");

  const allValues = options.flatMap((obj) => Object.values(obj)[0]);

  const [values, setValues] = useState(allValues);
  const [showingval, setShowingval] = useState(allValues);

  const category = options.flatMap((obj) => Object.keys(obj));

  const handlesearch = (val) => {
    const newvalue = values.filter((value) =>
      value.toLowerCase().includes(val.toLowerCase())
    );
    setShowingval(newvalue);
  };

  const showcategory = (name) => {
    if (name === "all") {
      setValues(allValues);
      setShowingval(allValues);
      return;
    }

    const matchedObject = options.find((obj) => name in obj);
    setValues(matchedObject && matchedObject[name]);
    setShowingval(matchedObject && matchedObject[name]);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      setShowModal(false);
    }
  };
  return (
    <>
      <div
        className="modal-overlay justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={handleOverlayClick}
      >
        <div className="relative w-auto my-6 mx-auto max-w-6xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-700 outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold text-white">
                Select Token
              </h3>
              <button
                className="p-1 ml-auto border-0 text-white  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal && setShowModal(false)}
              >
                X
                {/* <span className="bg-transparent text-black opacity-0.1  h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span> */}
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  handlesearch(e.target.value);
                }}
                className="outline-none bg-transparent  rounded-2xl border border-sky-500 p-2"
                placeholder="Search"
              />

              <div className="rounded-2xl p-3 border border-amber-300 mt-2">
                <button
                  className={`px-3 py-1 rounded-lg text-white ${
                    isactive == "all" ? "bg-black" : ""
                  }`}
                  onClick={() => {
                    setIsactive("all");
                    showcategory("all");
                  }}
                >
                  All
                </button>
                {category.map((name) => (
                  <button
                    key={name}
                    className={`px-3 py-1 rounded-lg text-white ${
                      isactive == name ? "bg-black" : ""
                    }`}
                    onClick={() => {
                      setIsactive(name);
                      showcategory(name);
                    }}
                  >
                    {name}
                  </button>
                ))}
              </div>
              <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
              <div className="rounded-2xl p-4 mt-3 border border-blue-200">
                {showingval &&
                  showingval.map((value) => (
                    <div
                      className="cursor-pointer"
                      key={value + Math.random()}
                      onClick={() => {
                        // if (inputToUpdate == "from") setFrom(value);
                        // else setTo(value);
                        // console.log(typeof set());
                        set(value);
                        setShowModal && setShowModal(false);
                      }}
                    >
                      {value}
                    </div>
                  ))}
              </div>

              {/* <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                I always felt like I could do anything. That’s the main thing
                people are controlled by! Thoughts- their perception of
                themselves! They're slowed down by their perception of
                themselves. If you're taught you can’t do anything, you won’t do
                anything. I was taught I could do everything.
              </p> */}
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
              {/* <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal && setShowModal(false)}
              >
                Save Changes
              </button> */}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> */}
    </>
  );
}
