import React from 'react';

import HeaderComponent from './components/header';
import Home from './pages/home';
import AboutUs from './pages/about';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AddUser from './pages/add-user';

function App() {
  return (
    <>    

      <BrowserRouter>
        <HeaderComponent />  
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/add-user' element={<AddUser/>} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
