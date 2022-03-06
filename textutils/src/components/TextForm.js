import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerClick = () => {
        // console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearText = () => {
        // console.log("Lowercase was clicked" + text);
        let newText = "";
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#454748' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-success" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
                <button className="btn btn-secondary" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-warning mx-2" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-dark" onClick={handleExtraSpaces}>Remove extra spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters.</p>
                <p>{0.008 * text.split(" ").length} minutes read.</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox to preview it here."}</p>
            </div>
        </>
    )
}