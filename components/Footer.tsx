import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Logo className="w-10 h-10" />
              <div>
                <div className="font-bold">BilusTech LLC</div>
                <div className="text-xs text-gray-400">Low Voltage Solutions</div>
              </div>
            </div>
            <p className="text-sm text-gray-300 dark:text-gray-400">
              Professional low voltage equipment supplier serving businesses across the USA.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <div>
                <p className="font-semibold text-white">Address:</p>
                <p>2201 Menaul Blvd NE, Ste A</p>
                <p>Albuquerque, NM 87107</p>
              </div>
              <div>
                <p className="font-semibold text-white">Phone:</p>
                <a href="tel:+17389666630" className="hover:text-white transition-colors">
                  (738) 966-6630
                </a>
              </div>
              <div>
                <p className="font-semibold text-white">Email:</p>
                <a href="mailto:ceo@bilustech.com" className="hover:text-white transition-colors">
                  ceo@bilustech.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 dark:text-gray-500">
            <p>&copy; {currentYear} BilusTech LLC. All rights reserved.</p>
            <p>Serving the USA with professional low voltage equipment solutions.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
