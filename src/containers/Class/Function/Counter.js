import React, { useState } from 'react';

function Counter(props) {
    const [count, setCount] = useState(0);

    const Addnumber= () => {
        if(count < 10){
            setCount(count + 1);
        }
    };

    const Removenumber = () => {
        if(count > 0){
            setCount(count - 1);
        }
    };
    return (
        <div>
             <button type="btn" onClick={() => Removenumber()}>Remove-num</button>
            <input type="text" value={count.toLocaleString()} />
            <h3>
                {
                    count.toLocaleString()
                }
                </h3>
            <button type="btn" onClick={() => Addnumber()}>Add-num</button>

        </div>
    );
}

export default Counter;