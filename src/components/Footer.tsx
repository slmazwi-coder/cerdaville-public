import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-school-navy text-white pt-12 pb-8 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">

          {/* Col 1 — Logo + Name */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/assets/logo/FB_IMG_1780054238494.jpg"
                alt="Cedarville Public School Logo"
                className="h-12 w-12 shrink-0 rounded-xl border border-white/20 shadow-lg object-contain bg-white"
              />
              <div>
                <h3 className="text-base font-bold leading-tight">Cedarville Public School</h3>
                <p className="text-sm italic mt-0.5" style={{ color: '#0A9396' }}>"Enter to Learn, Leave to Serve"</p>
              </div>
            </div>
          </div>

          {/* Col 2 — Contact */}
          <div>
            <h4 className="text-sm font-bold mb-4 border-b border-white/20 pb-2 uppercase tracking-wide">Contact Us</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="shrink-0 mt-0.5" size={16} />
                <span>No. 7 Mzingisi Location, Cedarville, 4720</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <span>073 200 3457</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:info@cedarvillepublic.co.za" className="hover:text-white">info@cedarvillepublic.co.za</a>
              </li>
            </ul>
          </div>

          {/* Col 3 — School Hours */}
          <div>
            <h4 className="text-sm font-bold mb-4 border-b border-white/20 pb-2 uppercase tracking-wide">School Hours</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li className="flex justify-between gap-4"><span>Monday – Friday</span><span className="font-medium">07:30 – 14:30</span></li>
              <li className="flex justify-between gap-4"><span>Saturday – Sunday</span><span className="font-medium">Closed</span></li>
            </ul>
            <div className="mt-4">
              <h4 className="text-sm font-bold mb-2 uppercase tracking-wide" style={{ color: '#0A9396' }}>2027 Admissions</h4>
              <a href="/admissions" className="text-sm text-white/80 hover:text-white underline">Apply online now</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-white/60 text-xs">
          <p>&copy; {new Date().getFullYear()} Cedarville Public School. All Rights Reserved.</p>
          <p className="mt-1 text-white/40">Cedarville, Alfred Nzo District, Eastern Cape &middot; No-Fee Public School &middot; Grade R – Grade 12</p>
          <Link to="/admin/login" className="text-white/30 hover:text-white/60 text-xs mt-2 inline-block transition-colors">
            Staff Portal
          </Link>
        </div>
      </div>
    </footer>
  );
};
