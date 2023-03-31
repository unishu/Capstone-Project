import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import Navbar from "./components/Navbar"
import Layout from "./components/Layout"
import {Login} from "./components/screens/loginScreen/Login"
import {Register} from './components/screens/registerScreen/Register'
import Home from "./components/screens/Home"
import Dashboard from "./components/screens/Dashboard"
import {NewPet} from "./components/pets/NewPet"
import PrivateComponent from './components/PrivateComponent';
import MyPets from './components/pets/MyPets';
import UpdatePet from './components/pets/UpdatePet';
import PetRecord from './components/pets/PetRecord';
import PetRecords from './components/pets/PetRecords'
import { NewRecord } from './components/pets/NewRecord';
import {UpdateRecord} from './components/pets/UpdateRecord'
import ProfileScreen from './components/screens/profileScreen/ProfileScreen';
import Calendar from './components/calendar/Calendar';
import AboutUs from './components/screens/AboutUs';
import ContactUs from './components/screens/ContactUs';
import  Tasks from './components/taskApp/Tasks'
import TaskApp from './components/taskApp/TaskApp';
import Modal from 'react-modal';
import Page404 from './components/screens/Page404'


Modal.setAppElement('#root')


function App() {

  return (
    <div className="App">
     
      <BrowserRouter> 
        <Navbar />  
        <Layout>       
        <Routes>
          <Route element ={<PrivateComponent />}> 
            <Route path='/dashboard' element={<Dashboard />} />  
            <Route path ='/edit-profile' element={<ProfileScreen />} />
            <Route path='/mypets' element={<MyPets />} /> 
            <Route path='/update/:petid' element={<UpdatePet />} />  
            <Route path='/newpet' element={<NewPet />} /> 
            <Route path='/petrecord/:recordId' element={<PetRecord />} /> 
            <Route path='/petrecords' element={<PetRecords />} /> 
            <Route path='/petrecord/update/:recordId' element={<UpdateRecord />} /> 
            <Route path='/petrecord/new-record/:petid' element={<NewRecord />} /> 
            <Route exact path="/tasks" element={<TaskApp />} />
            <Route path='/calendar' element={<Calendar />} /> 
          </Route>
            <Route exact path="/" element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact-us' element={<ContactUs />} /> 
            <Route path='/hero404' element={<Page404 />} /> 
          </Routes>
      </Layout>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

     