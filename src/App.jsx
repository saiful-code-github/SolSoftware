import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Mainpage/Components/Home';

function App() {

  return (
    <>
      <Router>
          <Routes>
              <Route path='/' element={<Home/>}/>
          </Routes>
      </Router>  
    </>
  )
}

export default App;
