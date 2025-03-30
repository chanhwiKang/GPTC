import SideNav from '../layouts/SideNav';
import TopNav from '../layouts/TopNav';
import RegisterForm1 from '../components/RegisterForm1';
import Footer from '../layouts/Footer';

function RegisterPage() {
  return (
    <div className="flex h-screen">
      <SideNav className="" />

      {/* 메인 컨텐츠 영역 */}
      <div className="w-[100%]">
        <TopNav />

        <div className="min-h-screen flex items-center justify-center">
          <RegisterForm1 />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default RegisterPage;
