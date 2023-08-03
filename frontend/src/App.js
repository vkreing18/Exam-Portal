import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/shared/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import Exam from "./components/pages/Exam/Exam";
import Repository from "./components/pages/Repository/Repository";
import Openforum from "./components/pages/Openforum/Openforum";
import Profile from "./components/pages/Profile/Profile";
import QuizStart from "./components/pages/Exam/Quizstart/QuizStart";
import Quiz from "./components/pages/Exam/Quizstart/Quiz";
import Login from "./components/pages/Login/Login";
import Signup from "./components/pages/Signup/Signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="Login" element={<Login />} />
        <Route path="Signup" element={<Signup />} />
        <Route path="Profile" element={<Profile />} />
        <Route exact path="Repository" element={<Repository />} />
        <Route exact path="Openforum" element={<Openforum />} />
        <Route exact path="Exam" element={<Exam />} />
        <Route exact path="QuizStart" element={<QuizStart />} />
        <Route exact path="Quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
