import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/404';
import Support from './pages/Support';
import MainApp from './pages/MainApp';
import "./autoload";
const App = (): JSX.Element => {
  return (
    <React.Fragment>
      <section className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="app" element={<MainApp />} />
            <Route path="app/support" element={<Support />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </section>
    </React.Fragment>
  );
};
export default App;
