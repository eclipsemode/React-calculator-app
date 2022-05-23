import './App.css';
import Buttons from "./components/Buttons";

function App() {

  return (
    <div className="calc">
      <div className="calc__display">
        <div className="calc__current-value">
          555
        </div>
      </div>
          <Buttons />
    </div>
  );
}

export default App;
