import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


import Home from './pages/Home';
import About from './pages/about';
import Pagent from './pages/p_agent';
import Plist from './pages/p_list';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import Detailsagent from './pages/Detailsagent';
import Singlepage from './pages/Singlepage';





import Adminabout from './Admin/adminabout';
import Admincontact from './Admin/admincontact';
import Adminhome from './Admin/adminhome';
import Adminpagent from './Admin/adminp_agent';
import Adminplist from './Admin/adminp_list';
import Adminagentdetail from './Admin/Adminagentdetail';
import Update from './CRUD/Update';
import Dashboard from './CRUD/dashboard';
import AddUser from './CRUD/AddUser';
import AdminSingle from './Admin/AdminSingle';
import AdminAddProp from './Admin/AdminAddProp';
import AppointementContext from './context/AppointementContext';
import Adminviewappo from './Admin/Adminviewappo';
import AdminSingleAppo from './Admin/AdminSingleAppo';
import AdminViewMsg from './Admin/AdminViewMsg';




import Agent from './Agent/Agent';
import Agenthome from "./Agent/agenthome";
import Agentabout from "./Agent/agentabout";
import Agentcontact from "./Agent/agentcontact";
import Agentpagent from "./Agent/agentp_agent";
import Checkappoint from "./Agent/checkappoint";
import AddCategory from './Category/AddCategory';
import AddProperty from './Agent/AddProperty';
import AgentDetails from './Agent/agentdetails';
import AgentPropDetails from './Agent/AgentPropDetails';






import Userhome from "./User/userhome";
import Userabout from "./User/userabout";
import Usercontact from "./User/usercontact";
import Userpagent from "./User/userp_agent";
import Userplist from "./User/userp_list";
import UserSingle from './User/UserSingle';
import Useragentdetail from './User/Useragentdetail';

// import AppointmentPage from "./userpages/appointmentPage";






// import Navbar from './Navbar';
// import ViewProperty from './pages/ViewProperty';
// import Admin from './Admin/Admin';
// import BookAppointment from './pages/BookAppointment';
import Pdf from './Pdf';
import MulterAddProp from './pages/MulterAddProp';
// import GetAppo from './Agent/GetAppo';




function App() {
  return (
    <AppointementContext>
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path='/' element={<Navbar />} /> */}

{/* Guest Pages */}

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/p_agent' element={<Pagent />} />
          <Route path='/p_list' element={<Plist />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/detailagent/:id' element={<Detailsagent />} />
          <Route path='/single/:id' element={<Singlepage />} />



{/* Admin Pages */}

          <Route path='/adminhome' element={<Adminhome />} />
          <Route path='/adminabout' element={<Adminabout />} />
          <Route path='/adminp_agent' element={<Adminpagent />} />
          <Route path='/adminp_list' element={<Adminplist />} />
          <Route path='/admincontact' element={<Admincontact />} />
          <Route path='/update/:id' element={<Update/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/adduser' element={<AddUser/>} />
          <Route path='/adminagentdetail/:id' element={<Adminagentdetail/>} />
          <Route path='/adminsingle/:id' element={<AdminSingle/>} />
          <Route path='/adminaddprop' element={<AdminAddProp/>} />
          <Route path='/adminviewappo' element={<Adminviewappo/>} />
          <Route path='/adminsingleappo' element={<AdminSingleAppo/>} />
          <Route path='/adminViewMsg' element={<AdminViewMsg/>} />



{/* Agent Pages */}

          <Route path='/agentp_list' element={<Agent/>} />
          <Route path='/addproperty' element={<AddProperty/>} />
          <Route path='/addcat' element={<AddCategory/>} />
          <Route path="/agenthome" element={<Agenthome/>}/>
          <Route path="/agentabout" element={<Agentabout/>}/>
          <Route path="/agentcontact" element={<Agentcontact/>}/>
          <Route path="/agentp_agent" element={<Agentpagent/>}/>
          <Route path="/check" element={<Checkappoint/>}/>
          <Route path="/agentdetail/:id" element={<AgentDetails/>}/>
          <Route path="/agentdetail/:id" element={<Agent/>}/>
          <Route path="/agentpropdetail/:id" element={<AgentPropDetails/>}/>


          
          
{/* User Pages */}
          
          
          <Route path="/userhome" element={<Userhome/>}/>
          <Route path="/userabout" element={<Userabout/>}/>
          <Route path="/usercontact" element={<Usercontact/>}/>
          <Route path="/userp_agent" element={<Userpagent/>}/>
          <Route path="/userp_list" element={<Userplist/>}/> 
          <Route path="/usersingle/:id" element={<UserSingle/>}/> 
          <Route path="/useragentdetail/:id" element={<Useragentdetail/>}/> 









          <Route path='/pdf' element={<Pdf/>} />
          
          <Route path='/multer' element={<MulterAddProp/>} />


          {/* <Route path='/viewproperty' element={<ViewProperty/>} /> */}
          {/* <Route path='/bookappo/:id' element={<BookAppointment/>} /> */}
          {/* <Route path='/admin' element={<Admin/>} /> */}
          {/* <Route path='/getappo' element={<GetAppo/>} /> */}

          
        </Routes>
      </Router>
    </div>
    </AppointementContext>
  );

}
export default App
