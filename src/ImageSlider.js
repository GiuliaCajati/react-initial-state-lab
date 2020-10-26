// your ImageSlider code here!
import React from 'react';
 
class ImageSlider extends React.Component {
    // we use the constructor to set the INITIAL STATE
    constructor(props){
        super()
        this.state={
            currentSlideIndex: 0
        }
    }
    //It should only render out the text 
    //'I am on slide <CURRENT_SLIDE>', where <CURRENT_SLIDE> is the value of this.state.currentSlideIndex
    render(){
        return(
        <h1>I am on slide {this.state.currentSlideIndex}</h1>
        )
    }
}
export default ImageSlider;