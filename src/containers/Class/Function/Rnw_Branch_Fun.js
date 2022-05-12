import React, { useState } from 'react';
import Rnw_Corse from './Rnw_Corse';

function Rnw_Branch_Fun(props) {
     // const [Branch, setBranch] = useState(['RNW1', 'RNW2', 'RNW3', 'RNW4']);
     const [Branch, setBranch] = useState('RNW1');
     const [course, setcourse] = useState(['Android']);
 
 
     const courseName = () => {
         setBranch('Rnw2')
         setcourse("NodeJs");
     }
    return (
        <div>
             <p>{Branch}</p>
             <p>{course}</p>            

            <button onClick={() => courseName()}>Change</button>
        </div>
    );
}

<Rnw_Corse cor={Rnw_Branch_Fun}/>

export default Rnw_Branch_Fun;