import { Header, Footer } from 'components';

export default function Layout({ children }) {
  return (
    <>
      <Header them='light' />
      <main className='space-y-22'>{children}</main>
      <Footer />
    </>
  );
}
