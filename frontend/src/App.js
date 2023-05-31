import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


import Home from './pages/Home';
import About from './pages/about';
import Pagent from './pages/p_agent';
import Plist from './pages/p_list';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';



import Adminabout from './Admin/adminabout';
import Admincontact from './Admin/admincontact';
import Adminhome from './Admin/adminhome';
import Adminpagent from './Admin/adminp_agent';
import Adminplist from './Admin/adminp_list';
import Adminagentdetail from './Admin/Adminagentdetail';
import Update from './CRUD/Update';
import Dashboard from './CRUD/dashboard';
import AddUser from './CRUD/AddUser';




import Agent from './Agent/Agent';
import Agenthome from "./Agent/agenthome";
import Agentabout from "./Agent/agentabout";
import Agentcontact from "./Agent/agentcontact";
import Agentpagent from "./Agent/agentp_agent";
import Checkappoint from "./Agent/checkappoint";
import AddCategory from './Category/AddCategory';
import AddProperty from './pages/AddProperty';
import AgentDetails from './Agent/agentdetails';







import Singlepage from './pages/Singlepage';
import Navbar from './Navbar';
import ViewProperty from './pages/ViewProperty';
import Admin from './Admin/Admin';
import BookAppointment from './pages/BookAppointment';
import Pdf from './Pdf';
import MulterAddProp from './pages/MulterAddProp';
import GetAppo from './Agent/GetAppo';
import Detailsagent from './pages/Detailsagent';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Navbar />} />

{/* Guest Pages */}

          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/p_agent' element={<Pagent />} />
          <Route path='/p_list' element={<Plist />} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/detailagent/:id' element={<Detailsagent />} />



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



          
          
{/* User Pages */}
          
          <Route path='/single/:id' element={<Singlepage />} />







          <Route path='/viewproperty' element={<ViewProperty/>} />
          <Route path='/bookappo/:id' element={<BookAppointment/>} />
          <Route path='/admin' element={<Admin/>} />
          <Route path='/pdf' element={<Pdf/>} />



          <Route path='/multer' element={<MulterAddProp/>} />

          <Route path='/getappo' element={<GetAppo/>} />

          
        </Routes>
      </Router>
    </div>
  );

}
export default App
