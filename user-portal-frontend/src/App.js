import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/loginPage/loginPage';
import StudentHomepage from './components/pages/studentHomepage/studentHomepage';
import TeacherHomepage from './components/pages/teacherHomepage/teacherHomepage';
import StudentRegisterPage from './components/pages/studentRegisterPage/studentRegisterPage';
import TestPage from './components/pages/TakeTest/TestPage';
import ForgotPassword from './components/pages/ForgotPasswordPage/ForgotPassword';
import TestResultViewQuestions from './components/molecues/ResultView/TestResultViewQuestions';
// import TestResultQuestions from './components/molecues/ResultView/TestResultQuestions';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LoginPage/>}/>
        <Route exact path='/homeStudent' element={<StudentHomepage/>}/>
        <Route exact path='/homeTeacher' element={<TeacherHomepage/>}/>
        <Route exact path='/studentRegisterPage' element={<StudentRegisterPage/>}/>
        <Route exact path='/takeTestPage' element={<TestPage/>}/>
        <Route exact path='/ForgotPassword' element={<ForgotPassword/>}/>
        <Route exact path='/Questions' element={<TestResultViewQuestions/>}/>
      </Routes>
    </Router>
  );
}

export default App;
