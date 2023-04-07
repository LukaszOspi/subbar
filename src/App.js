import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LatestProjects from "./components/LatestProjects";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <div className="app-container">
        {" "}
        <Header />
        <Welcome />
        <LatestProjects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
