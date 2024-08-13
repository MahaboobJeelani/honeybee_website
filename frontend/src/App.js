import '../src/App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import Subroutes from './Components/Subroutes';

import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "./Components/Register";
import Rolepage from "./Components/Rolepage";
import Userregister from "./Components/Userregister";
import Main from "./Components/Main";
import Adminlogin from "./Components/Adminlogin";
import Userlogin from './Components/Userlogin'
import Errorpage from './Components/Errorpage';
import { useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import AuthContext from './Context/AuthContext';
import AdminSubroutes from './Pages/AdminSubroutes';
import store from './Store/store'
import { Provider } from 'react-redux'

const App = () => {
  let navigate = useNavigate();

  const accessToken = localStorage.getItem('token')

  useEffect(() => {
    const expiretime = () => {

      try {
        if (accessToken) {
          const jwtDecodeToken = jwtDecode(accessToken)
          const expireToken = jwtDecodeToken.exp * 1000
          const iatToken = Date.now();

          if (expireToken < iatToken) {
            localStorage.removeItem('token')
            navigate('/')
          }
          else {
            setTimeout(() => {
              localStorage.removeItem('token')
              navigate('/')
            }, expireToken - iatToken)
          }
        }
      }

      catch (error) {
        console.log(error.message);
        localStorage.removeItem('token')
        navigate('/')
      }
    }
    expiretime()
  }, [navigate, accessToken])


  return (
    <div className="apppage">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/role" element={<Rolepage />} />
          <Route path="/adminregister" element={<Register />} />
          <Route path="/userregister" element={<Userregister />} />
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="/userlogin" element={<Userlogin />} />
          <Route path='*' element={<Errorpage />} />
          <Route path='/honey/*' element={<Subroutes />} />

          <Route path='/admin/*' element={<AuthContext Child={AdminSubroutes} />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;



