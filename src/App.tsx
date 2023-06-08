import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import Header from './components/Header';
import HomePage from './pages/home/HomePage';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import DishDetails from './pages/DishDetails';
import AddDishPage from './pages/AddDishPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useMemo, useState } from 'react';
import { IconButton } from '@mui/material';

if (process.env.NODE_ENV === 'development') {
    console.log('your app is running in development mode.');
}

// const darkTheme = createTheme({
//     palette: {
//         mode: 'dark',
//     },
// });

function App() {
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    function handleClick() {
        const toggleMode = mode === 'dark' ? 'light' : 'dark';
        setMode(toggleMode);
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />

            <IconButton
                color="info"
                onClick={handleClick}
            >
                <i className="bi bi-brightness-low-fill" />
            </IconButton>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="details" element={<DishDetails />} />
                <Route path="add-dish" element={<AddDishPage />} />
            </Routes>

        </ThemeProvider>
    );
}

export default App;
