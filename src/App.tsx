// Library
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// CSS
import './css/App.css';

// Component
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
