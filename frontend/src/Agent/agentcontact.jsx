import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class Agentcontact extends Component {
  render() {
    const logout = () => {
        window.localStorage.clear();
        window.location.href= "/";
    }
    return (
      <>

<div className="container-xxl bg-white p-0">
        
        <div className="container-fluid nav-bar bg-transparent">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
            <Link to="/agenthome" className="navbar-brand d-flex align-items-center text-center">
                    <div className="icon p-2 me-2">
                        <img className="img-fluid" src="img/icon-deal.png" alt="Icon" style={{width: "30px", height: "30px"}}/>
                    </div>
                    <h1 className="m-0 text-warning">Estracres</h1>
                </Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                    <Link to="/agenthome"  className="nav-item nav-link ">Home</Link>
                    <Link to="/agentabout" className="nav-item nav-link">About</Link>
                        <div className="nav-item dropdown">
                        <Link to="" className="nav-link " data-bs-toggle="dropdown">Property</Link>
                            <div className="dropdown-menu rounded-0 m-0">
                            <Link to="/agentp_list" className="dropdown-item">Property List</Link>
                            <Link to="/agentp_agent" className="dropdown-item">Property Agent</Link>
                            </div>
                        </div>
                    <Link to="/agentcontact" className="nav-item nav-link active">Contact</Link>
                    </div>
                    <Link to="/check" className="btn btn-warning px-3 d-none d-lg-flex">Check Appointment</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="" onClick={logout} className="btn btn-warning px-3 d-none d-lg-flex">Logout</Link>
                </div>
            </nav>
        </div>
        
        <div className="container-fluid header bg-white p-0">
            <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div className="col-md-6 p-5 mt-lg-5">
                    <h1 className="display-5 animated fadeIn mb-4">Contact Us</h1> 
                        <nav aria-label="breadcrumb animated fadeIn">
                        <ol className="breadcrumb text-uppercase">
                            <li className="breadcrumb-item"><a href="# ">Home</a></li>
                            <li className="breadcrumb-item"><a href="# ">Pages</a></li>
                            <li className="breadcrumb-item text-body active" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                </div>
                <div className="col-md-6 animated fadeIn">
                    <img className="img-fluid" src="img/re2.jpg" alt=""/>
                </div>
            </div>
        </div>
        
        
        
        <div className="container-xxl py-5">
            <div className="container">
                
                <div className="row g-4">
                    <div className="col-12">
                        <div className="row gy-4">
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                <div className="bg-light rounded p-3">
                                    <div className="d-flex align-items-center bg-white rounded p-3" style={{border: "1px dashed rgba(0, 185, 142, .3)"}}>
                                        <div className="icon me-3" style={{width: "45px", height: "45px"}}>
                                            <i className="fa fa-map-marker-alt text-warning"></i>
                                        </div>
                                        <span>Sector 75, Mohali, Punjab, India</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                <div className="bg-light rounded p-3">
                                    <div className="d-flex align-items-center bg-white rounded p-3" style={{border: "1px dashed rgba(0, 185, 142, .3)"}}>
                                        <div className="icon me-3" style={{width: "45px", height: "45px"}}>
                                            <i className="fa fa-envelope-open text-warning"></i>
                                        </div>
                                        <span>dev@example.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                <div className="bg-light rounded p-3">
                                    <div className="d-flex align-items-center bg-white rounded p-3" style={{border: "1px dashed rgba(0, 185, 142, .3)"}}>
                                        <div className="icon me-3" style={{width: "45px", height: "45px"}}>
                                            <i className="fa fa-phone-alt text-warning"></i>
                                        </div>
                                        <span>+91 7973108409</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">

                        <iframe className="position-relative rounded w-100 h-100"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.6805661465805!2d76.68899857527727!3d30.6992624746004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefb3a5eb21e7%3A0x89798321433f1815!2sHopingMinds!5e0!3m2!1sen!2sin!4v1682155958072!5m2!1sen!2sin"
                            frameborder="0" style={{minHeight: "400px", border:"0"}} allowfullscreen="" aria-hidden="false"
                            tabindex="0" title=" "></iframe>
                    </div>
                    <div className="col-md-6">
                        <div className="wow fadeInUp" data-wow-delay="0.5s">
                        
                            <form>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                            <label for="name">Your Name</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                            <label for="email">Your Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                            <label for="subject">Subject</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: "150px"}}></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    
                                    <div className="col-12">
                                    <br/> 
                                        <button className="btn btn-warning w-100 py-3" type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Get In Touch</h5>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Sector 75, Mohali, Punjab, India</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 7973108409</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>dev@example.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href=" "><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href=" "><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href=" "><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" href=" "><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Quick Links</h5>
                        <a className="btn btn-link text-white-50" href=" ">About Us</a>
                        <a className="btn btn-link text-white-50" href=" ">Contact Us</a>
                        <a className="btn btn-link text-white-50" href=" ">Our Services</a>
                        <a className="btn btn-link text-white-50" href=" ">Privacy Policy</a>
                        <a className="btn btn-link text-white-50" href=" ">Terms & Condition</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Photo Gallery</h5>
                        <div className="row g-2 pt-2">
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="img/property-1.jpg" alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="img/property-2.jpg" alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="img/property-3.jpg" alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="img/property-4.jpg" alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="img/property-5.jpg" alt=""/>
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="img/property-6.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Newsletter</h5>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative mx-auto" style={{maxWidth: "400px"}}>
                            <input className="form-control bg-transparent text-white w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email"/>
                            <button type="button" className="btn btn-warning py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="# ">Estracres</a>, All Right Reserved. 
							
							Designed By <a className="border-bottom" href=" ">Ishaan</a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href=" ">Home</a>
                                <a href=" ">Cookies</a>
                                <a href=" ">Help</a>
                                <a href=" ">FQAs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <a href="# " className="btn btn-lg btn-warning btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
      
      </>
    )
  }
}

export default Agentcontact