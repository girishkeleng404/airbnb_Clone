

import { Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './assets/components/IndexPage'
import LoginPage from './assets/components/LoginPage'
import Layout from './Layout'
import RegisterPage from './assets/components/RegisterPage'
import axios from 'axios'
import { UserContextProvider } from './UserContex'
import Profilepage from './assets/components/AccountPage'
// import PhotosUploader from './PhotosUploader'
import PlacesPage from './assets/components/PlacesPage'
import PlacesFormPage from './assets/components/PlacesFormPage'
import DetailsPage from './assets/components/DetailsPage'
import BookingPage from './assets/components/BookingPage'

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {

  return (

    <UserContextProvider> 
    <Routes>
      <Route path='/' element={<Layout/>}>
       <Route index element={<IndexPage />} />
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path='/account' element={<Profilepage/>}/> 
      <Route path='/account/places' element={<PlacesPage/>}/> 
      <Route path='/account/places/new' element={<PlacesFormPage/>}/> 
      <Route path='/account/places/:id' element={<PlacesFormPage/>}/>
     <Route path='/details/:id' element={<DetailsPage/>}/>
     <Route path='/account/bookings' element={<BookingPage/>}/>
     <Route path='/account/bookings/:id' element={<BookingPage/>}/>
     
      </Route>
   
    </Routes>
    </UserContextProvider>
  )
}

export default App
