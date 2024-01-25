import { useEffect } from "react";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./contexts/theme";
import { useState } from "react";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const changeTheme = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark"); // remove both type of class
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      {/* remember to change in tailwind.config */}
      <ThemeProvider value={{ themeMode, changeTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
