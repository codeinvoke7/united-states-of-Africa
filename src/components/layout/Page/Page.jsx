import { Outlet } from 'react-router-dom';
import { Footer, Header, NavBar } from 'components/layout';
import { PageHeaderColorContextProvider } from 'components/context';

export default function Page() {
  return (
    <PageHeaderColorContextProvider>
      <Header />

      <NavBar />
      <main className="min-h-[50vh]">
        <Outlet />
      </main>

      <Footer />
    </PageHeaderColorContextProvider>
  );
}
