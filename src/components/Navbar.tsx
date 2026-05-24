import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Container } from './Container';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Formula', href: '/formula' },
    { name: 'Shop', href: '/shop' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Find Your Source', href: '/locations' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-neutral-950/80 backdrop-blur-xl shadow-2xl shadow-orange-950/20" : "bg-neutral-950/60 backdrop-blur-xl"
    }`}>
        <Container className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl md:text-2xl font-black italic tracking-tighter text-primary font-headline">
            REX VELOCITY
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  to={link.href}
                  className={`font-label transition-all duration-300 hover:scale-105 ${
                    location.pathname === link.href 
                      ? "text-primary font-bold border-b-2 border-primary pb-1" 
                      : "text-neutral-400 font-medium hover:text-primary/70"
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link 
              to="/cart"
              className="relative p-2 text-white hover:text-primary transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </Container>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-900 border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-xl font-headline tracking-tight ${
                    location.pathname === link.href ? "text-primary transition-colors" : "text-neutral-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
