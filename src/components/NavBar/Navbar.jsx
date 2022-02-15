import React from 'react';
import './navbar.scss';


export default function Navbar({openMenue, handeleMenue}) {
  return (
    <div className={'navbar ' + (openMenue && "active")}>
        <div className="container">
          <div className="left">
            <a href="#home" className='logo'>Omar Ahmed..</a>
            <div className="navbar-contact">
              <i className="far fa-envelope-open"></i>
              <a href="omarwork@gmail.com">omarwork@gmail.com</a>
            </div>
            <div className="navbar-contact">
              <i className="far fa-phone"></i>
              <span>01016046298</span>
            </div>
          </div>
          <div className="right" onClick={() => handeleMenue(!openMenue)}>
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
          </div>
        </div>
    </div>
  );
}
