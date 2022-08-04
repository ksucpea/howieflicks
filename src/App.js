import { Route, Routes } from 'react-router-dom';
import Base from './pages/Base';
import Helmet from "react-helmet"
import Home from './pages/Home';

function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/korea" element={<Base />} />
          <Route path="/baltimore" element={<Base />} />
          <Route path="/friends" element={<Base />} />
          <Route path="/607" element={<Base />} />
          <Route path="/scary" element={<Base />} />
          <Route path="/film" element={<Base />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
