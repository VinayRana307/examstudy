import { BrowserRouter, Routes, Route } from "react-router-dom";
import WordQuiz from "../Components/MS_Word/MS_Word";
import HomePage from "../Components/Home_Page/HomePage";
import { HashRouter } from 'react-router-dom';
import App from '../App'
export default function Router() {
  return (
    <HashRouter>
      <Routes>
            <Route path="/" element={<App />} >
            <Route path="/home" element={<HomePage />} />
            <Route path="/msword" element={<WordQuiz />} />
            </Route>
      </Routes>
      </HashRouter>
  );
}