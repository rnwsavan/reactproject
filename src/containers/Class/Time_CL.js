import React, { Component } from 'react';

class Time_CL extends Component {
    constructor(props) {
        super(props);
        this.state={
            time:new Date()     //1. Constructor set initial Value
        }
    }

    tick = () =>{
        this.setState({
            time:new Date()
        })
    }

    componentDidMount=()=>{

        //3. Use this method for request data to server
        this.timeId=setInterval(()=>this.tick(),1000);
    }
    
    componentDidUpdate=(prevprops,prestate)=>{

        //4.call this method when previous state and current state is not same
        if(prestate.time !==this.state.time){
            console.log("componentDidUpdate");
        }

    }

    componentWillUnmount =()=>{
        //5.componentWillUnmount used to realse resource from component

        clearInterval(this.timeId);
    }
    render() {
                        //2. Call render method each time when state value change
        return (
            <div>
                {this.state.time.toLocaleTimeString()}      
            </div>
        );
    }
}

export default Time_CL;