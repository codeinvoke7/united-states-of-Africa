import { Outlet } from 'react-router-dom';
import { Footer, Header, NavBar } from 'components/layout';

export default function Page() {
  return (
    <>
      <Header />

      <NavBar />

      <div className="min-h-[80dvh]">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
