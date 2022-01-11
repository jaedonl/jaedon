import React from 'react'
import './Contact.scss'
import { LinkedIn, GitHub, Email} from '@material-ui/icons';

const Contact = () => {
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
                    <h2 className="contactTitle">Are you interested? <br/>
                    Send me your message</h2>           
                    <form className="contactForm">
                        <label>Name</label>
                        <input type="text" placeholder="Name" />
                        
                        <label>Subject</label>
                        <input type="text" placeholder="Subject" />

                        <label>Email</label>
                        <input type="email" placeholder="Email" />

                        <label>Message</label>
                        <textarea type="text" rows="5" placeholder="Message" />
                        <button className="contactSubmit">SUBMIT</button>
                    </form>
                </div>
                
            </div>

        </div>
    )
}

export default Contact
