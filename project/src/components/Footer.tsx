import { Phone, Mail, MapPin } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#quote' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-white font-bold text-lg mb-3">Fin's Jet Washing</h3>
            <p className="text-sm leading-relaxed">
              Professional driveway cleaning, patio cleaning and pressure washing across Deganwy, Conwy, Llandudno, Rhos-on-Sea, Colwyn Bay and North Wales.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href="tel:07710584103" className="hover:text-white transition-colors">07710 584103</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>[Your Email Address]</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>Deganwy, Conwy, Llandudno, Rhos-on-Sea, Colwyn Bay &amp; surrounding areas</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Fin's Jet Washing. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
