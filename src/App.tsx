// Library
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// CSS
import './css/App.css';

// Component
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Page
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import CalendarPage from "./pages/Calendar";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/pricing" element={<Pricing />}></Route>
                <Route path="/calendar" element={<CalendarPage />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
