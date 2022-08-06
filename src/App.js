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
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Helmet>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/architecture" element={<Base />} />
          <Route path="/film" element={<Base />} />
          <Route path="/portraits" element={<Base />} />
          <Route path="/still" element={<Base />} />
          <Route path="/street" element={<Base />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
