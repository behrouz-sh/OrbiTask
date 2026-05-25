import { Header, Footer } from 'components';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='my-16 space-y-16'>{children}</main>
      <Footer />
    </>
  );
}
