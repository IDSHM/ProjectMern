import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login_style.css';


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const Login = () => {
  let nav = useNavigate();
  
  const [isLogin, setisLogin] = useState(false);
  const [userDetail, setUserDetails] = useState({
    name:'',
    username:'',
    email:'',
    password:'',
    confirmPass:'',
    phone:'',
    address:'',
    role:'',
    agentusername:'',
  });

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  const handleChange = (e) => {
    setUserDetails(userDetail=>({
        ...userDetail,
        [e.target.id]:e.target.value
    }));
  };

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  const handleSubmit = async(event) => {
    const{username,password} = userDetail
    event.preventDefault();

    if(username && password){
      setisLogin(!isLogin);
      const result = await fetch('http://localhost:8000/api/login',{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(userDetail)
      })
      
      let outData  = await result.json();
      console.log(outData);

      if(outData.msg==='Agent Logged Successfully'){
        alert("Agent Succesfully Logged")
        localStorage.setItem('AgentId',outData.agentId);
        nav('/agenthome')
      }
      else if(outData.msg==='User-Login Success'){
        alert("User Succesfully Logged")
        nav('/')
      }
      else if(outData.msg==='Admin Logged Successfully'){
        alert("Admin Succesfully Logged")
        nav('/adminhome')
      }
      else{
        alert(outData.msg);
        nav('/login')
      }
    }
    else{
      alert('Login failed')
    }
  };

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  return (
    // <div className="container">
    //   <div className="logincard">
    //     <h2 className='h2Reg'>Login</h2>
    //     <form onSubmit={handleSubmit}>
    //       <div className="input-group">
    //         <label className='labelReg'>Username:</label>
    //         <input className='inputReg' type="text" id='username' onChange={handleChange} required />
    //       </div>
    //       <div className="input-group">
    //         <label className='labelReg'>Password:</label>
    //         <input className='inputReg' type="password" id='password' onChange={handleChange} required />
    //       </div>
    //       <button className='buttonReg' type="submit">Login</button>
    //     </form>
    //   </div>
    // </div>


<>


<div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">

        

        <div className="card card0 border-0">
            <div className="row d-flex">
                <div className="col-lg-6">
                    <div className="card1 pb-5">
                        <div className="row">
                            <img src="img/estracre.png" className="logo" alt=""/>
                        </div>
                        <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                            <img src="https://i.imgur.com/uNGdWHi.png" className="image" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card2 card border-0 px-4 py-5">
                      
                        <div className="row py-4 px-3 mb-4">
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                        <form onSubmit={handleSubmit}>
                        <div className="row px-3">
                            <label className="mb-1"><h6 className="mb-0 text-sm">UserName</h6></label>
                            <input className="mb-4" type="text" id="username" placeholder="Enter a Username"  onChange={handleChange} required/>
                        </div>
                        <div className="row px-3">
                            <label className="mb-1"><h6 className="mb-0 text-sm">Password</h6></label>
                            <input type="password" id="password" placeholder="Enter password" onChange={handleChange} required/>
                        </div>
                        {/* <div className="row px-3 mb-4">
                        <Link to="/login" className="ml-auto mb-0 text-sm">Forgot Password?</Link>
                        </div> */}
                        <br />
                        <div className="row mb-3 px-3">
                        <button type="submit" className="btn btn-blue text-center" >Login</button>
                        </div>
                        <div className="row mb-4 px-3">
                        <small className="font-weight-bold">Don't have an account? <Link to="/register" className="text-danger ">Register</Link></small>
                        </div>
                        </form>
                        <div className="row px-3 mb-4">
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                       
                    </div>
                </div>
            </div>

            <div className="bg-blue py-3">
                <div className="row px-4 ">
                    <small className="ml-4 ml-sm-5 mb-2">Copyright &copy; 2023. All rights reserved.</small>
                </div>
            </div>
        </div>
    </div>


</>







  );
};

export default Login;
