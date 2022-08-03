import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Helmet from "react-helmet"

function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="content" style={{"fontFamily": "'IBM Plex Mono', monospace", "overflowX": "hidden"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/korea" element={<Home />} />
          <Route path="/baltimore" element={<Home />} />
          <Route path="/friends" element={<Home />} />
          <Route path="/607" element={<Home />} />
          <Route path="/me" element={<Home />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
