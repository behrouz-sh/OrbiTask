import Link from "next/link";

import Nav from "./nav";
import NavMobile from "./nav-mobile";

import Button from "../../_ui/button";
import Logo from "../../_ui/logo";

function Header() {
  return (
    <header className="z-50 flex justify-between items-center py-4 container">
      <div className="flex items-center gap-x-6 lg:gap-x-12">
        <Link href="/">
          <Logo type="blue" size={32} className="hidden md:hidden sm:block lg:block" />
          <Logo type="blue" variant="mark" className="sm:hidden lg:hidden md:block size-8" />
        </Link>
        <Nav />
      </div>
      <div className="hidden md:flex gap-x-2">
        <Button to="/signup" style="outlined" size="lg">
          Sign Up
        </Button>
        <Button to="/signup" style="filled" size="lg">
          Login
        </Button>
      </div>
      <NavMobile />
    </header>
  );
}

export default Header;
