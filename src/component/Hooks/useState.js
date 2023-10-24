import React, { useState } from 'react';
import "./style.css";

const UseState = () => {
  const initialData = 10;
  const [myNumb, setMyNumb] = useState(initialData);

  return (
    <>
      <div className="center_div">
        <p>{myNumb}</p>
        <div class="button2" onClick={ () => setMyNumb(myNumb + 1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCER
        </div>
        <div class="button2" onClick={ () => myNumb > 0 ? setMyNumb(myNumb - 1) : setMyNumb(0)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DCER
        </div>
      </div>
    </>
  );
}

export default UseState
