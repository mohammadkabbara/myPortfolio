import "./Contact.scss";
import { useState } from "react";
export default function Contact() {

    const [message,setMessage]=useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault();
        setMessage(true)
    }
    return (
        <div className="contact" id="contact">

            <div className="left">

                <img src="https://marvel-b1-cdn.bc0a.com/f00000000216283/www.fortinet.com/content/dam/fortinet/images/footer-banners/contact-sales-icon.png"></img>
            </div>
            <div className="right">

                <h2>Contact</h2>

                <form onSubmit={handleSubmit}>
                    <input type="text" className="" placeholder="Email"/>
                    <textarea className="" placeholder="Message"></textarea>
                    <button type="submit" className="">send</button>

                    {message && <span>Thanks , I'll reply ASAP</span>}
                </form>
            </div>
         
        </div>
    )
}
