import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutPage, HomePage, ProjectsPage } from '../pages';
import { Header } from '../components/header';

export const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/projects' element={<ProjectsPage />} />
                <Route path='/about' element={<AboutPage />} />
                {/* <Route path="*" element={<ErrorsPage />} /> */}
            </Routes>
        </BrowserRouter>
    );
};
