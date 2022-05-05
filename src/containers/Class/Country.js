import React, { Component } from 'react';

class Country extends Component {
    constructor(props) {
        super(props);
        this.state={
            Country:'India'
        }
        changeCountry=()=>{
            this.setState({
                Country:'U.K'
            })
        }
    }
    
    render() {
        return (
            <div>
                    <p>Country:{Country}</p>
                    <button onClick={()=>this.changeCountry()}>Change</button>
            </div>
        );
    }
}

export default Country;