import React, { useEffect } from 'react'
import {useState} from 'react'
import axios from 'axios';
const Propertyform = () => {
    const [userId,setUserId]=useState("")
    const [photos,setPhotos]= useState([])
    const [price,setPrice]=useState("")
    const [name,setName]=useState("")
    const [address,setAddres]=useState("")
    const [area,setArea]=useState("")
    const [phone,setPhone]=useState("")
    const [description,setDescription]=useState("")
    const [bed,setBed]=useState("")
    const [bath,setBath]=useState("")


  const uploadPhotos = (e) =>{
    const file = e.target.files;
    let data = new FormData();
    for(let i=0; i<file.length; i++){
      data.append('photos',(file[i]))
    }
  }

  useEffect(()=>{

    axios.get('/user').then(user=>

      setUserId(user._id)
    )
  },[])

  const saveProperties = () =>{
    const propertyData = {
      photos,price,name,address,area,phone,description,bed,bath
    };



  }
  

  return (
    <>

    <form onSubmit={saveProperties}>

        <input type="number" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <input type="text" value={address} onChange={(e)=>{setAddres(e.target.value)}}/>
        <input type="text" value={area} onChange={(e)=>{setArea(e.target.value)}}/>
        <input type="number" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
        <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
        <input type="number" value={bed} onChange={(e)=>{setBed(e.target.value)}}/>
        <input type="number" value={bath} onChange={(e)=>{setBath(e.target.value)}}/>

        <input type="file" multiple value={photos} onChange={uploadPhotos}/>


    </form>
    
    

    
    
    </>
  )
}

export default Propertyform