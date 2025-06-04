import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Social } from './pages/Social';

export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home} />

                <Route path="/twitch" Component={Social} />
                <Route path="/discord" Component={Social} />
                <Route path="/instagram" Component={Social} />
                <Route path="/bluesky" Component={Social} />
                <Route path="/github" Component={Social} />
                <Route path="/linkedin" Component={Social} />

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

