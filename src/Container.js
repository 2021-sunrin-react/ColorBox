//import React, { Component } from 'react'
import { useState } from 'react'
import ColorBox from './ColorBox'
import TextBox from './TextBox'

const Container = () => {
    let [texts, setTexts] = useState([]);
    let [color, setColor] = useState('red');

    const addText = (text) => {
        setTexts([...texts, {color, text}]);
    }

    const colorChange = (color) => {
        setColor(color);
    }
    return (
        <div>
            <ColorBox color="red" colorChange={colorChange}/>
            <ColorBox color="blue" colorChange={colorChange}/>
            <ColorBox color="green" colorChange={colorChange}/>

            <TextBox color={color} addText={addText}/>
            <div>
                { texts.map((text, index)=>{
                    return <div key={index} style={{color: text.color}}>
                        {text.text}
                    </div>
                })}
            </div>
        </div>
    )
}
/*
class Container extends Component{
    constructor(props){
        super(props);
        this.state = {
            texts: [],
            color: 'red'
        }
    }

    onButtonClick = (text) => {
        this.setState({
            ...this.state,
            texts: [...this.state.texts, {color: this.state.color, text: text}]
        })
    }

    onColorChange = (color) => {
        this.setState({
            ...this.state,
            color: color
        })
    }

    render(){
        return (
            <div>
                <ColorBox color="red" onColorChange={this.onColorChange}/>
                <ColorBox color="blue" onColorChange={this.onColorChange}/>
                <ColorBox color="green" onColorChange={this.onColorChange}/>

                <TextBox color={this.state.color} onButtonClick={this.onButtonClick}/>
                <div>
                    { this.state.texts.map((text, index)=>{
                        return <div key={index} style={{color: text.color}}>
                            {text.text}
                        </div>
                    })}
                </div>
            </div>
        )
    }
};
*/
export default Container;