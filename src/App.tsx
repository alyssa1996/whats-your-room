import {Route, Routes} from 'react-router-dom';
import LocationPage from './pages/LocationPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/location" element={<LocationPage />} />
    </Routes>
  );
}

export default App;
