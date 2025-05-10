import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
const Footer = () => {
  return <footer className="relative w-full bg-transparent overflow-hidden">
    {/* Animated lighting effect at the very bottom for a glowing footer */}
    <div className="footer-lighting-effect absolute left-0 right-0 bottom-0 h-24 z-0 pointer-events-none" style={{background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.0) 60%)', opacity: 1}} />
    <div className="pt-16 pb-8 backdrop-blur-xl relative z-10">
      <div className="container mx-auto px-4">
        {/* Main row: grid layout for alignment */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16 justify-between items-start">
          {/* Logo and description */}
          <div className="flex flex-col items-start min-w-[220px] space-y-6">
            <Link to="/" className="inline-block">
              <img alt="96th Annual Convention Logo" className="h-16 w-auto" src="https://files.constantcontact.com/d78fca3d801/421281ba-1221-4224-8fbb-112263b138f7.png?rdr=true" />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed text-left">
              Join us at the MAS 96th Annual Convention - where county supervisors come together to drive success and accelerate connections.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="bg-racing-black/50 hover:bg-racing-red/90 p-2.5 rounded-full transition-all duration-300 group">
                <Facebook size={18} className="text-white/80 group-hover:text-white" />
              </a>
              <a href="#" className="bg-racing-black/50 hover:bg-racing-red/90 p-2.5 rounded-full transition-all duration-300 group">
                <Twitter size={18} className="text-white/80 group-hover:text-white" />
              </a>
              <a href="#" className="bg-racing-black/50 hover:bg-racing-red/90 p-2.5 rounded-full transition-all duration-300 group">
                <Linkedin size={18} className="text-white/80 group-hover:text-white" />
              </a>
              <a href="#" className="bg-racing-black/50 hover:bg-racing-red/90 p-2.5 rounded-full transition-all duration-300 group">
                <Instagram size={18} className="text-white/80 group-hover:text-white" />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div className="flex-1 min-w-[180px] space-y-6">
            <h3 className="text-white font-display text-xl font-bold text-left">Quick Links</h3>
            <ul className="space-y-3 text-left">
              <li>
                <Link to="/agenda" className="relative text-white/70 hover:text-racing-red pl-0 transition-all duration-300 flex items-center group">
                  <span className="absolute left-0 w-0 h-0.5 bg-racing-red group-hover:w-5 transition-all duration-300"></span>
                  <span className="pl-0 group-hover:pl-7 transition-all duration-300">Event Agenda</span>
                </Link>
              </li>
              <li>
                <Link to="/venue" className="relative text-white/70 hover:text-racing-red pl-0 transition-all duration-300 flex items-center group">
                  <span className="absolute left-0 w-0 h-0.5 bg-racing-red group-hover:w-5 transition-all duration-300"></span>
                  <span className="pl-0 group-hover:pl-7 transition-all duration-300">Venue Info</span>
                </Link>
              </li>
              <li>
                <Link to="/sponsors" className="relative text-white/70 hover:text-racing-red pl-0 transition-all duration-300 flex items-center group">
                  <span className="absolute left-0 w-0 h-0.5 bg-racing-red group-hover:w-5 transition-all duration-300"></span>
                  <span className="pl-0 group-hover:pl-7 transition-all duration-300">Sponsors</span>
                </Link>
              </li>
              <li>
                <Link to="/exhibitors" className="relative text-white/70 hover:text-racing-red pl-0 transition-all duration-300 flex items-center group">
                  <span className="absolute left-0 w-0 h-0.5 bg-racing-red group-hover:w-5 transition-all duration-300"></span>
                  <span className="pl-0 group-hover:pl-7 transition-all duration-300">Exhibitors</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div className="flex-1 min-w-[200px] space-y-6">
            <h3 className="text-white font-display text-xl font-bold text-left">Contact Us</h3>
            <ul className="space-y-4 text-left">
              <li className="flex items-start space-x-3 group">
                <Mail className="text-racing-red flex-shrink-0 mt-1" size={18} />
                <a href="mailto:annualconvention@massup.org" className="text-white/70 group-hover:text-white transition-all duration-300">
                  annualconvention@massup.org
                </a>
              </li>
              <li className="flex items-start space-x-3 group">
                <Phone className="text-racing-red flex-shrink-0 mt-1" size={18} />
                <a href="tel:(601) 353-2741" className="text-white/70 group-hover:text-white transition-all duration-300">
                  (601) 353-2741
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="text-racing-red flex-shrink-0 mt-1" size={18} />
                <address className="text-white/70 not-italic">
                  793 N. President St.<br />
                  Jackson, MS 39202
                </address>
              </li>
            </ul>
          </div>
          {/* Newsletter */}
          <div className="flex-1 min-w-[220px] space-y-6">
            <h3 className="text-white font-display text-xl font-bold text-left">Stay Updated</h3>
            <p className="text-white/70 text-sm text-left">
              Subscribe to receive the latest updates about the convention.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <Input type="email" placeholder="Your email address" className="bg-white/5 border-white/10 focus:border-racing-red text-white placeholder:text-white/40 h-12" />
              </div>
              <Button type="submit" className="w-full bg-racing-red hover:bg-racing-red/90 text-white h-12 transition-all duration-300">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        {/* Bottom bar with separator */}
        <div className="mt-16 pt-8 relative">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-4">
            <p className="text-white/50 text-sm text-left w-full md:w-auto">
              &copy; {new Date().getFullYear()} Mississippi Association of Supervisors
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-white/50 text-sm hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/50 text-sm hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>;
};
export default Footer;