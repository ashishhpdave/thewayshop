import { NavLink } from "react-router-dom"

function ContactUs() {
    return (
        <>
            <div className="contact-box-main">
                <div className="container">
                    <div className="ContactRow">
                        <div className="ContactInfoMain">
                            <div className="contact-info-left">
                                <h2>CONTACT INFO</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate. </p>
                                <ul>
                                    <li>
                                        <p><i className="fas fa-map-marker-alt"></i>Address: Michael I. Days 3756 <br />Preston Street Wichita,<br /> KS 67213 </p>
                                    </li>
                                    <li>
                                        <p><i className="fas fa-phone-square"></i>Phone: <NavLink href="tel:+1-888705770">+1-888 705 770</NavLink></p>
                                    </li>
                                    <li>
                                        <p><i className="fas fa-envelope"></i>Email: <NavLink href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</NavLink></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="getInTouchMain">
                            <div className="contact-form-right">
                                <h2>GET IN TOUCH</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed odio justo, ultrices ac nisl sed, lobortis porta elit. Fusce in metus ac ex venenatis ultricies at cursus mauris.</p>
                                <form id="contactForm">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="name" name="name"  placeholder="Name" required data-error="Please enter your name" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="text" placeholder="Email" id="email" className="form-control" name="name" required data-error="Please enter your email" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input type="password" className="form-control" id="subject" name="password" placeholder="password" required data-error="Please enter your password" />
                                                <div className="help-block with-errors"></div>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <textarea className="form-control" id="message" placeholder="Your Message" rows="4" data-error="Write your message" required></textarea>
                                                <div className="help-block with-errors"></div>
                                            </div>
                                            <div className="submit-button text-center">
                                                <button className="btn hvr-hover" id="submit" type="submit">Send Message</button>
                                                <div id="msgSubmit" className="h3 text-center hidden"></div>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs