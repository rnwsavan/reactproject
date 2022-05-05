import React, { Component } from 'react';

class City extends Component {
    constructor(props) {
        super(props);
        this.state={
            City : 'Surat'
        }
        this.changeCity=()=>{
            this.setState({
                City : 'Bhavnagar'
            })
        }
    }
    
    render() {
        return (
            <div>
                <p>Country : {this.state.City}</p>
                    <button onClick={()=>this.changeCity()}>Change</button>
            </div>
        );
    }
}

export default City;