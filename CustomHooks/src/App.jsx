import "./App.css";
import useSearch from "./Hooks/useSearch";

function App() {
  const { search, setSearch, data, error } = useSearch();

  return (
    <>
      <h1>search</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <h2>{data ? JSON.stringify(data) : "Data Not Found"}</h2>
      {/* <h2>
        {error
          ? `Error: ${error}`
          : data
          ? JSON.stringify(data)
          : "Data Not Found"}
      </h2> */}
    </>
  );
}

export default App;
