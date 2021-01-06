//import React, { Component } from 'react'
import { useState } from 'react'

const TextBox = ({color, addText}) => {
    let [text, setText] = useState('');

    const textChange = (e) => {
        setText(e.target.value);
    }

    const onButtonClick = () => {
        setText('');
        addText(text);
    }

    return (
        <div>
            <textarea onChange={textChange} style={{color: color}} value={text}/>
            <button onClick={onButtonClick}>
                추가
            </button>
        </div>
    )
}

/*
class TextBox extends Component{
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
    }

    textChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    onButtonClick = () => {
        this.setState({text: ''});
        this.props.onButtonClick(this.state.text);
    }

    render(){
        return (
            <div>
                <textarea onChange={this.textChange} style={{color: this.props.color}} 
                value={this.state.text}/>
                <button onClick={this.onButtonClick}>
                    추가
                </button>
            </div>
        )
    }
};
*/
export default TextBox;
