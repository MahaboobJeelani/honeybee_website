import '../src/App.css'
import { Route, Routes } from "react-router-dom";
import Register from "./Components/Register";
import Rolepage from "./Components/Rolepage";
import Userregister from "./Components/Userregister";
import Main from "./Components/Main";
import Adminlogin from "./Components/Adminlogin";
import Userlogin from './Components/Userlogin'
import Errorpage from './Components/Errorpage';

import 'bootstrap/dist/css/bootstrap.min.css'
import Subroutes from './Components/Subroutes';

function App() {
  return (
    <div className="apppage">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/role" element={<Rolepage />} />
        <Route path="/adminregister" element={<Register />} />
        <Route path="/userregister" element={<Userregister />} />
        <Route path="/adminlogin" element={<Adminlogin />} />
        <Route path="/userlogin" element={<Userlogin />} />
        <Route path='*' element={<Errorpage />} />
        <Route path='/honey/*' element={<Subroutes />} />
      </Routes>
    </div>
  );
}

export default App;



