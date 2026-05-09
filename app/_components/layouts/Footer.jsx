import Logo from "ui/logo";
import Button from "ui/button";

function Footer() {
  return (
    <footer className="space-y-20 mt-16">
      <div className="flex lg:flex-row flex-col justify-between gap-y-6 md:text-left text-center container">
        <div className="flex lg:flex-col flex-col-reverse justify-between items-center gap-y-10 lg:gap-0 lg:w-100 xl:max-w-133.75 h-auto">
          <div className="space-y-6">
            <Logo className="mx-auto md:mx-0 h-10 md:h-8" type="gradient-black" />
            <p className="text-neutral-700 text-sm/6">Orbitask was built for the way we work today. We create smarter, more connected workspaces around the world.</p>
          </div>
          <form action="#" className="hidden sm:flex gap-x-1.5 h-fit">
            <input type="email" className="px-2.5 py-0.5 border border-neutral-400 rounded-lg text-sm/6" placeholder="Enter Your Email" name="" id="" />
            <Button style="filled" size="sm">
              Subscribe Now
            </Button>
          </form>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-x-16 gap-y-8 lg:gap-x-6 xl:gap-x-12">
          <div className="space-y-6">
            <span className="block font-semibold text-xl/9">Product</span>
            <ul className="space-y-6 text-neutral-700 text-sm/4">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">For Teams</a>
              </li>
              <li>
                <a href="#">Learn</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <span className="block font-semibold text-xl/9">Company</span>
            <ul className="space-y-6 text-neutral-700 text-sm/4">
              <li>
                <a href="#">Overview & Updates</a>
              </li>
              <li>
                <a href="#">Guides & Tutorials</a>
              </li>
              <li>
                <a href="#">Overview & Updates</a>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <span className="block font-semibold text-xl/9">Legal</span>
            <ul className="space-y-6 text-neutral-700 text-sm/4">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <span className="block font-semibold text-xl/9">Contact us</span>
            <ul className="space-y-6 text-neutral-700 text-sm/4">
              <li>
                <a href="#">Orbitask@gmail.com</a>
              </li>
              <li>
                <a href="#">+133-394-3439-1435</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-primary-500 pt-12.5">
        <div className="container">
          <div className="flex justify-between items-center gap-x-8 mb-2">
            <Logo className="h-16" type="white" />
            <div className="flex justify-center items-center gap-x-4 md:gap-x-6.5">
              <a href="">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.1006 3.75C19.6326 3.75007 21.239 4.02279 21.25 4.02466V7.48779H19.4751C17.7251 7.48779 17.1753 8.575 17.1753 9.6875V12.3254H21.0876L20.4626 16.4001H17.1753V26.25H12.7747V16.4001H10V12.3254H12.7747V9.22485C12.7747 5.69995 14.8756 3.75 18.1006 3.75Z" fill="white" />
                </svg>
              </a>
              <a href="">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.7998 5.02539C21.2747 5.02539 22.6126 5.63745 23.5376 6.6123C24.7 6.39981 25.7997 5.97506 26.7871 5.40015C26.4121 6.5751 25.5998 7.5623 24.5374 8.1748C25.5624 8.0623 26.5628 7.78838 27.4878 7.40088L27.2168 7.76953C26.57 8.61493 25.7951 9.36977 24.9255 10.0022C24.9372 10.2105 24.9377 10.4304 24.9377 10.6504C24.9377 17.3254 19.7875 25.0132 10.3625 25.0132C7.46255 25.0132 4.7625 24.1875 2.5 22.75C2.9125 22.8 3.31279 22.8135 3.73779 22.8135C6.13768 22.8134 8.33767 22.0125 10.1001 20.6626C7.8501 20.6126 5.9625 19.1628 5.3125 17.1628C5.62481 17.2128 5.94961 17.2373 6.27441 17.2373C6.73676 17.2373 7.19963 17.1752 7.62451 17.0627C5.27476 16.5876 3.51196 14.5626 3.51196 12.1128V12.0505C4.19946 12.4255 4.9877 12.6627 5.8252 12.6877C4.4502 11.7752 3.5376 10.2373 3.5376 8.4873C3.5377 7.55029 3.78739 6.68818 4.23706 5.93848C6.76202 9.00085 10.5499 11.0003 14.7998 11.2253C14.7248 10.8504 14.6753 10.4629 14.6753 10.0754C14.6753 7.288 16.9624 5.02549 19.7998 5.02539Z"
                    fill="white"
                  />
                </svg>
              </a>

              <a href="">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.3478 11.9042C23.6706 12.0685 26.1863 13.5155 26.1866 17.6634L26.1989 17.6756L26.2623 26.2633H21.5248V18.7755C21.5245 16.5263 20.5868 15.725 19.3495 15.725C17.8379 15.8254 16.6881 17.1382 16.7872 18.6498V26.2633H12.0497V12.0506H16.6249V14.1002C17.5622 12.676 19.1746 11.8388 20.8864 11.8883L21.3478 11.9042Z" fill="white" />
                  <path d="M8.79895 26.2499H4.0614V12.0384H8.79895V26.2499Z" fill="white" />
                  <path d="M6.58704 3.74985C8.08648 3.7999 9.27301 5.01304 9.2738 6.51231C9.2488 8.06231 7.98689 9.28726 6.43689 9.27476C4.91237 9.23673 3.71142 7.9625 3.7489 6.43784C3.78689 4.91361 5.06278 3.7129 6.58704 3.74985Z" fill="white" />
                </svg>
              </a>
            </div>
          </div>
          <hr className="text-white" />
          <span className="block mx-auto py-6 text-white text-sm text-center">Non Copyrighted &copy; 2025 Design and upload by Orbitask</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
