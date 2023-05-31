/* eslint-disable react-hooks/rules-of-hooks */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Agenthome =()=> {


    const logout = () => {
        window.localStorage.clear();
        window.location.href= "/";
    }


    const [searchTerm, setSearchTerm] = useState("");
    const [properties, setProperty] = useState([]);
    const [agents, setAgent] = useState([]);

  
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  useEffect(() => {
    const agentId = localStorage.getItem('AgentId');
    console.log(agentId);
    const fetchdata = async () => {
      const response = await axios.get(`http://localhost:8000/api/agentproperty/get/${agentId}`);
      // console.log(response.data.data);
      let op = response.data.data
      setProperty(()=>([
        ...properties,
        ...op
      ]));
      console.log(properties);
    };
    fetchdata();
  }, []);

  
    useEffect(() => {
        const fetchdata = async () => {
        const response = await axios.get("http://localhost:8000/api/agent/getagent");
          // console.log(response.data.data);
            let op = response.data.data;
            setAgent(() => [...agents, ...op]);
            console.log(agents);
        };
        fetchdata();
    }, []);
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    const [catdata, setCatdata] = useState([])
        useEffect(() => {
            fetch("http://localhost:8000/api/category/get",{
                method:"GET",
            })
            .then(res => res.json())
            .then((catdata)=>{
                console.log(catdata, "catData");
                setCatdata(catdata.catdata)
            })
        },[])
    

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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
                    <Link to="/agenthome"  className="nav-item nav-link active">Home</Link>
                    <Link to="/agentabout" className="nav-item nav-link">About</Link>
                    <div className="nav-item dropdown">
                    <Link to="" className="nav-link" data-bs-toggle="dropdown">Property</Link>
                        <div className="dropdown-menu rounded-0 m-0">
                            <Link to="/agentp_list" className="dropdown-item">Property List</Link>
                            <Link to="/agentp_agent" className="dropdown-item">Property Agent</Link>
                        </div>
                    </div>
                    <Link to="/agentcontact" className="nav-item nav-link">Contact</Link>
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
                <br/><br/>
                <h1 className="display-5 animated fadeIn mb-4">Find A <span className="text-warning">Perfect Home</span> To Live With Your Family</h1>
                <p className="animated fadeIn mb-4 pb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus est alias iste aspernatur exercitationem iure sit. Hic dignissimos harum suscipit!</p>
                <a href=" " className="btn btn-warning py-3 px-5 me-3 animated fadeIn">Get Started</a>
            </div>
            
            <div className="col-md-6 animated fadeIn">
                
                    <div className="owl-carousel-item">
                        <img className="img-fluid" src="img/re2.jpg" alt="" />
                    </div>
            
            
            </div>
        </div>
    </div>
    
    <div className="container-fluid bg-warning mb-5 wow fadeIn" data-wow-delay="0.1s" style={{padding: "35px"}}>
    <div className="container">
        <div className="row g-2">
            <div className="col-md-12">
                <div className="row g-2">
                    <div className="col-md-12">
                        
                        <input id="searchInput" className="form-control border-0 py-3" type="text" placeholder="Search here by Names..." onChange={(event) => {setSearchTerm(event.target.value);}} />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<div className="container-xxl py-5">
    <div className="container">
        <div className="row g-0 gx-5 align-items-end">
            <div className="col-lg-6">
                <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                    <h1 className="mb-3">Property Listing</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus est alias iste aspernatur exercitationem iure sit. Hic dignissimos harum suscipit!</p>
                </div>
            </div>
            <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                    {/* <li className="nav-item me-2">
                        <a className="btn btn-outline-warning active" data-bs-toggle="pill" href="#tab-1">Featured</a>
                    </li>
                    <li className="nav-item me-2">
                        <a className="btn btn-outline-warning" data-bs-toggle="pill" href="#tab-2">For Sell</a>
                    </li>
                    <li className="nav-item me-0">
                        <a className="btn btn-outline-warning" data-bs-toggle="pill" href="#tab-3">For Rent</a>
                    </li> */}
                </ul>
            </div>
        </div>
        <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                    <div className="row g-4">
                    {
                      properties.filter((property) => {
                        if(searchTerm == ""){
                          return property;
                        }else if(property.name.toLowerCase().includes(searchTerm.toLowerCase())){
                          return property;
                        }
                      })
                    
                    .map((product) => (
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="property-item rounded overflow-hidden">
                                <div className="position-relative overflow-hidden">
                                    <a href=" "><img className="" src={product.image} alt="" style={{height:"300px", width:"100%"}}/></a>
                                    {/* <div className="bg-warning rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                    <div className="bg-white rounded-top text-warning position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div> */}
                                </div>
                                <div className="p-4 pb-0">
                                    <h5 className="text-warning mb-3">₹{product.price}</h5>
                                    <a className="d-block h5 mb-2" href=" ">{product.name}</a>
                                    <p><i className="fa fa-map-marker-alt text-warning me-2"></i>{product.address}</p>
                                </div>
                                <div className="d-flex border-top">
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-warning me-2"></i>{product.area} Sqft</small>
                                    <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-warning me-2"></i>{product.bed} Bed</small>
                                    <small className="flex-fill text-center py-2"><i className="fa fa-bath text-warning me-2"></i>{product.bath} Bath</small>
                                </div>
                            </div>
                        </div>
                    ))}
                        
                        <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                            <Link className="btn btn-warning py-3 px-5" to="/agentp_list">Browse More Property</Link>
                        </div>
                    </div>
                </div>
            </div>
    </div>
</div>



    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="about-img position-relative overflow-hidden p-5 pe-0">
                        <img className="img-fluid w-100" src="img/re8.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h1 className="mb-4">#1 Place To Find The Perfect Property</h1>
                    <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus est alias iste aspernatur exercitationem iure sit. Hic dignissimos harum suscipit!Hic dignissimos harum suscipit!Hic dignissimos harum suscipit!</p>
                    <p><i className="fa fa-check text-warning me-3"></i>ABCD</p>
                    <p><i className="fa fa-check text-warning me-3"></i>WXYZ</p>
                    <p><i className="fa fa-check text-warning me-3"></i>MNOP</p>
                    <a className="btn btn-warning py-3 px-5 mt-3" href=" ">Read More</a>
                </div>
            </div>
        </div>
    </div>

    <div className="container-xxl py-5">
    <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
            <h1 className="mb-3">Property Types</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus est alias iste aspernatur exercitationem iure sit. Hic dignissimos harum suscipit!</p>
        </div>
        <div className="row g-4">
        {catdata.map(i=>{
                    return (
            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                <a className="cat-item d-block bg-light text-center rounded p-3" href=" ">
                    <div className="rounded p-4">
                        <div className="icon mb-3">
                            <img className="img-fluid" src="img/icon-apartment.png" alt="Icon"/>
                        </div>
                        <h6>{i.cname}</h6>
                        <span>Exicting Properties</span>
                    </div>
                </a>
            </div>
            )
            })}
        </div>
    </div>
</div>

 
    <div className="container-xxl py-5">
        <div className="container">
            <div className="bg-light rounded p-3">
                <div className="bg-white rounded p-4" style={{border: "1px dashed rgba(0, 185, 142, .3)"}}>
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <img className="img-fluid rounded w-100" src="img/call-to-action.jpg" alt=""/>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="mb-4">
                                <h1 className="mb-3">Contact With Our Certified Agent</h1>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus est alias iste aspernatur exercitationem iure sit. Hic dignissimos harum suscipit!</p>
                            </div>
                            <Link to="/agentcontact" className="btn btn-warning py-3 px-4 me-2"><i className="fa fa-phone-alt me-2"></i>Make A Call</Link>
                            <Link to="/agentcontact" className="btn btn-dark py-3 px-4"><i className="fa fa-calendar-alt me-2"></i>Check Appoinment</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>




        <div className="container-xxl py-5" >
            <div className="container">
                <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                    <h1 className="mb-3">Our Clients Say!</h1>
                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                </div>
              <div className=" testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">   {/* owl-carousel */}
                    <div className="testimonial-item bg-light rounded p-3">
                        <div className="bg-white border rounded p-4">
                            <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-1.jpg" alt="" style={{width: "45px", height: "45px"}}/>
                                <div className="ps-3">
                                    <h6 className="fw-bold mb-1">Anuradha</h6>
                                    <small>Doctor</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded p-3">
                        <div className="bg-white border rounded p-4">
                            <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-2.jpg" alt="" style={{width: "45px", height: "45px"}}/>
                                <div className="ps-3">
                                    <h6 className="fw-bold mb-1">John</h6>
                                    <small>Businessman</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded p-3">
                        <div className="bg-white border rounded p-4">
                            <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                            <div className="d-flex align-items-center">
                                <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-3.jpg" alt="" style={{width: "45px", height: "45px"}}/>
                                <div className="ps-3">
                                    <h6 className="fw-bold mb-1">Kumar</h6>
                                    <small>Engineer</small>
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
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>dev@gmail.com</p>
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
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
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


export default Agenthome;