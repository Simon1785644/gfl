import { Component } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Guide from "./pages/Guide";
import FireSupport from "./pages/FireSup";
import Walkthrough from "./pages/Walkthrough";
import RankingMap from "./pages/RankingMap";
import NoPage from "./pages/NoPage";
import reportWebVitals from './reportWebVitals';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="guide" element={<Guide />} />
            <Route path="fire support" element={<FireSupport />} />
            <Route path="walkthrough" element={<Walkthrough />} />
            <Route path="ranking map" element={<RankingMap />} />          
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

const container = document.getElementById('react-gfl');
const root = ReactDOM.createRoot(container);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();