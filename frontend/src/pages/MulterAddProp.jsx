import { useNavigate } from "react-router-dom";
import axios from "../axios";
import React, { useState,useEffect } from "react";

const MulterAddProp = () => {

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:8000/api/agent/getagent",{
            method:"GET",
        })
        .then(res => res.json())
        .then((data)=>{
            console.log(data, "agentData");
            setData(data.data)
        })
    },[])


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


const [agentusername,setAgentusername] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [address,setAddress]=useState("")
    const [area,setArea]=useState(0)
    const [price, setPrice] = useState(0);
    const [description,setDescription]=useState("")
    const [availability, setAvailability] = useState(0);

const [file, setFile] = useState("");

const history = useNavigate();

const setdata = (e) => {
  const { value } = e.target;
    setName(value);
    setCategory(value);
    setAddress(value);
    setArea(value);
    setPrice(value);
    setDescription(value);
    setAvailability(value);
    setAgentusername(value);
}

const setimgfile = (e) => {
  setFile(e.target.files[0])
}

// adduser data

const addProduct = async (e) => {
  e.preventDefault();

  var formData = new FormData();
  formData.append("photo", file);
    formData.append("name", name);
    formData.append("category", category);
    formData.append("address", address);
    formData.append("area", area);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("availability", availability);
    formData.append("agentusername", agentusername);

  const config = {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  }

  const res = await axios.post("http://localhost:8000/api/property/multeradd", formData, config);

  if (res.data.status === 401 || !res.data) {
    console.log("errror")
  } else {
    // history("/multer")
    alert("Added Success")
  }
}



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  return (
    <>
    

    <h1> Multer Add Property</h1>

<form>
    <p>Name</p>
    <input type="text" name="name" onChange={setdata}/>


    <p>ImageUpload</p>
    <input type="file" onChange={setimgfile} name='photo' placeholder="" />


    <p>Price</p>
    <input type="number" name="price" onChange={setdata} />


    <p>Avail</p>
    <input type="number" name="availability" onChange={setdata}/>


    <p>Address</p>
    <input type="text" name="address" onChange={setdata} />


    <p>Area</p>
    <input type="text" name="area" onChange={setdata} />

    <p>Category</p>
    <select className="" name="category" id="cname" onInput={setdata}>
        <option className="hidden"  selected >Choose Category</option>

        {catdata.map(i=>{
            return (
            <option>
            {i.cname} 
            </option>
        )
        })}

    </select>

    <p>Description</p>
    <input type="text" name="description" onChange={setdata} />

    <p>Agents</p>
    <select className="" name="agentusername" id="role" onInput={setdata}>
        <option className="hidden"  selected >Choose Agent</option>

        {
        data.map(i=>{
            return (
            <option>
            {i.agentusername} 
            </option>
        )
        })}

    </select>
    <br/><br/>

    <br/><br/>

<button type="submit" onClick={addProduct}>Add Property</button>
</form>
    
    
    </>
  )
}

export default MulterAddProp