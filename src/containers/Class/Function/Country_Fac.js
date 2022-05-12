import React, { useState } from 'react';
import City_Fac from './City_Fac';

function Country_Fac(props) {
    const[Country,setcountry]=useState('India');
    const[gdp,setgdp]=useState(0);

    const changeCountry=()=>{
        setcountry('USA')
    }
    return (
        <div>
            <p>Country Name : {Country}</p>
            <button onClick={()=>changeCountry()}>Change Country</button>

            <p>GDP : {gdp}</p>
            <button onClick={()=>setgdp(10.5)}>Change Gdp</button>
        </div>
    );
}




export default Country_Fac;