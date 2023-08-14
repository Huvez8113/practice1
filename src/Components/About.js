import React ,{useState} from 'react'

export default function About() {
    
    const [myStyle,setMyStyle] = useState({
        color:'white',
        backgroundColor:"black", 
    })
    const [btnText,setBtnText] = useState('Enable Dark Mode')
    let toggleStyle = () => {
        if(myStyle.color==="white"){
            setMyStyle({
                color:"black",
                backgroundColor:"white",
                border:"2px solid red",
                borderRadius:"25px"
            })
            setBtnText("Enable Dark Mode");
        }
        else{
            setMyStyle({
                color:"white",
                backgroundColor:"black",
                border:"2px solid red",
                borderRadius:"25px"
            })
            setBtnText("Enable Light Mode");
        }
    }
    return (
        <div className="container my-5" style={myStyle}>
            <h1>Example heading <span className="badge bg-secondary">New</span></h1>
            <h2>Example heading <span className="badge bg-secondary">New</span></h2>
            <h3>Example heading <span className="badge bg-secondary">New</span></h3>
            <h4>Example heading <span className="badge bg-secondary">New</span></h4>
            <h5>Example heading <span className="badge bg-secondary">New</span></h5>
            <h6>Example heading <span className="badge bg-secondary">New</span></h6>

            <button className='btn btn-primary my-5' onClick={toggleStyle}>{btnText}</button>
        </div>
    )
}
