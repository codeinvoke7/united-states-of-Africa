import { Outlet } from 'react-router-dom';
import { Footer, Header, NavBar } from 'components/layout';

export default function Page() {
  return (
    <>
      <Header />

      <NavBar />

      <main className="min-h-[50vh]">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
