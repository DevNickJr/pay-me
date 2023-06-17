import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home'
import About from './pages/About';


function App() { 

  return (
    <Router>
      <main className="App">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />   
            <Route path="/about" element={<About />} />   
          </Routes>
        </ScrollToTop>
      </main>
    </Router>
  )
}

export default App
