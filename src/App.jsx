import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <h1 className="text-center">Game Heroes</h1>
      <div className="App  d-flex align-items-center justify-content-center">
        <Hero />
      </div>
    </>
  );
}

export default App;
