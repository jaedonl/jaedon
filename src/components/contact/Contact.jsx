import React, { useRef, useState, useEffect } from 'react'
import './Contact.scss'
import emailjs from "emailjs-com";
import { LinkedIn, GitHub, Email} from '@material-ui/icons';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs
            .sendForm('service_5zbtvwk', 'template_ep3om4w', formRef.current, 'user_pceASK5yQOxTMRzJj529a')
                .then((result) => {
                    console.log(result.text);
                    setDone(true)
                    formRef.current[0].value = ''
                    formRef.current[1].value = ''
                    formRef.current[2].value = ''
                    formRef.current[3].value = ''
                    window.confirm('Message Sent')

                }, (error) => {
                    console.log(error.text);
                });
    }

    useEffect(() => {
        
    }, [])
    

    return (
        <div className="contact">            
            <h2 className="sectionTitle">Contact</h2>
            <div className="contactGrid">
                <div className="contactLeft">
                    <div className="contactInfo">
                        <h2 className="contactTitle">Looking for more information? <br/>
                            Here are more Links</h2>                     
                        <ul className="linkList">
                            <li className="linkItem">
                                <LinkedIn style={{ fontSize: 40, color: '#0077b5' }} />
                                <a href="https://www.linkedin.com/in/jaedon-lee-1793aa175/">LinkedIn</a>
                            </li>
                            <li className="linkItem">
                                <GitHub style={{ fontSize: 40, color: '#6e5494' }} />
                                <a href="https://github.com/jaedonl">GitHub</a>
                            </li>                      
                            <li className="linkItem">
                                <Email style={{ fontSize: 40, color: '#c9510c' }} />
                                <a href = "mailto:jyjd6404@hotmail.com?subject = Feedback&body = Message">jyjd6404@hotmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>                
                
                <div className="contactRight">
                    <h2 className="contactTitle">Get in touch.<br/>
                    I'm always available.</h2>  
                    
                    <form className="contactForm" ref={formRef} onSubmit={handleSubmit}>
                        <label>Name</label>
                        <input type="text" placeholder="Name" name="user_name" />
                        
                        <label>Subject</label>
                        <input type="text" placeholder="Subject" name="user_subject" />

                        <label>Email</label>
                        <input type="email" placeholder="Email" name="user_email" />

                        <label>Message</label>
                        <textarea type="text" rows="5" placeholder="Message" name="message" />

                        <button className="contactSubmit">SUBMIT</button>          

                        { done && <span>Thank you for submit. Message is successfully sent!</span> }                                  
                    </form>       
                </div>
                
            </div>

        </div>
    )
}

export default Contact
