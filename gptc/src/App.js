// import LoginForm from './components/LoginForm';
// import RegisterForm1 from './components/RegisterForm1';
// import RegisterForm2 from './components/RegisterForm2';
// import FindPassword from './components/FindPassword';
// import ChangePassword from './components/ChangePassword';
import SideNav from './layouts/SideNav';
import TopNav from './layouts/TopNav';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <div>
      <RegisterPage />
    </div>
  );
}

export default App;

//** 동관 위에꺼 다 주석 처리하고 아래꺼 쓰면됨 **/
//** 기존 파일하고 이름 겹쳐서 뒤에 T붙이는 등 이름 좀 바꿨어 **/
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import RegisterForm from './components/RegisterT';
// import LoginForm from './components/LoginT';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/signup" element={<RegisterForm />} />
//         <Route path="/login" element={<LoginForm />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
