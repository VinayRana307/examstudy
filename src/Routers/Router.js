import { BrowserRouter, Routes, Route } from "react-router-dom";
import WordQuiz from "../Components/MS_Word/MS_Word";
import HomePage from "../Components/Home_Page/HomePage";
import { HashRouter } from 'react-router-dom';
import Translate from '../Components/Translate_Page/Translate'
import App from '../App'
export default function Router() {
  return (
    <HashRouter>
      <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/msword" element={<WordQuiz />} />
            <Route path="/translate" element={<Translate />} />
      </Routes>
      </HashRouter>
  );
}