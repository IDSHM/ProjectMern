import React, { useContext, useEffect, useRef, useState } from 'react'
import './single.css'
import axios from 'axios';
import { Link,useParams } from 'react-router-dom';
import { appoContext } from '../context/AppointementContext';
import emailjs from '@emailjs/browser';


const UserSingle = () => {

    const form = useRef();

    const{addApposCount} = useContext(appoContext)

    const { id } = useParams();

    const [appo, setAppo] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    propertyDetails: {
        id:0,
        image: "",
        name: "",
        category: "",
        address: "",
        area: 0,
        description: "",
        availability: 0,
        agentUserName: "",
        price:0
    },
    });

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    const handleChange = (e) => {

    setAppo((appo) => ({
        ...appo,
        [e.target.id]: e.target.value,
    }));
    };

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //   let navigate = useNavigate()
const saveApp=(property)=>{
    console.log(property)
    setAppo((prev)=>({...prev,propertyDetails:{...property}}));
    let agID = property.id
    addApposCount(agID)
console.log(appo);
}

    const handlebook = async () => {
    
      // let sendingData = JSON.stringify(appo);
    try {
        console.log(appo);
        await axios.post("http://localhost:8000/api/bookappointment", {
        headers: {
            'Content-Type': 'application/json'
        },
        body:appo
        })
        .then((res) => {
            console.log(res.data);
            alert("Appointment Booked Successfully");
            // navigate('/userhome');
        });
    } catch (error) {
        console.log(error);
        alert("Invalid");
      //   navigate('/getappointment');
    }






        emailjs.sendForm('service_4aitv2k', 'template_vxhxf4w', form.current, 'ZCu2v1oscKCZ1AT2H')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    
        emailjs.sendForm('service_hw9p5nc', 'template_tlc86gs', form.current, 'BigeqtBfsxcQJPXFP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });


            alert('Thank you for contacting us && Email sent successfully');

        };
    


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  // GET Data for Cards
const [bookdata, setBookdata] = useState({
    id:0,
    image: "",
    name: "",
    category: "",
    address: "",
    area: 0,
    price:0,
    description: "",
    availability: 0,
    agentusername: "",

})

useEffect(() => {
    if (!id) return;
    const fetchPost = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/bookappo/${id}`);
        setBookdata(data);
        console.log(data);
    };
    fetchPost();
  }, []);
  
  const logout = () => {
        window.localStorage.clear();
        window.location.href= "/";
  }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


return (
    <>
    
    <div className="container-xxl bg-white p-0">
        
        <div className="container-fluid nav-bar bg-transparent">
            <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
            <Link to="/userhome" className="navbar-brand d-flex align-items-center text-center">
                    <div className="icon p-2 me-2">
                        <img className="img-fluid" src="img/icon-deal.png" alt="" style={{width: "30px", height: "30px"}}/>
                    </div>
                    <h1 className="m-0 text-warning">Estracres</h1>
                </Link>
                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto">
                    <Link to="/userhome"  className="nav-item nav-link ">Home</Link>
                    <Link to="/userabout" className="nav-item nav-link">About</Link>
                        <div className="nav-item dropdown">
                        <Link to="" className="nav-link active" data-bs-toggle="dropdown">Property</Link>
                            <div className="dropdown-menu rounded-0 m-0">
                            <Link to="/userp_list" className="dropdown-item">Property List</Link>
                            <Link to="/userp_agent" className="dropdown-item">Property Agent</Link>
                            </div>
                        </div>
                    <Link to="/usercontact" className="nav-item nav-link ">Contact</Link>
                    </div>
                    {/* <Link to="/dashboard" className="btn btn-warning px-3 d-none d-lg-flex">Dashboard</Link>
                &nbsp;&nbsp;&nbsp;&nbsp; */}
                <Link to="" onClick={logout} className="btn btn-warning px-3 d-none d-lg-flex">Logout</Link>                </div>
            </nav>
        </div>
        
        <div className="container-fluid header bg-white p-0">
            <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div className="col-md-6 p-5 mt-lg-5">
                <br /><br /><br />
                    <h1 className="display-5 animated fadeIn mb-4">Properties</h1> 
                        <nav aria-label="breadcrumb animated fadeIn">
                        <ol className="breadcrumb text-uppercase">
                            <li className="breadcrumb-item"><a href="# ">Home</a></li>
                            <li className="breadcrumb-item"><a href="# ">Pages</a></li>
                            <li className="breadcrumb-item text-body active" aria-current="page">Property Details</li>
                        </ol>
                    </nav>
                </div>
                <div className="col-md-6 animated fadeIn">
                    <img className="img-fluid" src="img/re2.jpg" alt=""/>
                </div>
            </div>
        </div>
        
        
        


        <div className="container mt-5 mb-5">
    <div className="row d-flex justify-content-center">
        <div className="col-md-12">
            <div className="card">
                <div className="row">
                    <div className="col-md-8">
                        <div className="images p-3">
                            <div className="text-center p-4"> 
                            <img id="main-image" src={bookdata.image} width="600" height="500" alt='' /> </div>
                        
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="product p-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center"> 
                                <i className="fa fa-long-arrow-left"></i> 
                                <span className="ml-1"><Link to="/userp_list">Back</Link></span> 
                                </div> 
                                {/* <i className="fa fa-shopping-cart text-muted"></i> */}
                            </div>
                            <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">{bookdata.category}</span>
                                <h5 className="text-uppercase">{bookdata.name}</h5>
                                <div className="price d-flex flex-row align-items-center"> 
                                <span className="act-price" style={{marginLeft:"auto", marginRight:"auto"}}>₹ {bookdata.price}</span>
                                    {/* <div className="ml-2"> <small className="dis-price">$59</small> <span>40% OFF</span> </div> */}
                                </div>
                            </div>
                            <p className="about">{bookdata.description}</p>
                            <div className="sizes mt-5">
                                <h6 className="text-uppercase">Address</h6> 
                                {bookdata.address}
                            </div>
                            <div className="sizes mt-5">
                                <h6 className="text-uppercase">Area</h6> 
                                {bookdata.area} sqft.
                            </div>
                            <div className="sizes mt-5">
                                <h6 className="text-uppercase">Agent UserName</h6> 
                                {bookdata.agentusername}
                            </div>
                            <div className="cart mt-4 align-items-center"> 
                            {/* <button type="button" className="btn btn-warning text-uppercase mr-2 px-4" data-toggle="modal" data-target="#loginModal">Book Appointment</button>  */}
                            {/* <i className="fa fa-heart text-muted"></i> 
                            <i className="fa fa-share-alt text-muted"></i>  */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="images p-3">
                            <div className="text-center p-4"> 

                    <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                        <h1 className="mb-3">Book Appointment</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus est alias iste aspernatur exercitationem iure sit. Hic dignissimos harum suscipit!</p>
                    </div>
                            <form ref={form} > 
                            {/* onSubmit={sendEmail} */}
                            
                                <input type="text" id="name" name="name" placeholder="Enter Your Name" onInput={handleChange}/>
                                <br />
                                <br />
                                <input type="email" id="email" name="email" placeholder="Enter Your Email" onInput={handleChange}/>
                                <br />
                                <br />
                                <input type="number" id="phone" name="phone" placeholder="Enter Your Phone Number" onInput={handleChange}/>
                                <br />
                                <br />
                                <input type="text" id="message" name="message" placeholder="Some Information.." onInput={handleChange}/>
                                <br />
                                <br />
                            </form>
                            
                            <div className="row">
                            <div className="col-md-6">
                            <button onClick={() => saveApp(bookdata)}  className="btn btn-warning text-uppercase mr-2 px-4">
                                Save Appointment
                            </button>
                            </div>
                            <div className="col-md-6">
                            <button onClick={() => handlebook()}  className="btn btn-warning text-uppercase mr-2 px-4">
                                Book Appointment
                            </button>
                            </div>
                            </div>

                        </div>
                    </div>
                </div>
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

export default UserSingle