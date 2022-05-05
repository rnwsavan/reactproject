import React, { Component } from 'react';

class Country extends Component {
    constructor(props) {
        super(props);
        this.state={
            Country : 'India'
        }
        this.changeCountry=()=>{
            this.setState({
                Country : 'U.K'
            })
        }
    }
    
    render() {
        return (
            <div>
                    <p>Country : {this.state.Country}</p>
                    <button onClick={()=>this.changeCountry()}>Change</button>
            </div>
        );
    }
}

export default Country;