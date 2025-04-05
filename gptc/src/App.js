import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FullLayout from './layouts/FullLayout';
import SignUpForm1 from './pages/SignUpForm1';
import SignUpForm2 from './pages/SignUpForm2';
import LoginForm from './pages/LoginForm';
import MainForm from './pages/MainForm';
import FindPwForm from './pages/FindPwForm_T';
import { SignUpProvider } from './context/SignUpContext';
import { LoginProvider } from './context/LoginContext';
function App() {
  return (
    <SignUpProvider>
      <LoginProvider>
        <Router>
          <FullLayout>
            <Routes>
              <Route path="/" element={<MainForm />} />
              <Route path="/signup" element={<SignUpForm1 />} />
              <Route path="/email-verification" element={<SignUpForm2 />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/find-pw" element={<FindPwForm />} />
            </Routes>
          </FullLayout>
        </Router>
      </LoginProvider>
    </SignUpProvider>
  );
}

export default App;
