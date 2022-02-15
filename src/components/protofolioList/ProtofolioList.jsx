import React from 'react';

import './protofolioList.scss';

export default function ProtofolioList({title, active, id, setSelected}) {
  return (
        <li className={active ? "active" : ""} key={id} onClick={() => setSelected(id)}>
            {title}
        </li>
    );
}
