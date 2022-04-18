import "./Contact.scss";
// import { useState } from "react";
export default function Contact() {

//     const [message,setMessage]=useState(false)

//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         setMessage(true)
//     }
    return (
        <div className="contact" id="contact">
        <h2>Like What you see ?</h2>
        <h1>Contact Me !</h1>

        <div className="rightC">

            <div className="imgContaina">
        <img src="./assest/MO.png"/>

        </div>
        </div>

        <div className="leftC">
        
            <div className="vector1">
            <img src="./assest/Vector1.png"/>               
            </div>
            <div className="vector2">
            <img src="./assest/Vector2.png"/>               
            </div>
            <div className="vector3">
            <img src="./assest/Vector3.png"/>               
            </div>
            <div className="vector4">
            <img src="./assest/Vector4.png"/>               
            </div>
            <div className="boo"></div>

            <div className="email">
            <img src="./assest/email.svg"/>    
      
            </div>
        </div>



            
        </div>
    )
}
