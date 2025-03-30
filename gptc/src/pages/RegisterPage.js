import SideNav from '../layouts/SideNav';
import TopNav from '../layouts/TopNav';
import FindPasswordForm from '../components/FindPasswordForm';
import Footer from '../layouts/Footer';

function RegisterPage() {
  return (
    <div className="flex h-screen">
      <SideNav />

      {/* 메인 컨텐츠 영역 */}
      <div className="flex flex-col flex-1">
        <TopNav />

        <div className="flex flex-1 items-center justify-center">
          <FindPasswordForm />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default RegisterPage;
