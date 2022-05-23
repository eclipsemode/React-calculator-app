import React from 'react';
import {FiDelete} from "react-icons/fi";
import {CgMathDivide, CgMathEqual, CgMathMinus, CgMathPercent, CgMathPlus} from "react-icons/cg";
import {AiOutlineClose} from "react-icons/ai";

const Buttons = () => {
    const buttons = [
        {
            id: 1,
            display: 'AC',
            className: 'calc__btn calc__btn-remove'
        },
        {
            id: 2,
            display: <FiDelete />,
            className: 'calc__btn calc__btn-remove'
        },
        {
            id: 3,
            display: <CgMathPercent />,
            className: 'calc__btn calc__btn-operators'
        },
        {
            id: 4,
            display: <CgMathDivide />,
            className: 'calc__btn calc__btn-operators'
        },
        {
            id: 5,
            display: '7',
            className: 'calc__btn'
        },
        {
            id: 6,
            display: '8',
            className: 'calc__btn'
        },
        {
            id: 7,
            display: '9',
            className: 'calc__btn'
        },
        {
            id: 8,
            display: <AiOutlineClose />,
            className: 'calc__btn calc__btn-operators'
        },
        {
            id: 9,
            display: '4',
            className: 'calc__btn'
        },
        {
            id: 10,
            display: '5',
            className: 'calc__btn'
        },
        {
            id: 11,
            display: '6',
            className: 'calc__btn'
        },
        {
            id: 12,
            display: <CgMathMinus />,
            className: 'calc__btn calc__btn-operators'
        },
        {
            id: 13,
            display: '1',
            className: 'calc__btn'
        },
        {
            id: 14,
            display: '2',
            className: 'calc__btn'
        },
        {
            id: 15,
            display: '3',
            className: 'calc__btn'
        },
        {
            id: 16,
            display: <CgMathPlus />,
            className: 'calc__btn calc__btn-operators'
        },
        {
            id: 17,
            display: '+/-',
            className: 'calc__btn'
        },
        {
            id: 18,
            display: '0',
            className: 'calc__btn'
        },
        {
            id: 19,
            display: '.',
            className: 'calc__btn'
        },
        {
            id: 20,
            display: <CgMathEqual />,
            className: 'calc__btn calc__btn-operators'
        }
    ]

    return (
        <div className="calc__buttons">
            {buttons.map(btn =>
                <button key={btn.id} className={btn.className}>
                    {btn.display}
                </button>
            )}
        </div>
    )
};

export default Buttons;