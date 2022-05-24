import React from 'react';
import {FiDelete} from "react-icons/fi";

const Buttons = (props) => {

    const buttons = [
        {
            id: 1,
            display: 'AC',
            className: 'calc__btn calc__btn-remove',
            action: 'removeAll'
        },
        {
            id: 2,
            display: <FiDelete />,
            className: 'calc__btn calc__btn-remove',
            action: 'removeElement'
        },
        {
            id: 3,
            display: '%',
            className: 'calc__btn calc__btn-operators',
            action: 'add'
        },
        {
            id: 4,
            display: '/',
            className: 'calc__btn calc__btn-operators',
            action: 'add'
        },
        {
            id: 5,
            display: '7',
            className: 'calc__btn',
            action: 'add'
        },
        {
            id: 6,
            display: '8',
            className: 'calc__btn',
            action: 'add'
        },
        {
            id: 7,
            display: '9',
            className: 'calc__btn',
            action: 'add'
        },
        {
            id: 8,
            display: '*',
            className: 'calc__btn calc__btn-operators',
            action: 'add'
        },
        {
            id: 9,
            display: '4',
            className: 'calc__btn',
            action: 'add'
        },
        {
            id: 10,
            display: '5',
            className: 'calc__btn',
            action: 'add'
        },
        {
            id: 11,
            display: '6',
            className: 'calc__btn',
            action: 'add'
        },
        {
            id: 12,
            display: '-',
            className: 'calc__btn calc__btn-operators',
            action: 'add'
        },
        {
            id: 13,
            display: '1',
            className: 'calc__btn',
            action: 'add'
        },
        {
            id: 14,
            display: '2',
            className: 'calc__btn',
            action: 'add'
        },
        {
            id: 15,
            display: '3',
            className: 'calc__btn',
            action: 'add'
        },
        {
            id: 16,
            display: '+',
            className: 'calc__btn calc__btn-operators',
            action: 'add'
        },
        {
            id: 17,
            display: '0',
            className: 'calc__btn calc__btn-zero',
            action: 'add'
        },
        {
            id: 18,
            display: '.',
            className: 'calc__btn calc__btn-additional',
            action: 'add'
        },
        {
            id: 19,
            display: '=',
            className: 'calc__btn calc__btn-operators',
            action: 'calc'
        }
    ]

    const onHandleButton = (value, action) => {
        props.handleButton(value, action)

    }

    return (
        <div className="calc__buttons">
            {buttons.map(btn =>
                <button value={btn.id} key={btn.id} className={btn.className} onClick={() => onHandleButton(btn.display, btn.action)}>
                    {btn.display}
                </button>
            )}
        </div>
    )
};

export default Buttons;