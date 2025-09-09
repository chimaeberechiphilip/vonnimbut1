import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  Users,
  Award,
  Truck,
} from "lucide-react";

const Home = () => {
  const products = [
    {
      name: "Zinc Ore",
      purity: "30-40%",
      applications: "Galvanizing, Alloys",
      href: "/products/zinc-ore",
    },
    {
      name: "Lead Ore",
      purity: "40-70%",
      applications: "Batteries, Radiation Shielding",
      href: "/products/lead-ore",
    },
    {
      name: "Lithium",
      purity: "3-6%",
      applications: "Batteries, Ceramics",
      href: "/products/lithium",
    },
    {
      name: "Iron Ore",
      purity: "55-70%",
      applications: "Steel Production",
      href: "/products/iron-ore",
    },
  ];

  const stats = [
    { value: "15+", label: "Years Experience", icon: Award },
    { value: "50+", label: "Global Clients", icon: Users },
    { value: "25+", label: "Countries Served", icon: Globe },
    { value: "1M+", label: "Tons Exported", icon: Truck },
  ];

  const certifications = [
    "ISO 9001:2015",
    "ISO 14001:2015",
    "OHSAS 18001",
    "Nigerian Export Promotion Council",
    "International Trade Standards",
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-night-blue via-steel-blue to-deep-blue overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-[url('../src/images/monazite.jpg')] bg-cover bg-center mix-blend-overlay"></div>

        <div className="container relative z-10 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="animate-fade-in-up">
              <Badge className="mb-4 bg-rust-orange/20 text-rust-orange border-rust-orange/30">
                Nigeria's Premier Mineral Export Company
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Premium Minerals
                <br />
                <span className="text-gold">Global Excellence</span>
              </h1>
            </div>

            <p
              className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in-up animate-delay-200"
              style={{ color: "#411e1e" }}
            >
              Sourcing and exporting high-quality minerals from Nigeria to
              international markets. Your trusted partner for zinc, lead,
              lithium, iron ore, and specialty minerals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-400">
              <Button
                asChild
                size="lg"
                className="bg-rust-orange hover:bg-rust-orange/90 text-lg px-8"
              >
                <Link to="/products">
                  Explore Our Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-night-blue text-lg px-8"
              >
                <Link to="/quote">Request Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-iron-silver">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-rust-orange/10">
                    <stat.icon className="h-8 w-8 text-rust-orange" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-night-blue">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-night-blue mb-4">
              Our Premium Minerals
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We specialize in sourcing and exporting high-grade minerals that
              meet international quality standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-rust-orange/20"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-night-blue group-hover:text-rust-orange transition-colors">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Purity:</span>
                      <Badge variant="secondary">{product.purity}</Badge>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">
                        Applications:
                      </span>
                      <p className="text-sm font-medium">
                        {product.applications}
                      </p>
                    </div>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full group-hover:bg-rust-orange group-hover:text-white"
                  >
                    <Link to={product.href}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button
              asChild
              size="lg"
              className="bg-steel-blue hover:bg-steel-blue/90"
            >
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-iron-silver">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-night-blue mb-6">
                Why Choose Vonnimbut & Sons?
              </h2>
              <div className="space-y-4">
                {[
                  "ISO certified quality management systems",
                  "15+ years of proven export experience",
                  "Direct relationships with certified mining operations",
                  "Comprehensive logistics and shipping solutions",
                  "Ethical sourcing and sustainability commitment",
                  "Competitive pricing and flexible payment terms",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-bright-green flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-rust-orange hover:bg-rust-orange/90"
                >
                  <Link to="/about">Learn More About Us</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/quality">Our Quality Standards</Link>
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-night-blue">
                    Global Reach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Serving clients across Europe, UK, South America, and beyond
                    with reliable mineral supply chains.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-night-blue">
                    Quality Assurance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Every shipment is tested and certified to meet international
                    quality and purity standards.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-night-blue">
                    Sustainable Practices
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Committed to ethical mining practices and environmental
                    responsibility in all operations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-night-blue mb-8">
            Certified & Compliant
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-steel-blue to-deep-blue text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Get in touch today to discuss your mineral sourcing needs and
            discover how we can support your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-rust-orange hover:bg-rust-orange/90"
            >
              <Link to="/quote">Request Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-steel-blue"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
