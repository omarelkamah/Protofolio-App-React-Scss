import React from 'react';

import './testimonials.scss';


export default function Testimonials() {

   const data = [
    {
      id: 1,
      name: "Tom Durden",
      title: "Senior Developer",
      img:
        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/twitter.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Alex Kalinski",
      title: "Co-Founder of DELKA",
      img:
        "https://images.pexels.com/photos/428321/pexels-photo-428321.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/youtube.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Martin Harold",
      title: "CEO of ALBI",
      img:
        "https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      icon: "assets/linkedin.png",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];

  return (
    <div className='testimoials' id='testimoials'>
        <div className="section-title">
          <h2>Testimonials</h2>
        </div>
        <div className="container">

          {data.map(item => (
            <div className={item.featured ? "card featured" : "card"} key={item.id}>
              <div className="top">
                <img src="assets/right-arrow.png" className='arrow' alt="arrow" />
                <img src={item.img} className='user' alt="user" />
                <img src={item.icon} className='icon' alt="icon" />
              </div>
              <div className="center">
                <p className='testi-par'>{item.desc}</p>
              </div>
              <div className="bottom">
                <h2 className="user-name">{item.name}</h2>
                <p className="user-job">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
    
  );
}
