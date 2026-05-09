import Link from "next/link";

import Nav from "./nav";
import NavMobile from "./nav-mobile";

import Button from "ui/button";
import Logo from "ui/logo";

function Header({ them = "dark" }) {
  return (
    <header className="z-50 relative flex justify-between items-center py-4 container">
      <div className="flex items-center gap-x-6 lg:gap-x-12">
        <Link href="/">
          <Logo type="blue" size={32} className={`hidden md:hidden sm:block lg:block ${them === "dark" ? "text-neutral-900" : "text-white"}`} />
          <Logo type="blue" variant="mark" className="sm:hidden lg:hidden md:block size-8" />
        </Link>
        <Nav them={them} />
      </div>
      <div className="hidden md:flex gap-x-2">
        <Button to="/signup" style="outlined" size="lg">
          Sign Up
        </Button>
        <Button to="/login" style="filled" size="lg">
          Login
        </Button>
      </div>
      <NavMobile them={them} />
    </header>
  );
}

export default Header;
