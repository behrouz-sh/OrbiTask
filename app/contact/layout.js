import Header from "components/layouts/Header";
import Footer from "components/layouts/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="space-y-16 my-16">{children}</main>
      <Footer />
    </>
  );
}
