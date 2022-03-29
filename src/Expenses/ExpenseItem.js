import React, { useState } from 'react'; // usetate is a react hook, hooks starts with a use.

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);
    console.log('ExpenseIem revaluetaed by reacted')
    const clickHandler = () => {
        setTitle('Updated');
      console.log(title)
    }
    return (
        <Card className="expense-item"> 
           <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;