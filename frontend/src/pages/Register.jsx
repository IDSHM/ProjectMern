import React, { useState } from 'react';
import {Link,  useNavigate } from 'react-router-dom';
import './regis_style.css';


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const Register = () => {
  let nav = useNavigate();

  const [isRegistered, setisRegistered] = useState(false);
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
    agentimage:'',
    agentdescription:'',

  });

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  const handleChange = (e) => {
                  
    
    if(document.getElementById('role').value==='agent'){
          document.getElementById('agent').style.display='block';
    }else if(document.getElementById('role').value==='user'){
          document.getElementById('agent').style.display='none';
    }


    setUserDetails(userDetail=>({
        ...userDetail,
        [e.target.id]:e.target.value
    }));
    console.log(userDetail);
  };


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  const handleSubmit = async(event) => {
    const {name, username, email, password, confirmPass, phone, }=userDetail
    event.preventDefault();
    if(password === confirmPass){
      // const user={username, password}
      const result = await fetch('http://localhost:8000/api/register',{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(userDetail)
      })

      console.log(await result.json());

      setisRegistered(!isRegistered);
      alert('Registered Successfully!');
      
      nav('/login')
    }
    else{
      alert(`pass didn't match`)
    }

  };
  
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  return (

    <>
    
    <div className="container register">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away from buying or selling your property!</p>
                        <Link to="/login"><input type="submit" name="" value="Login"/></Link><br/>
                    </div>
                    <div className="col-md-9 register-right">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Registeration</h3>
                                <form onSubmit={handleSubmit}>                                
                                <div className="row register-form">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                        <label className='labelReg'>Name:</label><br/>
                                          <input id='name'className="form-control" placeholder="Name *" type="text" onChange={handleChange} required />
                                        </div>

                                        <div className="form-group">
                                        <label className='labelReg'>UserName:</label><br/>
                                          <input id='username' className="form-control" placeholder="UserName *" type="text" onChange={handleChange} required />
                                        </div>

                                        <div className="form-group">
                                        <label className='labelReg'>Email:</label><br/>
                                          <input id='email' placeholder="Your Email *" className="form-control" type="email" onChange={handleChange} required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                        <label className='labelReg'>Password:</label><br/>
                                          <input id='password' placeholder="Password *" className="form-control" type="password" onChange={handleChange} required />
                                        </div>

                                        <div className="form-group">
                                        <label className='labelReg'>Confirm Password:</label><br/>
                                          <input id='confirmPass' placeholder="Confirm Password *" className='form-control' type="password" onChange={handleChange} required />
                                        </div>

                                        <div className="form-group">
                                            <div className="form-group">
                                            <label className='labelReg'>Phone</label><br/>
                                              <input id='phone' placeholder="Your Phone *" className="form-control" type="number" onChange={handleChange} required />
                                        </div>
                                    </div>
                                </div>  
                                <div className="row">
                                    <div className="col-md-6">
                                          <div className="form-group">
                                            <label className='labelReg'>Address</label><br/>
                                            <input id='address'  placeholder="Your Address *" className="form-control" type="text" onChange={handleChange} required />
                                          </div>
                                    </div>
                                    <div className="col-md-6">
                                          <div className="form-group">
                                          <label className='labelReg'>Role</label><br/>
                                            <select className="form-control" id='role' onChange={handleChange}>
                                              <option>Select Role</option>
                                              <option value="agent">Agent</option>
                                              <option value="user">User</option>
                                            </select>
                                          </div>
                                    </div>
                                    <div className="col-md-12">
                                          <div className="form-group" id="agent"  style={{display: 'none'}}>
                                            <label className='labelReg'>Agent UserName</label><br/>
                                            <input id='agentusername' className="form-control" type="text" onChange={handleChange} placeholder="AgentUserName *" />

                                            <label className='labelReg'>Agent Image</label><br/>
                                            <input id='agentimage' className="form-control" type="text" onChange={handleChange} placeholder="Agent Image *" />

                                            <label className='labelReg'>Agent Description</label><br/>
                                            <input id='agentdescription' className="form-control" type="text" onChange={handleChange} placeholder="Agent Description *" />
                                          </div>
                                    </div>
                                  
                                </div>
                                  <input type="submit" className="btnRegister" value="Register"/>
                        
                                  </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

    </div>


    
    
    </>


  );
};

export default Register;


