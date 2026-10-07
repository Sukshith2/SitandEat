import './Navbar.css';

const Navbar = () => {
    const NavbarLink =[
    { label: 'Home', href: '#home' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
    ];
  return (
    <header className='navbar'>
        <div className="navbar_container">
            <a href="#home" className="navbar__brand" aria-label="Feastify home">
            <svg className="navbar__logo" viewBox="0 0 48 48" fill="none" aria-hidden="true">
            <path d="M15 25C9 25 6 20 8 15C9 11 13 9 17 10C18 4 23 2 27 5C31 7 32 11 31 14C37 11 42 16 40 22C39 25 36 27 32 27V35H15V25Z" stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 27V35H32V27M20 35V42H28V35"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
           <span className="navbar__brand-text">
            <span className="navbar__brand-name">Feastify</span>
            <span className="navbar__brand-caption">CATERING SERVICES</span>
          </span>
        </a>

        <nav className='navbar_links' aria-label="Main navigation">
        {
            NavbarLink.map((link)=>(
                <a key={link.label} href={link.href} className={`navbar_link ${link.label === 'Menu' ? 'navbar_link--active' : '' }` } aria-current={link.label === 'Menu' ? 'page' : undefined}>  {link.label} </a>               
            ))
        }
        </nav>

         <a href="#contact" className="navbar__cta">
          <span>Book for Event</span>
          <span className="navbar__cta-arrow" aria-hidden="true">
            →
          </span>
        </a>

        </div>

    </header>
  )
}

export default Navbar