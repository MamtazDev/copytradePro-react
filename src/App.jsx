import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./pages/Banner";
import PresaleLive from "./pages/PresaleLive";
import KeyFeature from "./pages/KeyFeature";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <hr style={{ color: "#373B58" }} className="m-0" />
      <Banner />
      <PresaleLive />
      <KeyFeature />
    </>
  );
}

export default App;
