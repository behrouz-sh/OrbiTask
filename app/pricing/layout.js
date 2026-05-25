import Header from "@/app/_components/landing-page/Header";
import Footer from "@/app/_components/landing-page/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="space-y-16 my-16">{children}</main>
      <Footer />
    </>
  );
}
