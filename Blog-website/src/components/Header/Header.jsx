import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import LogoutBtn from "./LogoutBtn";

export default function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const [mobileNav, setMobileNav] = useState(false);

  const handleNavToggle = () => {
    setMobileNav(!mobileNav);
  };


  const navItems = [
    { 
      name: "Home",
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="shadow w-full fixed z-10 top-0 bg-white">
      <nav className="container mx-auto px-4 lg:px-6 py-2.5 flex items-center justify-between">
        <Link to="/" className="text-black text-2xl font-bold DMsans">
          Blog <span className="text-purple-600 font-bold DMsans">Website</span>
        </Link>

        <div className="lg:hidden">
          {mobileNav ? (
            <RiCloseLine
              className="text-gray-600 mr-4 cursor-pointer text-3xl"
              onClick={handleNavToggle}
            />
          ) : (
            <RiMenu3Line
              className="text-gray-600 mr-4 cursor-pointer text-3xl"
              onClick={handleNavToggle}
            />
          )}
        </div>

        <ul className={`lg:flex lg:items-center space-y-4 lg:space-y-0 ${mobileNav ? 'block' : 'hidden'} lg:block lg:space-x-8`}>
          {navItems.map((item) =>
            item.active ? (
              <li key={item.name}>
                <Link
                  to={item.slug}
                  className="block py-2 px-4 rounded-md text-gray-700 hover:text-purple-600 focus:outline-none focus:bg-gray-100"
                  onClick={() => setMobileNav(false)}
                >
                  {item.name}
                </Link>
              </li>
            ) : null
          )}
          {authStatus && (
            <li>
              <LogoutBtn />
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
