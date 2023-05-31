import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const BookAppointment = () => {

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
    // console.log(`${e.target.id} : ${e.target.value}`);

    setAppo((appo) => ({
      ...appo,
      [e.target.id]: e.target.value,
    }));
    // console.log(appo);
  };

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//   let navigate = useNavigate()
const saveApp=(property)=>{
  console.log(property)
  setAppo((prev)=>({...prev,propertyDetails:{...property}}));
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
  };



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// GET Data for Cards
const [bookdata, setBookdata] = useState({
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
  };
  fetchPost();
}, []);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  return (
    <>

          <div style={{ border: "2px solid black" }}>
            <img src={bookdata.image} alt="" />
            <p>
              Name : <b>{bookdata.name}</b>
            </p>
            <p>
              Category: <b>{bookdata.category}</b>
            </p>
            <p>
              Address : <b>{bookdata.address}</b>
            </p>
            <p>
              Area : <b>{bookdata.area}</b>{" "}
            </p>
            <p>
              Description : <b>{bookdata.description}</b>{" "}
            </p>
            <p>
              Availability : <b>{bookdata.availability}</b>{" "}
            </p>
            <p>
              Agent Username : <b>{bookdata.agentusername}</b>{" "}
            </p>

            <br />
            <br />
            <form>
              <input
                type="text"
                id="name"
                placeholder="Enter Your Name"
                onInput={handleChange}
              />
              <br />
              <br />
              <input
                type="email"
                id="email"
                placeholder="Enter Your Email"
                onInput={handleChange}
              />
              <br />
              <br />
              <input
                type="number"
                id="phone"
                placeholder="Enter Your Phone Number"
                onInput={handleChange}
              />
              <br />
              <br />
              <input
                type="text"
                id="message"
                placeholder="Some Information.."
                onInput={handleChange}
              />
              <br />
              <br />
            </form>
            {/* {console.log(item)} */}
           <button onClick={() => saveApp(bookdata)}>
              Save Appointment
            </button>
            <button onClick={() => handlebook()}>
              Book Appointment
            </button>
          </div>

    </>
  );
};

export default BookAppointment;
