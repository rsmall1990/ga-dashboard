import "./App.css";
import Nav from "./components/Nav/Nav.js";
import Reviews from "./components/Reviews/Reviews.js";
import AvgRtg from "./components/AvgRtg/AvgRtg.js";
import SentAnalysis from "./components/SentAnalysis/SentAnalysis.js";
import Visitors from "./components/Visitors/Visitors.js";

function App() {
  return (
    <div className="main">
      <Nav />
      <Reviews />
      <AvgRtg />
      <SentAnalysis />
      <Visitors />
    </div>
  );
}

export default App;