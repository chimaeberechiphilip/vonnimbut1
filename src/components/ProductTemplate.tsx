import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  MapPin,
  Beaker,
  Truck,
  Award,
} from "lucide-react";

interface ProductTemplateProps {
  name: string;
  subtitle: string;
  description: string;
  purity: string;
  grade: string;
  applications: string[];
  specifications: { [key: string]: string };
  sourcingLocations: string[];
  image: string;
  industries: string[];
  advantages: string[];
}

const ProductTemplate = ({
  name,
  subtitle,
  description,
  purity,
  grade,
  applications,
  specifications,
  sourcingLocations,
  image,
  industries,
  advantages,
}: ProductTemplateProps) => {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-night-blue to-steel-blue text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-rust-orange/20 text-rust-orange border-rust-orange/30">
                Premium Quality Mineral
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{name}</h1>
              <p className="text-xl text-gold mb-6">{subtitle}</p>
              <p
                className="text-lg text-gray-200 mb-8"
                style={{ color: "#411e1e" }}
              >
                {description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-rust-orange hover:bg-rust-orange/90"
                >
                  <Link to="/quote">Request Quote</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-night-blue"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Specs
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-rust-orange/20 to-gold/20 p-8">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-iron-silver">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-night-blue">{purity}</div>
              <div className="text-gray-600">Purity Range</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-night-blue">{grade}</div>
              <div className="text-gray-600">Grade</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-night-blue">
                {sourcingLocations.length}+
              </div>
              <div className="text-gray-600">Source Locations</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-night-blue">
                {industries.length}+
              </div>
              <div className="text-gray-600">Industries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information */}
      <section className="py-20">
        <div className="container">
          <Tabs defaultValue="specifications" className="space-y-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="sourcing">Sourcing</TabsTrigger>
              <TabsTrigger value="advantages">Advantages</TabsTrigger>
            </TabsList>

            <TabsContent value="specifications" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Beaker className="mr-2 h-5 w-5 text-rust-orange" />
                      Technical Specifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {Object.entries(specifications).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between border-b pb-2"
                      >
                        <span className="font-medium text-gray-700">
                          {key}:
                        </span>
                        <span className="text-night-blue">{value}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="mr-2 h-5 w-5 text-bright-green" />
                      Quality Assurance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <Badge variant="outline">ISO 9001:2015 Certified</Badge>
                      <Badge variant="outline">International Standards</Badge>
                      <Badge variant="outline">Third-Party Testing</Badge>
                      <Badge variant="outline">Certificate of Analysis</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      Every batch is tested and certified to ensure consistent
                      quality and purity standards.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="applications" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {applications.map((application, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-night-blue mb-2">
                        {application}
                      </h3>
                      <p className="text-sm text-gray-600">
                        High-quality {name.toLowerCase()} suitable for
                        industrial applications requiring premium grade
                        materials.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Industries We Serve</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {industries.map((industry, index) => (
                      <Badge key={index} variant="secondary">
                        {industry}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="sourcing" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="mr-2 h-5 w-5 text-rust-orange" />
                      Sourcing Locations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {sourcingLocations.map((location, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-rust-orange"></div>
                          <span>{location}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Truck className="mr-2 h-5 w-5 text-bright-green" />
                      Logistics & Shipping
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700">Packaging:</span>
                        <span>25-50kg bags, 1MT bulk bags</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Container:</span>
                        <span>20ft/40ft containers</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Lead Time:</span>
                        <span>14-21 days</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700">Ports:</span>
                        <span>Lagos, Port Harcourt</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="advantages" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {advantages.map((advantage, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-bright-green mt-2"></div>
                        <p className="text-gray-700">{advantage}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-steel-blue to-deep-blue text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Source Premium {name}?
          </h2>
          <p
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
            style={{ color: "#411e1e" }}
          >
            Contact our team today to discuss your requirements and get a
            competitive quote for high-quality {name.toLowerCase()}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-rust-orange hover:bg-rust-orange/90"
            >
              <Link to="/quote">
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-steel-blue"
            >
              <Link to="/contact">Contact Sales Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductTemplate;
