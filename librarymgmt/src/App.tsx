import ListGroup from "./components/ListGroup";
import Card from "./components/Card";
import * as Elements from "./components/Core";
import "./App.css";
// import Message from "./Wapda";

function App() {
  return (
    <>
      <Elements.Navbar />
      <main>
        <Card />
        <ListGroup />
      </main>
      <Elements.Footer />
    </>
  );
}

export default App;
