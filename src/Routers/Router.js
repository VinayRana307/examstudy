import { BrowserRouter, Routes, Route } from "react-router-dom";
import WordQuiz from "../Components/MS_Word/MS_Word";
import Himachal_GK from "../Components/Himachal/Himachalgk";
import India_GK from "../Components/India_GK/India_gk";
import India_allnotes from "../Components/India_GK/India_allnote";
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
            <Route path="/himachal_gk" element={<Himachal_GK />} />
            <Route path="/india_gk" element={<India_GK />} />
            <Route path="/india_gknotes" element={<India_allnotes />} />
      </Routes>
      </HashRouter>
  );
}