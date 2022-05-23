import './App.css';
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import Control from "./components/Control";
import {createRef, useEffect, useState} from "react";

function App() {

    const [nightMode, setNightMode] = useState(false);

    const mainClass = createRef();

    useEffect(() => {
        switch (nightMode) {
            case true:
                mainClass.current.classList.add('calc--night')
                break
            case false:
                mainClass.current.classList.remove('calc--night')
                break
            default:
                mainClass.current.classList.remove('calc--night')
                break
        }
    }, [nightMode, mainClass])

    const handleNightMode = () => {
        setNightMode(!nightMode);
    }

  return (
    <div ref={mainClass} className="calc">
        <Control nightMode={nightMode} handleNightMode={handleNightMode} />
        <Display />
        <Buttons />
    </div>
  );
}

export default App;
