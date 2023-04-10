import {Route, Routes} from 'react-router-dom';
import LocationPage from './pages/LocationPage';
import MainPage from './pages/MainPage';
import OptionsPage from './pages/OptionsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/location" element={<LocationPage />} />
      <Route path="/options" element={<OptionsPage />} />
    </Routes>
  );
}

export default App;
