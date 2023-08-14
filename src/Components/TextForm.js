import React,{useState}from 'react'

export default function TextForm(props) {
   

     const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
     }
     const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
     }
     const handleClearClick = ()=>{
      let newText = '';
        setText(newText);
        props.showAlert("Text Cleared","success");
   }

     const handleChange = (event)=>{
        setText(event.target.value);
     }
     const [text, setText] = useState('');
    
    return (
            <div className="my-8" style={{color:props.mode==='dark'?'white':'black'}} >
                <h1 className="title" >Enter the Text below</h1>
                <textarea className="form-control" value={text} id="mybox" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleChange}></textarea>
                <button type="button" className="btn btn-info my-3" style={{color:"white"}} onClick={handleUpClick}>Convert to UpperCase</button>
                <button type="button" className="btn btn-info mx-3" style={{color:"white"}} onClick={handleLoClick}>Convert to LowerCase</button>
                <button type="button" className="btn btn-info mx-3" style={{color:"white"}} onClick={handleClearClick}>Clear Text</button>

                <h2>Analyzing</h2>
                <p>Words are {text.split(" ").length} and Characters are {text.length}</p>

                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter the text above to preview'}</p>
            </div>
               
    )
}
