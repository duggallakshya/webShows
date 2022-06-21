import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card'
import './index.css';
import Sdata from './Sdata';

const cardData = (val) => {
    return(
      <Card 
        key={val.id}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
      />
    )
}

ReactDOM.render(
  <App/>
  ,
  document.getElementById('root')
);