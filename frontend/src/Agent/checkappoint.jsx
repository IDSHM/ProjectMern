import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const Checkappoint = () => {


  const [data, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:8000/api/checkagent/appo",{
        method:"GET",
    })
    .then(res => res.json())
    .then((data)=>{
        console.log(data, "appointData");
        for(let i=0; i<data.length; i++){
            console.log(i);
        }
        setData(data.data)
        
    })

   

},[])

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
            <Link to="/agentabout" className="nav-item nav-link ">About</Link>
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
            <h1 className="display-5 animated fadeIn mb-4">Check Appointment</h1> 
                <nav aria-label="breadcrumb animated fadeIn">
                <ol className="breadcrumb text-uppercase">
                    <li className="breadcrumb-item"><a href="# ">Home</a></li>
                    <li className="breadcrumb-item"><a href="# ">Pages</a></li>
                    {/* <li className="breadcrumb-item text-body" aria-current="page">About</li> */}
                </ol>
            </nav>
        </div>
        <div className="col-md-6 animated fadeIn">
            <img className="img-fluid" src="img/re2.jpg" alt=""/>
        </div>
    </div>
</div>



<div style={{marginLeft:"150px", marginRight:"150px", marginTop:"50px"}}>
<div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "400px"}}>
            {/* <h1 className="mb-3">Property Agents</h1> */}
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus est alias iste aspernatur exercitationem iure sit. Hic dignissimos harum suscipit!</p>
        </div>

<table style={{padding: '50px', border: '10px solid', cellpadding: '10px', cellspacing: '10px', width: '100%'}}>
<tr style={{padding:'50px'}}>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Message</th>
    {/* <th>Property Details</th> */}

</tr>


    {data.map((i)=>{
        return (
        <tr>
            <td>{i.name}</td>
            <td>{i.email}</td>
            <td>{i.phone}</td>
            <td>{i.message}</td>
            {/* <td>{i.propertyDetails}</td> */}
            <td><button>Confirm</button></td>
            <td><button>Reject</button></td>
        </tr>
        )
    })}

</table>

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
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
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

export default Checkappoint