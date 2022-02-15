import React from 'react';
import { useState } from 'react/cjs/react.development';
import "./contact.scss";


export default function Contact() {

  const [massage, setMassage] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    setMassage(true);
  };

  return (
      <div className='contact' id='contact'>
        <div className="left">
          <img src="assets/shake.svg" alt="" />
        </div>
        <div className="right">
          <div className="section-title">
            <h2>contact</h2>
          </div>
            <form action="" onSubmit={handelSubmit}>
              <input type="text" placeholder='Name' />
              <textarea placeholder='Massage'></textarea>
              <input type="submit" value="send" />
            </form>
            {massage && <span className='massage'>Thanks Alot, I Will Replay ...</span>}
        </div>
      </div>
  );
}
