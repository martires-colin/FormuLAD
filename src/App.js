import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// import './App_nonBS.css'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from "./components/Navigation";
import DriverStandings from "./routes/DriverStandings";
import ConstructorStandings from "./routes/ConstructorStandings";
import Home from "./routes/Home";
import Error from "./routes/Error";

const App = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                {/* <Route path="/" element={<App />} /> */}
                <Route path="/" element={<DriverStandings />} />
                <Route path="/driver-standings" element={<DriverStandings />} />
                <Route path="/constructor-standings" element={<ConstructorStandings />} />
                <Route path="/*" element={<Error />} />
            </Routes>
        </Router>
    )
}

export default App;