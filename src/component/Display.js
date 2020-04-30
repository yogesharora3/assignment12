import React from 'react';
import './Display.css'
const Display=({count,arr})=>{
    var k1=arr[0].toString();
    // console.log(typeof k1);
    var k2=arr[1].toString();
    var k3=arr[2].toString();
    var k4=arr[3].toString();
    var ar1=`rgba(${k1},${k2},${k3},${k4})`;  
    return (
        <div  className="bb1" style={{backgroundColor:ar1}}>
            <span className="t1">{count}</span>
        </div>
    );
}
export default Display;