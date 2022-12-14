import { GithubProvider } from './context/GithubContext';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Repos from './pages/Repos';
import Followers from './pages/Followers';
import HomeLayout from './pages/HomeLayout';

export default function App() {
  return (
    <BrowserRouter>
      <GithubProvider>
        <div className='font-source-sans'>
          <div className='relative'>
            <Routes>
              <Route path='/*' element={<HomeLayout />}>
                <Route index element={<Home />} />
                <Route path='repos' element={<Repos />} />
                <Route path='followers' element={<Followers />} />
              </Route>
            </Routes>
          </div>
        </div>
      </GithubProvider>
    </BrowserRouter>
  );
}
