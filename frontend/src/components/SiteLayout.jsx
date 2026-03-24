import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

function SiteLayout() {
  return (
    <div className="site-shell">
      <Navbar />
      <main className="site-main">
        <Outlet />
      </main>
    </div>
  );
}

export default SiteLayout;
