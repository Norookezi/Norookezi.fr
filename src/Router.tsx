import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ComingSoon } from './pages/ComingSoon';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={ComingSoon} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

