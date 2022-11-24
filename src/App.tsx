import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home/Home';
import Page2 from './pages/Page2';


function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/page2"
                    element={<Page2 />}
                />
            </Routes>
        </>
    );
}

export default App;
