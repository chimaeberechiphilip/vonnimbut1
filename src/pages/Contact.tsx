import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Phone, Clock, Globe, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    subject: "",
    message: "",
    productInterest: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description:
        "Thank you for contacting us. We'll respond within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      company: "",
      country: "",
      subject: "",
      message: "",
      productInterest: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const offices = [
    {
      city: "Kasher Akko",
      type: "Head Office",
      address: "No 5 Gate 3 Road, Kasher Akko, Gombe State, Nigeria",
      phone: "+234 7079263600",
      email: "kasher_akko@vonnimbutandsons.com",
      hours: "Mon-Fri 8:00 AM - 4:00 PM WAT",
    },
    {
      city: "Jos",
      type: "Branch office",
      address:
        "No 17 Off Yakubu Gowan Way Before Lowcost Junction Jos-South, Plateau State, Nigeria",
      phone: "+234 9151233031",
      email: "jos@vonnimbutandsons.com",
      hours: "Mon-Fri 8:00 AM - 4:00 PM WAT",
    },
    {
      city: "Port Harcourt",
      type: "Branch Office",
      address:
        "No 6 Harbour Road OPP ONNE Medical Centre before FOT Eleme Onme, Rivers State, Nigeria",
      phone: "+2348098748855",
      email: "portharcourt@vonnimbutandsons.com",
      hours: "Mon-Fri 8:00 AM - 4:00 PM WAT",
    },
    {
      city: "Abuja",
      type: "Branch Office",
      address: "Flat 5 Building Wonderful Estate Kaura District Abuja FCT",
      phone: "+2347065252134",
      email: "abuja@vonnimbutandsons.com",
      hours: "Mon-Sat 7:00 AM - 7:00 PM WAT",
    },
  ];

  const products = [
    "Zinc Ore",
    "Lead Ore",
    "Lithium",
    "Iron Ore",
    "Tin",
    "Monazite",
    "Zircon",
    "Multiple Products",
    "Other",
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-night-blue to-steel-blue text-white">
        <div className="container text-center">
          <Badge className="mb-4 bg-rust-orange/20 text-rust-orange border-rust-orange/30">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Our Global Team
          </h1>
          <p
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            style={{ color: "#411e1e" }}
          >
            Ready to discuss your mineral sourcing needs? Our experienced team
            is here to help you find the right solution for your business.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-night-blue flex items-center">
                  <MessageSquare className="mr-2 h-6 w-6 text-rust-orange" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Full Name *
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        placeholder="your.email@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Company
                      </label>
                      <Input
                        value={formData.company}
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Country
                      </label>
                      <Input
                        value={formData.country}
                        onChange={(e) =>
                          handleInputChange("country", e.target.value)
                        }
                        placeholder="Your country"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Product Interest
                    </label>
                    <Select
                      value={formData.productInterest}
                      onValueChange={(value) =>
                        handleInputChange("productInterest", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select product of interest" />
                      </SelectTrigger>
                      <SelectContent>
                        {products.map((product) => (
                          <SelectItem
                            key={product}
                            value={product.toLowerCase()}
                          >
                            {product}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Subject *
                    </label>
                    <Input
                      value={formData.subject}
                      onChange={(e) =>
                        handleInputChange("subject", e.target.value)
                      }
                      placeholder="Brief subject of your inquiry"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder="Please provide details about your requirements, quantities, delivery timeline, etc."
                      rows={6}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-rust-orange hover:bg-rust-orange/90"
                  >
                    Send Message
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    We typically respond within 24 hours during business days
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-night-blue">
                    Quick Response Guarantee
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-rust-orange" />
                    <span>24-hour response time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-bright-green" />
                    <span>Multilingual support (EN, FR, ES)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="h-5 w-5 text-steel-blue" />
                    <span>WhatsApp business chat available</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-night-blue">
                    Direct Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Sales & Inquiries</h4>
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="h-4 w-4 text-rust-orange" />
                      <span>sales@vonnimbutandsons.com</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Phone className="h-4 w-4 text-rust-orange" />
                      <span>+234 800 MINERALS</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Technical Support</h4>
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="h-4 w-4 text-bright-green" />
                      <span>technical@vonnimbutandsons.com</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Logistics & Shipping</h4>
                    <div className="flex items-center space-x-2 text-sm">
                      <Mail className="h-4 w-4 text-steel-blue" />
                      <span>logistics@vonnimbutandsons.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full border-rust-orange text-rust-orange hover:bg-rust-orange hover:text-white"
              >
                <a
                  href="https://wa.me/2348001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-iron-silver">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-night-blue mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit us at any of our strategic locations across Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-night-blue">
                      {office.city}
                    </CardTitle>
                    <Badge variant="secondary">{office.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-rust-orange mt-1 flex-shrink-0" />
                    <span className="text-sm">{office.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-bright-green" />
                    <span className="text-sm">{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-steel-blue" />
                    <span className="text-sm">{office.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-gold" />
                    <span className="text-sm">{office.hours}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-night-blue mb-4">Find Us</h2>
            <p className="text-gray-600">
              Our main office is strategically located in Lagos, Nigeria's
              commercial hub
            </p>
          </div>

          <div className="aspect-video rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-rust-orange mx-auto mb-4" />
              <p className="text-lg font-medium text-night-blue">
                Interactive Map
              </p>
              <p className="text-gray-600">Victoria Island, Lagos, Nigeria</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
