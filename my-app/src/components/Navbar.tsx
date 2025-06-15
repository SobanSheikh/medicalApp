import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // If not on home page, navigate to home page first
    if (currentPath !== '/') {
      window.location.href = '/#contact';
      return;
    }
    
    // If already on home page, just scroll to the contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (path: string) => (e: React.MouseEvent) => {
    if (path === currentPath) {
      e.preventDefault();
      window.scrollTo(0, 0);
    }
  };

  return (
    <nav id='nav' className="bg-[#d9bf9e] rounded-4xl border-amber-300 border w-3/4 z-50 self-center flex justify-center p-3">
      <ul className="flex justify-between font-semibold text-amber-800 w-3/4">
        <li>
          <Link 
            to="/" 
            className={currentPath === '/' ? 'flex font-bold rounded-3xl p-1 px-3 bg-white' : 'p-1 flex'}
            onClick={handleNavClick('/')}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className={currentPath === '/about' ? 'flex font-bold rounded-3xl p-1 px-3 bg-white' : 'p-1 flex'}
            onClick={handleNavClick('/about')}
          >
            About
          </Link>
        </li>
        <li>
          <Link 
            to="/book" 
            className={currentPath === '/book' ? 'flex font-bold rounded-3xl p-1 px-3 bg-white' : 'p-1 flex'}
            onClick={handleNavClick('/book')}
          >
            Book
          </Link>
        </li>
        <li>
          <Link 
            to="/wellness" 
            className={currentPath === '/wellness' ? 'flex font-bold rounded-3xl p-1 px-3 bg-white' : 'p-1 flex'}
            onClick={handleNavClick('/wellness')}
          >
            Wellness
          </Link>
        </li>
        <li>
          <a 
            href="/#contact" 
            onClick={scrollToContact}
            className={currentPath === '/contact' ? 'flex font-bold rounded-3xl p-1 px-3 bg-white' : 'p-1 flex'}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;