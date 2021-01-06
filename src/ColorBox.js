//import React, { Component } from 'react'
//import { useState } from 'react';

const ColorBox = ({color, colorChange}) => {
    let colorStyle = {
        backgroundColor: color,
        display: 'inline-block',
        width: 50,
        height: 50
    }

    return (
        <div style={colorStyle} onClick={()=>colorChange(color)}>

        </div>
    )
}

/*
class ColorBox extends Component{
    render(){
        let colorStyle = {
            backgroundColor: this.props.color,
            display: 'inline-block',
            width: 50,
            height: 50
        }

        return(
            <div style={colorStyle} 
            onClick={()=>this.props.onColorChange(this.props.color)}>
            </div>
        )
    }
};
*/
export default ColorBox;
