import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FullLayout from './layouts/FullLayout';
import SignUpForm1 from './pages/SignUpForm1';
import SignUpForm2 from './pages/SignUpForm2';
import LoginForm from './pages/LoginForm';
import MainForm from './pages/MainForm';
import { SignUpProvider } from './context/SignUpContext';
import { LoginProvider} from './context/LoginContext';
function App() {
  return (

<SignUpProvider><LoginProvider>
  <Router>
    <FullLayout>
      <Routes>
        <Route path="/" element={<MainForm />} />
        <Route path="/signup1" element={<SignUpForm1 />} />
        <Route path="/signup2" element={<SignUpForm2 />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </FullLayout>
  </Router>
</LoginProvider></SignUpProvider>


  );
}

export default App;