import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const logo= "/images/footer-logo-white.png"
  return (    
    <nav className="navbar navbar-expand-lg navbar-light header-bg" >
      <div className="container">
        <Link href="/" className="navbar-brand">
        <Image src={logo} width={200} height={36} alt='sigLift'/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link text-white"> Home </Link>
            </li>
            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <Link href="/mobile-signal-booster-kits" className="dropdown-item">
                  Mobile Signal Booster Kits
                  </Link>
                </li>
                <li>
                  <Link href="/mobile-network-booster-accessories" className="dropdown-item">
                  Mobile Network Booster Accessories
                  </Link>
                </li>
                
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Company
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                  <Link href="/about-us" className="dropdown-item">  About</Link>
                </li>
                <li>
                  <Link href="/how-a-mobile-signal-booster-works" className="dropdown-item">  How A Mobile Signal Booster Works?</Link>
                </li>
                <li>
                  <Link href="/how-to-install-mobile-signal-booster" className="dropdown-item">  How To Install Mobile Signal Booster</Link>
                </li>
                
              </ul>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link text-white"> Our Locations </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link text-white"> Carriers </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link text-white">
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link text-white">
                Contact
              </Link>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>   
  );
}
