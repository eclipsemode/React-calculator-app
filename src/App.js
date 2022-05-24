import './App.css';
import Buttons from "./components/Buttons";
import Display from "./components/Display";
import Control from "./components/Control";
import {createRef, useEffect, useState} from "react";
import { evaluate } from 'mathjs'

function App() {

    const [nightMode, setNightMode] = useState(false);
    const [value, setValue] = useState([]);
    const [calculatedValue, setCalculatedValue] = useState('');

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

    const handleButton = (val, action) => {
        switch (action) {
            case 'removeAll':
                setValue([]);
                setCalculatedValue('');
                break;
            case 'removeElement':
                setValue(value.slice(0, value.length - 1));
                break;
            case 'bracket':
                setValue([...value, val]);
                break;
            case 'add':
                setValue([...value, val]);
                break;
            case 'calc':
                setCalculatedValue(evaluate(value.join('')));
                break;
            default:
                setValue([]);
                break;
        }
    }

  return (
    <div ref={mainClass} className="calc">
        <Control nightMode={nightMode} handleNightMode={handleNightMode} />
        <Display value={value} calculatedValue={calculatedValue} />
        <Buttons handleButton={handleButton} />
    </div>
  );
}

export default App;
