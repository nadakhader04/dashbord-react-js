import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashbord from './pages/Dashbord/index.js';
import Header from './components/Header/index.js';
import Sidbar from './components/Sidbar/index.js';
import { createContext, useEffect, useState } from 'react';
import Login from './pages/Login/index.js';
import SignUp from './pages/SignUp/index.js';
import Products from './pages/Products/index.js';
import ProductDetails from './pages/ProductDetails/index.js';
import Messenger from './pages/Messenger/index.js';

const MyContext = createContext();

function App() {


  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isHideSidebarAndHeader, setIsHideSidebarAndHeader] = useState(false);
  const [themeMode, setThemeMode] = useState(true);
  // const [isUsername, setIsUsername] = useState(false);
  const [isMessenger, setIsMessenger] = useState(false);

  useEffect(() => {
    if(themeMode){
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('themeMode', 'light');
    }
    else{
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('themeMode', 'dark');
    }
    
  }, [themeMode]);


  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setIsHideSidebarAndHeader,
    themeMode,
    setThemeMode,
    isMessenger,
    setIsMessenger,
    // isUsername,
    // setIsUsername
  };

 

  return (
    <BrowserRouter className='layout'>
      <MyContext.Provider value={values}>

      {
        isHideSidebarAndHeader !== true &&  <Header />
      }
        
  
      <div className='main d-flex'>
        {
          isHideSidebarAndHeader !== true && 
          <div className={`sidebarWrapper ${isToggleSidebar===true ? 'toggle' : ''}`}>
            <Sidbar />
          </div>
        }

        {
          isMessenger !== false &&
          <div className={`MessengerWrapper' ${isToggleSidebar===true ? 'toggle' : ''}`}>
            <Messenger />
          </div>
        }

          <div className={`content ${isHideSidebarAndHeader===true && 'full'} ${isToggleSidebar===true ? 'toggle' : ''}`}>
            <Routes>
              <Route path="/" exact={true} element={<Dashbord />} />
              <Route path="/dashbord" exact={true} element={<Dashbord />} />
              <Route path="/login" exact={true} element={<Login />} />
              <Route path="/signup" exact={true} element={<SignUp />} />
              <Route path="/product/list" exact={true} element={<Products />} />
              <Route path="/product/details" exact={true} element={<ProductDetails />} />

            </Routes>
          </div>
        </div>

      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext};