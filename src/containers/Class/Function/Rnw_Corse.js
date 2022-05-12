import React, { useState } from 'react';

function Rnw_Corse({cor}) {
     const [course, setcourse] = useState(['Android', 'NodeJs', 'ReractJs', 'Flutern']);
    return (
        <div>
             <p>{course}</p>
             {
               cor === "RNW1" ? <p>Android </p> : <p>NodeJs</p>
            }
        </div>
    );
}

export default Rnw_Corse;