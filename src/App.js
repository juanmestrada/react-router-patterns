import './App.css';
import Nav from './Nav';
import Map from './Map';
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Nav />
        <Map />
      </BrowserRouter>
    </div>
  );
}

export default App;
