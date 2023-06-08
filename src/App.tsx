import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header';
import HomePage from './pages/home/HomePage';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import DishDetails from './pages/DishDetails';
import AddDishPage from './pages/AddDishPage';

if (process.env.NODE_ENV === 'development') {
    console.log('your app is running in development mode.');
}

function App() {
    return (
        <>
            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="details" element={<DishDetails />} />
                <Route path="add-dish" element={<AddDishPage />} />
            </Routes>
        </>
    );
}

export default App;
