import { useState, useEffect } from 'react';
import { Menu, X, Droplets } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#quote' },
];

export default function Navbar({ onGetQuote }: { onGetQuote: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Droplets className={`w-6 h-6 ${scrolled ? 'text-cyan-500' : 'text-cyan-400'}`} />
          <span className={`font-bold text-lg ${scrolled ? 'text-slate-900' : 'text-white'}`}>
            Fin's Jet Washing
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? 'text-slate-600 hover:text-slate-900'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onGetQuote}
            className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 hover:shadow-md"
          >
            Get a Free Quote
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <X className={`w-6 h-6 ${scrolled ? 'text-slate-900' : 'text-white'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? 'text-slate-900' : 'text-white'}`} />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-slate-700 hover:text-cyan-600 font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { onGetQuote(); setMenuOpen(false); }}
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold py-3 rounded-lg text-sm transition-colors mt-2"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
