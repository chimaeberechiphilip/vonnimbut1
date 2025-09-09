import { Link } from "react-router-dom";
import { Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-night-blue text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-rust-orange">
                <span className="text-sm font-bold text-white">
                  <img src="../../../public/images/vimbut.jpg" />
                </span>
              </div>
              <span className="text-lg font-bold">Vonnimbut & Sons</span>
            </div>
            <p className="text-sm text-gray-300">
              Leading Nigerian mineral export company specializing in
              high-quality ore sourcing and international trade.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="p-2 text-gray-300 hover:text-white"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 text-gray-300 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="p-2 text-gray-300 hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Products</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/products/zinc-ore"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Zinc Ore
                </Link>
              </li>
              <li>
                <Link
                  to="/products/lead-ore"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Lead Ore
                </Link>
              </li>
              <li>
                <Link
                  to="/products/monazite"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Monazite
                </Link>
              </li>
              <li>
                <Link
                  to="/products/lithium"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Lithium
                </Link>
              </li>
              <li>
                <Link
                  to="/products/tin"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tin
                </Link>
              </li>
              <li>
                <Link
                  to="/products/iron-ore"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Iron Ore
                </Link>
              </li>
              <li>
                <Link
                  to="/products/zircon"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Zircon
                </Link>
              </li>
              <li>
                <Link
                  to="/products/tin"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tin
                </Link>
              </li>
              <li>
                <Link
                  to="/products/iron-ore"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Iron Ore
                </Link>
              </li>
              <li>
                <Link
                  to="/products/zircon"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Zircon
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/export-logistics"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Export & Logistics
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Industries Served
                </Link>
              </li>
              <li>
                <Link
                  to="/quality"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Quality & Sustainability
                </Link>
              </li>
              <li>
                <Link
                  to="/investors"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link
                  to="/tracking"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Order Tracking
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm text-gray-300">
              Subscribe to our newsletter for industry insights and company
              updates.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="bg-rust-orange hover:bg-rust-orange/90">
                Subscribe
              </Button>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@vonnimbutandsons.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p>&copy; 2024 Vonnimbut & Sons Enterprise. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link
                to="/sitemap"
                className="hover:text-white transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
