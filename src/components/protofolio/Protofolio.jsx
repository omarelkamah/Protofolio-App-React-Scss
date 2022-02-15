import React, { useEffect, useState } from 'react';
import ProtofolioList from '../protofolioList/ProtofolioList';

import './protofolio.scss';

import {featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio} from '../../data'

export default function Protofolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const theList = [
        {
            id: 'featured',
            title: 'Featured'
        },
        {
            id: 'web',
            title: 'Web App'
        },
        {
            id: 'mobile',
            title: 'Mobile App'
        },
        {
            id: 'design',
            title: 'Design'
        },
        {
            id: 'branding',
            title: 'Branding'
        }
    ];

    useEffect(() => {

        switch (selected) {
            case 'features':
                setData(featuredPortfolio);
                break;

            case 'web':
                setData(webPortfolio);
                break;

            case 'mobile':
                setData(mobilePortfolio);
                break;

            case 'design':
                setData(designPortfolio);
                break;

            case 'content':
                setData(contentPortfolio);
                break;

            default:
                setData(featuredPortfolio);
        }

    },[selected])

  return (
        <div className='protofolio' id='protofolio'>
            <div className="section-title ">
                <h2>Protofolio</h2>
            </div>
                <ul className="list">
                    {theList.map(item => (
                        <ProtofolioList title={item.title} id={item.id} key={item.id} active={selected === item.id} setSelected={setSelected} />
                    ))}
                </ul>
                <div className="container">
                    {data.map(item => (
                        <div className="item" id={item.id} key={item.id}>
                            <div className="img-container">
                                <img src={item.img}  alt={item.title} />
                            </div>
                            <h3>{item.title}</h3>
                        </div>
                    ))}
                    
                </div>
        </div>
    );
}
