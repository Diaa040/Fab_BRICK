import { Link } from "react-router-dom";
import logo from '../assets/image/imgi_3_LOGO FabBRICK off.png'

export default function Navbar() {
  return (
    <nav className="bg-neutral-primary  w-full border-default">
      <div className="max-w-xl flex flex-wrap items-center justify-evenly p-4 ">
        <Link><img src={logo} alt="logo" /></Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth={2}
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="nav-font flex p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
            
            <li>
              <Link to={'/projects'}> PROJECTS</Link>
            </li>
            <li>
              <Link to={'/about-us'}> ABOUT US</Link>
            </li>
            <li>
              <Link to={'/samples'}> SAMPLES</Link>
            </li>
            <li>
              <Link to={'/shop'}> SHOP</Link>
            </li>
            <li>
              <Link to={'/contact'}> CONTACT</Link>
            </li>
            
          </ul> 
        </div>
      </div>
    </nav>
  );
}
