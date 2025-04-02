import SideNav from '../layouts/SideNav';
import TopNav from '../layouts/TopNav';
import Footer from '../layouts/Footer';

function FullLayout({ children }) {
  return (
    <div className="flex h-screen">
      <SideNav />

      {/* 메인 컨텐츠 영역 */}
      <div className="flex flex-col flex-1">
        <TopNav />

        <div className="flex flex-1 items-center justify-center">
          {children}
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default FullLayout;
