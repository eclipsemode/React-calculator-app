import React from 'react';
import {VscListSelection} from "react-icons/vsc";
import {WiDaySunny, WiNightClear} from "react-icons/wi";

const Control = (props) => {
    return (
        <div className="calc__settings">
            <VscListSelection className="calc__menu" />
            <button className="calc__option">Calculator</button>
            {
                props.nightMode === false
                ?
                <WiNightClear onClick={props.handleNightMode} className="calc__mode" />
                :
                <WiDaySunny onClick={props.handleNightMode} className="calc__mode" />
            }

        </div>
    );
};

export default Control;