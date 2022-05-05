import React, { useState } from 'react';

function City_Fac(props) {
    const[State,setstate]=useState('Gujarat');
    const[city,setcity]=useState('Surat');

    const changestate=()=>{
        setstate('Rajsthan')
    }
    return (
        <div>
             <p>Country Name : {State}</p>
            <button onClick={()=>changestate()}>Change State</button>

            <p>City : {city}</p>
            <button onClick={()=>setcity('Bhavnagar')}>Change City Name</button>
        </div>
    );
}

export default City_Fac;