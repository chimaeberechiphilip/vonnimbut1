import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Users, Award, Globe } from "lucide-react";

const About = () => {
  const leadership = [
    {
      realname: "Nimbut Vongjen Daffa",
      name: "Chief Executive Officer",
      role: "Strategic Leadership & International Relations",
      experience:
        "He is the CEO and Managing Director of Vonnimbut Enterprises. He is a trader and procurement officer with over 18 years of experience in procurement, logistics, and trading",
      picture: "../../../images/vongjen.jpg",
    },
    {
      realname: "Paul",
      name: "Chief Operations Officer",
      role: "Mining Operations & Quality Control",
      experience: "20+ years in mineral processing",
      picture: "../../images/paul.jpg",
    },
    {
      realname: "Philip Eberechi Chima",
      name: "Head of Logistics",
      role: "Export & Shipping Operations",
      experience: "15+ years in international trade",
      picture: "../../images/philip.jpg",
    },
    {
      realname: "Vincent Ohiri Uche",
      name: "Chief Financial Officer",
      role: "Financial Management & Investor Relations",
      experience: "18+ years in corporate finance",
      picture: "../../images/vincent.jpg",
    },
  ];

  const milestones = [
    {
      year: "2008",
      event: "Company Founded",
      description: "Established as a family-owned mineral trading business",
    },
    {
      year: "2010",
      event: "First International Export",
      description: "Successfully exported first shipment to European markets",
    },
    {
      year: "2012",
      event: "ISO Certification",
      description: "Achieved ISO 9001:2015 quality management certification",
    },
    {
      year: "2015",
      event: "Expansion to Americas",
      description: "Extended operations to South American markets",
    },
    {
      year: "2018",
      event: "Sustainability Initiative",
      description: "Launched comprehensive environmental and social programs",
    },
    {
      year: "2020",
      event: "Digital Transformation",
      description:
        "Implemented advanced tracking and quality management systems",
    },
    {
      year: "2022",
      event: "Strategic Partnerships",
      description: "Formed key alliances with major international buyers",
    },
    {
      year: "2024",
      event: "Continued Growth",
      description: "Serving 50+ clients across 25+ countries worldwide",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "Committed to delivering the highest quality minerals that exceed international standards",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "Conducting all business with transparency, honesty, and ethical practices",
    },
    {
      icon: Users,
      title: "Partnership",
      description:
        "Building long-term relationships based on trust, reliability, and mutual success",
    },
    {
      icon: Globe,
      title: "Global Vision",
      description:
        "Connecting Nigerian mineral resources with international markets responsibly",
    },
  ];

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-night-blue to-steel-blue text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-rust-orange/20 text-rust-orange border-rust-orange/30">
              About Vonnimbut & Sons Enterprise
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Building Bridges Between
              <span className="text-gold block">Nigeria and the World</span>
            </h1>
            <p className="text-xl text-gray-200" style={{ color: "#411e1e" }}>
              For over 15 years, we've been Nigeria's trusted partner in mineral
              export, connecting high-quality resources with global markets
              through ethical sourcing and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-night-blue mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Critical minerals for industries and energy transition
                  Vonnimbut and son Enterprise is a trading house that connects
                  Nigeria’s minerals and metals sector to global markets. With
                  an established network across Nigeria, we have a competitive
                  advantage in facilitating the trade of critical minerals and
                  metals.
                </p>
                <p>
                  We build agreements with local partners across regions,
                  deploying capital to small and medium stakeholders looking to
                  scale and standardise their operations. Nigeria has abundant
                  minerals and metals resources. We are well placed to unlock
                  the supply of these metals and minerals to the global
                  commodities market.
                </p>
                <p>
                  Our work is integral to industries building for now and the
                  future. From supplying lithium, lead and zinc to facilitate
                  the transition to next-generation electric vehicles to
                  ensuring the availability of titanium for the electronics,
                  aerospace, and chemical industries, our work supports energy
                  transition, fuels innovation and supports industries. .
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-rust-orange/10">
                      <Award className="h-8 w-8 text-rust-orange" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-night-blue">
                        15+ Years
                      </h3>
                      <p className="text-gray-600">
                        of proven export excellence
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-bright-green/10">
                      <Globe className="h-8 w-8 text-bright-green" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-night-blue">
                        25+ Countries
                      </h3>
                      <p className="text-gray-600">
                        served across multiple continents
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-gold/10">
                      <Users className="h-8 w-8 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-night-blue">
                        50+ Clients
                      </h3>
                      <p className="text-gray-600">
                        long-term partnerships worldwide
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-iron-silver">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-rust-orange/10">
                    <Target className="h-8 w-8 text-rust-orange" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-night-blue">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  To be a catalyst that powers the growth of the mining
                  ecosystem in Nigeria in an environmentally sustainable way.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-bright-green/10">
                    <Eye className="h-8 w-8 text-bright-green" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-night-blue">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  To be a fully integrated metals and minerals trading company
                  exploring, developing, trading and refining minerals and
                  metals out of Nigeria with the ambition to expand to other
                  African countries. .
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-gold/10">
                    <Heart className="h-8 w-8 text-gold" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-night-blue">
                  Our Commitment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We are dedicated to sustainable mining practices, community
                  empowerment, and environmental protection, ensuring our
                  operations benefit all stakeholders for generations to come.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-night-blue text-center mb-8">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-steel-blue/10">
                        <value.icon className="h-8 w-8 text-steel-blue" />
                      </div>
                    </div>
                    <CardTitle className="text-xl text-night-blue">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-night-blue mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced leadership team brings decades of expertise in
              mining, international trade, and business development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-steel-blue to-deep-blue mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                    <img src={leader.picture} />
                  </div>
                  <CardTitle className="text-lg text-night-blue">
                    {leader.realname}
                  </CardTitle>
                  <div>{leader.name}</div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm font-medium text-rust-orange">
                    {leader.role}
                  </p>
                  <p className="text-sm text-gray-600">
                    {leader.experience}
                    <Link
                      to={`/profile/${encodeURI(leader.realname)}`}
                      className="text-rust-orange"
                    >
                      ... read more.
                    </Link>
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-iron-silver">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-night-blue mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones in our growth from a local business to a global
              mineral export leader
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {milestones.map((milestone, index) => (
                <Card key={index} className="border-l-4 border-l-rust-orange">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <Badge className="bg-rust-orange text-white">
                        {milestone.year}
                      </Badge>
                      <CardTitle className="text-lg text-night-blue">
                        {milestone.event}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{milestone.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-night-blue mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We maintain the highest industry standards through rigorous
              certification and compliance programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-night-blue">
                  Quality Management
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Badge variant="outline">ISO 9001:2015</Badge>
                <Badge variant="outline">ISO 14001:2015</Badge>
                <Badge variant="outline">OHSAS 18001</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-night-blue">
                  Export Compliance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Badge variant="outline">
                  Nigerian Export Promotion Council
                </Badge>
                <Badge variant="outline">International Trade Standards</Badge>
                <Badge variant="outline">Customs & Excise Compliance</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-night-blue">
                  Sustainability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Badge variant="outline">Responsible Mining Initiative</Badge>
                <Badge variant="outline">Environmental Management</Badge>
                <Badge variant="outline">Community Development Programs</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-steel-blue to-deep-blue text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Partner With Industry Leaders
          </h2>
          <p
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
            style={{ color: "#411e1e" }}
          >
            How we create value, direct purchase agreements Partnerships
            Collaboration with agents Structuring viable trading agreements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-rust-orange hover:bg-rust-orange/90"
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-steel-blue"
            >
              <Link to="/products">Explore Our Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
