import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutPage, HomePage, ProjectsPage } from '../pages';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/projects' element={<ProjectsPage />} />
                <Route path='/about' element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
    );
};
