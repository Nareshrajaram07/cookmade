// App.js
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Recipe from './Components/Recipe';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import Myrecipe from './Components/Myrecipe';
import RecipeId from './Components/RecipeId';
import Category from './Components/Category';
import Search from './Components/Search';
import Trend from './Components/Trend';
import Signup from './Components/Signup';
import Login from './Components/Login';
import { AuthProvider } from './Components/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="App">
          <Navbar />
          <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Recipe" element={<Recipe />} />
          <Route path="/Trend" element={<Trend />}/>
          <Route path='/:idMeal' element={ <RecipeId />} />
          <Route path='/category/:name' element={ <Category />} />
          <Route path='/search/:searchTerm' element={ <Search/>} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Myrecipe" element={<Myrecipe />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          </Routes>
          <ToastContainer />
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
