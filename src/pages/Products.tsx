import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRight, Search, Filter } from "lucide-react";
import { useState } from "react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const products = [
    {
      id: "zinc-ore",
      name: "Zinc Ore",
      category: "base-metals",
      purity: "35-65%",
      applications: "Galvanizing, Alloys, Batteries",
      description: "High-grade zinc concentrate for industrial applications",
      image: "../src/images/zo1.jpg",
      href: "/products/zinc-ore",
    },
    {
      id: "lead-ore",
      name: "Lead Ore",
      category: "base-metals",
      purity: "40-70%",
      applications: "Batteries, Radiation Shielding",
      description: "Premium lead ore for battery and industrial use",
      image: "../src/images/lead.jpg",
      href: "/products/lead-ore",
    },
    {
      id: "lithium",
      name: "Lithium",
      category: "critical-minerals",
      purity: "6-8%",
      applications: "Batteries, Ceramics, Glass",
      description: "High-quality lithium ore for energy storage",
      image: "../src/images/lithium.jpg",
      href: "/products/lithium",
    },
    {
      id: "iron-ore",
      name: "Iron Ore",
      category: "base-metals",
      purity: "55-70%",
      applications: "Steel Production, Construction",
      description: "Premium iron ore for steel manufacturing",
      image: "../src/images/ironore.jpg",
      href: "/products/iron-ore",
    },
    {
      id: "tin",
      name: "Tin",
      category: "base-metals",
      purity: "65-75%",
      applications: "Electronics, Soldering, Alloys",
      description: "High-purity tin concentrate for electronics",
      image: "../src/images/tin.jpg",
      href: "/products/tin",
    },
    {
      id: "monazite",
      name: "Monazite",
      category: "rare-earth",
      purity: "55-65%",
      applications: "Rare Earth Elements, Ceramics",
      description: "Rare earth mineral for specialized applications",
      image: "../src/images/monazite.jpg",
      href: "/products/monazite",
    },
    {
      id: "zircon",
      name: "Zircon",
      category: "industrial-minerals",
      purity: "65-67%",
      applications: "Ceramics, Foundry, Nuclear",
      description: "Premium zircon sand for industrial use",
      image: "../src/images/zircon.jpg",
      href: "/products/zircon",
    },
    {
      id: "Coloumbite",
      name: "Coloumbite",
      category: "industrial-minerals",
      purity: "65-67%",
      applications: "Ceramics, Foundry, Nuclear",
      description: "Premium Coloumbite sand for industrial use",
      image: "../src/images/columbite.jpg",
      href: "/products/columbite",
    },
    {
      id: "Illuminate",
      name: "Illuminate",
      category: "industrial-minerals",
      purity: "65-67%",
      applications: "Ceramics, Foundry, Nuclear",
      description: "Premium Illuminate sand for industrial use",
      image: "../src/images/illuminate.jpg",
      href: "/products/illuminate",
    },
  ];

  const categories = [
    { value: "all", label: "All Products" },
    { value: "base-metals", label: "Base Metals" },
    { value: "critical-minerals", label: "Critical Minerals" },
    { value: "rare-earth", label: "Rare Earth" },
    { value: "industrial-minerals", label: "Industrial Minerals" },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.applications.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-night-blue to-steel-blue text-white">
        <div className="container text-center">
          <Badge className="mb-4 bg-rust-orange/20 text-rust-orange border-rust-orange/30">
            Premium Quality Minerals
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Product Portfolio
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality minerals sourced
            from Nigeria's rich deposits. Each product meets international
            standards and comes with full certification.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-iron-silver">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search products or applications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-600" />
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-rust-orange/20"
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl text-night-blue group-hover:text-rust-orange transition-colors">
                      {product.name}
                    </CardTitle>
                    <Badge variant="secondary">{product.purity}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm">{product.description}</p>
                  <div>
                    <p className="text-sm font-medium text-gray-700 mb-1">
                      Applications:
                    </p>
                    <p className="text-sm text-gray-600">
                      {product.applications}
                    </p>
                  </div>
                  <div className="flex gap-2 pt-4">
                    <Button
                      asChild
                      className="flex-1 bg-steel-blue hover:bg-steel-blue/90"
                    >
                      <Link to={product.href}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="group-hover:bg-rust-orange group-hover:text-white group-hover:border-rust-orange"
                    >
                      <Link to="/quote">Quote</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">
                No products found matching your criteria.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                variant="outline"
                className="mt-4"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-iron-silver">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-night-blue mb-4">
              Quality You Can Trust
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every product in our portfolio undergoes rigorous testing and
              quality control to ensure it meets international standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-night-blue">
                  Certified Quality
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  ISO 9001:2015 certified quality management ensures consistent
                  product quality and reliability.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-night-blue">
                  Third-Party Testing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Independent laboratory testing provides unbiased verification
                  of mineral content and purity levels.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-night-blue">
                  Full Documentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Complete certificates of analysis and export documentation
                  accompany every shipment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-steel-blue to-deep-blue text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Custom Specifications?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            We can customize our products to meet your specific requirements.
            Contact our technical team to discuss your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-rust-orange hover:bg-rust-orange/90"
            >
              <Link to="/quote">Request Custom Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-steel-blue"
            >
              <Link to="/contact">Speak with Technical Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
