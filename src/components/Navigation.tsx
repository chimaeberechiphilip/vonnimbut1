import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Search, Globe } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const products = [
    { name: "Zinc Ore", href: "/products/zinc-ore" },
    { name: "Lead Ore", href: "/products/lead-ore" },
    { name: "Monazite", href: "/products/monazite" },
    { name: "Lithium", href: "/products/lithium" },
    { name: "Tin", href: "/products/tin" },
    { name: "Iron Ore", href: "/products/iron-ore" },
    { name: "Zircon", href: "/products/zircon" },
    { name: "Columbite", href: "/products/columbite" },
    { name: "Illuminate", href: "/products/illuminate" },
  ];

  const services = [
    { name: "Export & Logistics", href: "/export-logistics" },
    { name: "Industries Served", href: "/industries" },
    { name: "Quality & Sustainability", href: "/quality" },
  ];

  const isActiveRoute = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-steel-blue">
            <span className="text-sm font-bold text-white">
              <img src="../src/images/vimbut.jpg" alt="V&S" />
            </span>
          </div>
          <span className="text-xl font-bold text-night-blue">
            Vonnimbut & Sons
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/"
                  className={`px-4 py-2 text-sm font-medium transition-colors hover:text-rust-orange ${
                    isActiveRoute("/") ? "text-rust-orange" : "text-gray-700"
                  }`}
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/about"
                  className={`px-4 py-2 text-sm font-medium transition-colors hover:text-rust-orange ${
                    isActiveRoute("/about")
                      ? "text-rust-orange"
                      : "text-gray-700"
                  }`}
                >
                  About Us
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium">
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] gap-3 p-4">
                  {products.map((product) => (
                    <NavigationMenuLink key={product.name} asChild>
                      <Link
                        to={product.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          {product.name}
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[300px] gap-3 p-4">
                  {services.map((service) => (
                    <NavigationMenuLink key={service.name} asChild>
                      <Link
                        to={service.href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          {service.name}
                        </div>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/investors"
                  className={`px-4 py-2 text-sm font-medium transition-colors hover:text-rust-orange ${
                    isActiveRoute("/investors")
                      ? "text-rust-orange"
                      : "text-gray-700"
                  }`}
                >
                  Investors
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/news"
                  className={`px-4 py-2 text-sm font-medium transition-colors hover:text-rust-orange ${
                    isActiveRoute("/news")
                      ? "text-rust-orange"
                      : "text-gray-700"
                  }`}
                >
                  News
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  to="/contact"
                  className={`px-4 py-2 text-sm font-medium transition-colors hover:text-rust-orange ${
                    isActiveRoute("/contact")
                      ? "text-rust-orange"
                      : "text-gray-700"
                  }`}
                >
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side buttons */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="hidden md:flex">
            <Globe className="h-4 w-4 mr-1" />
            EN
          </Button>
          <Button
            asChild
            className="hidden md:flex bg-rust-orange hover:bg-rust-orange/90"
          >
            <Link to="/quote">Request Quote</Link>
          </Button>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-8">
                <Link
                  to="/"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500">Products</p>
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      to={product.href}
                      className="block pl-4 text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500">Services</p>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block pl-4 text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                <Link
                  to="/investors"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Investors
                </Link>
                <Link
                  to="/news"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  News
                </Link>
                <Link
                  to="/contact"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Button
                  asChild
                  className="bg-rust-orange hover:bg-rust-orange/90"
                >
                  <Link to="/quote" onClick={() => setIsOpen(false)}>
                    Request Quote
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
