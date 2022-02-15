import React, { useEffect, useRef } from 'react';

import { init } from 'ityped'

import './home.scss';

export default function Home() {


  const typeText = useRef();

  useEffect(() => {
    console.log(typeText);

    init(typeText.current, 
      { 
        showCursor: true,
        backDelay:  500,
        strings: ['Front End Developer', 'Developer', 'Development' ] 
      })

  }, [])

  return (
    <div className='home' id='home'>
        <div className="left">
          <div className="img-container">
            <img src="assets/man.png" alt="img" />
          </div>
        </div>
        <div className="right">
          <p className="hello">Hi There I'm..</p>
          <h1 className='name'>Omar Ahmed el-kammah</h1>
          <p className="job-title"><span ref={typeText}></span></p>
        </div>
        <a href="#protofolio" className='icon'>
          <i className="fas fa-chevron-down"></i>
        </a>
    </div>
    );
}
