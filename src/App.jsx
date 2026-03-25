import "./App.css";
import Background from "./components/Background/Background.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Satelite from "./components/Satelite/Satelite.jsx";
import Textblock from "./components/Textblock/Textblock.jsx";

function App() {
  return (
    <>
      <Background />
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "var(--main-text-color)",
        }}
      >
        <Navbar />
        <Satelite />
        <Textblock />
      </div>
    </>
  );
}

export default App;
