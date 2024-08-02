import logo from "./logo.svg";
import "./App.css";
import { OktoProvider, BuildType } from "okto-sdk-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MainHeader from "./components/main-header";
import SimpleHomePage from "./pages/SimpleHomepage";
import { Toaster } from 'react-hot-toast';

const OKTO_CLIENT_API_KEY = process.env.REACT_APP_OKTO_CLIENT_API_KEY;

function App() {
  return (
    <div>
      <Router>
        <OktoProvider
          apiKey={OKTO_CLIENT_API_KEY}
          buildType={BuildType.SANDBOX}
        >
          <MainHeader />
          <Toaster />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<SimpleHomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </OktoProvider>
      </Router>
    </div>
  );
}

export default App;
