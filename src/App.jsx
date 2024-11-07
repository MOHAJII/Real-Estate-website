import Header from "./component/Header/Header";
import Hero from "./component/Hero/Hero";
import './App.css'
import Companies from "./component/Companies/Companies";
import Residencies from "./component/Residencies/Residencies";
import Value from "./component/Value/Value";
import Contact from "./component/Contact/Contact";
import GetStarted from "./component/GetStarted/GetStarted";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
    </div>
  );
}

export default App;
