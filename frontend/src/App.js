import React from "react";

import "./App.css";
import MyProSidebar from "./Components/Sidebar/MyProSidebar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Components/MainPage/Dashboard";
import TeamsPage from "./Components/MainPage/Team";
import Tasks from "./Components/UserTask/Tasks";
import Tournaments from "./Components/MainPage/Tournaments";
import Profile from "./Components/MainPage/Profile";
import Login from "./Components/MainPage/Login"; 
import Signup from "./Components/MainPage/Signup"; 
import Code from "./Components/UserTask/Code";
import QuizPage from "./Components/UserTask/Quiz";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from "./Components/MainPage/Admindash";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import ResetPassword from "./Components/ForgotPassword/ResetPassword";
import VideoPage from "./Components/UserTask/Tutorials";
import Question from "./Components/Quizzes/question";
import CodeEditor from "./Components/Code-Editor/Editor";
import Navbar  from "./Components/Code-Editor/Navbar";
import CourseDetail from "./Components/Overview";

function App() {
  

  return (
    <div className="App">
      {/* Render MyProSidebar */}
      <Routes>
        <Route path="/userdashboard" element={<MyProSidebar />} />
        <Route path="/tasks" element={<MyProSidebar />} />
        <Route path="/tournaments" element={<MyProSidebar />} />
        <Route path="/team" element={<MyProSidebar />} /> 
        <Route path="/profile" element={<MyProSidebar />} />
        <Route path="/code" element={<MyProSidebar />} />
        <Route path="/quizpage" element={<MyProSidebar />} />
        <Route path="/quiz/:quizName" element={<MyProSidebar />} /> 
        <Route path="/tutorials" element={<MyProSidebar />} />
        <Route path= "/overview" element={<MyProSidebar />} />
      </Routes>

      {/* Render Sidebar in AdminDashboard */}
      <Routes>
        <Route path="/admindashboard" element={<Sidebar />} />
        
      </Routes>

      {/* Main content routes */}
      <Routes>
        <Route path="/userdashboard" element={<Dashboard />} />
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/team" element={<TeamsPage />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/code" element={<Code />} />
        <Route path="/quizpage" element={<QuizPage />} />
        <Route path="/tutorials" element={<VideoPage />} />
        <Route path="/quiz/:quizName" element={<Question />} />
        <Route path="/overview" element={<CourseDetail />} />

        {/* Non-sidebar routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />  
        <Route path="/resetpassword/:resetToken" element={<ResetPassword/>}/>
        <Route path="/editor" element={<CodeEditor />} />
        <Route path="/nav" element={<Navbar />} />
      </Routes>

      {/* Render Footer on all pages */}
      
    </div>
  );
}

export default App;
