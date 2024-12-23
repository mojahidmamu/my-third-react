// import React from 'react';

import './Sunglass.css';
import Watch from '../Watch/Watch';

import { useEffect, useState } from 'react';

const Sunglass = () => {
 const [watch, setWatch] = useState([]);

 const ( () =>{
    fetch('watch.json')
    .then(res => res.json())
    .then(data => setWatch(data))
 }, [])


   
  return (
    <div>
       
    </div>
  );
};

export default Sunglass;