
/*
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
*/
import React from 'react'; 
 
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Acceuil from './pages/Acceuil/Acceuil';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ListServices from './pages/ListServices';
import FAQ from './pages/FAQ';
import Inscription from './pages/Inscription/Inscription';
import RegisterClient from './pages/Inscription/Register-client/RegisterClient'
import RegisterWorker from './pages/Inscription/Register-worker/RegisterWorker'
import Login from './pages/Login/Login';
import AboutUs from './pages/AboutUs';
import ErrorPage from './pages/ErrorPage';
import Backendtest from './pages/Backendtest';
import ValidationPage from './pages/ValidationPage';


 

function App() {
  return (
    <div className="App">
      <Router>

        <header className="App-header">
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route path='/' element={<Acceuil />} />
            <Route path='/services' element={<ListServices />} />
            <Route path='/services/:categorie' element={<ListServices />} />
            <Route path='/FAQ' element={<FAQ />} />
            <Route path='/inscription' element={<Inscription />} />
            <Route path='/register-worker' element={<RegisterWorker/>} />
            <Route path='/register-client' element={<RegisterClient />} />
            <Route path='/connection' element={<Login />} />
            <Route path='/about us' element={<AboutUs />} />
            <Route path='*' element={<ErrorPage />} />
            <Route path='/backendtest' element={<Backendtest />} />
            <Route path='/ValidationPage' element={<ValidationPage />} />
          </Routes>
        </main>

        <footer className='App-footer'>
          <Footer />
        </footer>

      </Router>

    </div>
  );
 
}

export default App;
