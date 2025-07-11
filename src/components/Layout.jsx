import { Outlet, Link } from 'react-router-dom';
import Nav from "./Nav.jsx"
import Footer from "./Footer.jsx"

export default function Layout() {
  return (
    <div>
	<Nav />
	  <Outlet />
  <Footer />
    </div>
  );
}

