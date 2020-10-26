// your Bomb code here!
import React from 'react';
class Bomb extends React.Component{

// we use the constructor to set the INITIAL STATE
//The initial state of Bomb should have a property called secondsLeft.
    constructor(props){
        super()

        this.state = {
            secondsLeft: props.initialCount
        }
    }
    render(){
        const message = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

        return(
        <h1>{message}</h1>
        )
    }
}
export default Bomb;