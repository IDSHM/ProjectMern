import React, { useEffect, useState } from 'react'
import axios from "../axios";
import { Link, useNavigate } from 'react-router-dom';
import config from "../CRUD/config.json";


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const AddCategory = () => {
    
  const [cname, setCat] = useState("");

  let nav = useNavigate();

  const [user, setUser] = useState([]);
  const [posts, setPosts] = useState([]);



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    const addCat = (e) => {
        e.preventDefault();
    
        axios.post("http://localhost:8000/api/category/add", {cname})
          .then(() => {
        
            setCat("")
          alert("Category Added Successfully")
          //   navigate('/adminp_list')
          })
          .catch((error) => alert(error.message));
      };

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

useEffect(() => {
  fetch("http://localhost:8000/api/category/get",{
      method:"GET",
  })
  .then(res => res.json())
  .then((user)=>{
      console.log(user, "user");
      setUser(()=>([
        ...user.catdata
      ]))
  })
},[user])

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const handleDelete = async (userData) => {
  console.log(userData);
  let filteredData = user.filter((p) => p._id !== userData._id)
  console.log(user);
  let id = userData._id;
  setUser(()=>( filteredData));
  const response = await axios.delete(`http://localhost:8000/api/category/${id}`);
  console.log(response);
  alert("Category Deleted Successfully")
};

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  return (
    <>

  <div className="container-xl">
    <div className="table-responsive">
        <div className="table-wrapper">


        <form>
            <p>Category</p>
            <input type="text" onChange={(e) => setCat(e.target.value)} value={cname}/>
            <br/><br/>
            <button type="submit" onClick={addCat}>Add Category</button>
            {/* <button type="submit" onClick={handleDelete}>Remove Category</button> */}

            </form>

            
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Name</th>						
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {user.map((user) => (

                        <tr key={user._id}>  
                        <td> {user.cname}</td>
                        <td>
                           
                            <Link to="" className="delete" title="Delete" data-toggle="tooltip">
                                <i  onClick={() => handleDelete(user)} className="material-icons">&#xE5C9;</i>
                            </Link>
                        </td>
                        
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

export default AddCategory