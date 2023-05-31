import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import ReactPrint from 'react-to-print'


const GetAppo = () => {
    const { id } = useParams();


    let nav = useNavigate();

    const ref = useRef()


    const [userData, setUser] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:8000/api/book/getdata/${id}`,{
            method:"GET",
        })
        .then(res => res.json())
        .then((userData)=>{
            console.log(userData, "userData");
            setUser(userData.userData)
        })
    },[])




return (
    <>

<div className="container-xl">
    <div className="table-responsive">
        <div className="table-wrapper">
            <div className="table-title">
                <div className="row">
                    <div className="col-sm-5">
                        <h2>Agent <b>Appointments</b></h2>
                    </div>

                    <div className="col-sm-7">
                        
                        <ReactPrint trigger={()=><button  className="btn btn-secondary"><i className="material-icons">&#xE147;</i>Print</button> }content ={()=>ref.current}/>

                    </div>
                </div>
            </div>
            <table className="table table-striped table-hover" ref={ref}>
                <thead>
                    <tr>
                        <th>Name</th>						
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Message</th>
                        <th>Property Category</th>
                        <th>Property Address</th>
                    </tr>
                </thead>
                <tbody>
                {userData.map((userData) => (
                        <tr key={userData._id}>  
                        <td> {userData.name}</td>
                        <td>{userData.email}</td>                        
                        <td>{userData.phone}</td>
                        <td>{userData.message}</td>
                        <td>{userData.propertyDetails.category}</td>
                        <td>{userData.propertyDetails.address}</td>
                    </tr>
                    ))}
                </tbody>
            </table>

        </div>

    </div>
</div>     

    </>
)
}

export default GetAppo