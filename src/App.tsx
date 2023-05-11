import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header';
import HomePage from './pages/home/HomePage';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
            </Routes>
        </>

    );
}

export default App;
