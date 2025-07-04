import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Book from './pages/Book';
import Wellness from './pages/Wellness';
import './App.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="book" element={<Book />} />
          <Route path="wellness" element={<Wellness />} />
        </Route>
      </Routes>
  );
}

export default App;