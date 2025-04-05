import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FullLayout from './layouts/FullLayout';
import SignUpForm1 from './pages/sign-up/SignUpForm1';
import SignUpForm2 from './pages/sign-up/SignUpForm2';
import LoginForm from './pages/login/LoginForm';
import MainForm from './pages/main-contents/MainForm';
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
            </Routes>
          </FullLayout>
        </Router>
      </LoginProvider>
    </SignUpProvider>
  );
}

export default App;
