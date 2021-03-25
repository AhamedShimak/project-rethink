import React from "react";
import './ad.css'
import ad from '../../assets/ad.jpg'

const Ad = () => {
  return <div className="ad">
<img className='ad__image' src={ad} alt="advertisment here"/>
  </div>;
};

export default Ad;
