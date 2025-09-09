import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, Users, Award, Globe } from "lucide-react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams(); // get from URL
  const leadership = [
    {
      realname: "Nimbut Vongjen Daffa",
      name: "Chief Executive Officer",
      role: "Strategic Leadership & International Relations",
      shortexperience:
        "He is the CEO and Managing Director of Vonnimbut Enterprises. He isa trader and procurement officer with over 18 years of experience inprocurement, logistics, and trading.",
      experience: (
        <>
          <p>
            He is the CEO and Managing Director of Vonnimbut Enterprises. He is
            a trader and procurement officer with over 18 years of experience in
            procurement, logistics, and trading.
          </p>
          <p>
            Before establishing Vonnimbut Enterprises, he worked as a
            procurement and logistics officer with the Nigerian Navy and has
            operated both domestically and internationally.
          </p>
          <p>
            Vongjen Nimbut served in various tier-1 institutions, most notably
            the Nigerian Navy Logistics Command, for 15 years. He also worked in
            asset control and quality integrity roles, including in the mining
            sector across Nigeria.
          </p>
          <p>
            He leverages his experience to support the development of the mining
            sector in Nigeria, building strong relationships both locally and
            internationally.
          </p>
          <p>
            Nimbut holds a Bachelor of Science in Accountancy from Ahmadu Bello
            University, Zaria, and multiple certifications in logistics from the
            Nigerian Navy Logistics College, Kano, Nigeria.
          </p>
        </>
      ),
      picture: "../../images/vongjen.jpg",
    },
    {
      realname: "Paul",
      name: "Chief Operations Officer",
      role: "Mining Operations & Quality Control",
      shortexperience:
        "Okolie Paul Chinedu is the head of assay and quality control of Vonnimbut and son's enterprises.",
      experience: (
        <>
          <p>
            He is the CEO and Managing Director of Vonnimbut Enterprises. He is
            a trader and procurement officer with over 18 years of experience in
            procurement, logistics, and trading.
          </p>
          <p>
            Before establishing Vonnimbut Enterprises, he worked as a
            procurement and logistics officer with the Nigerian Navy and has
            operated both domestically and internationally.
          </p>
          <p>
            Vongjen Nimbut served in various tier-1 institutions, most notably
            the Nigerian Navy Logistics Command, for 15 years. He also worked in
            asset control and quality integrity roles, including in the mining
            sector across Nigeria.
          </p>
          <p>
            He leverages his experience to support the development of the mining
            sector in Nigeria, building strong relationships both locally and
            internationally.
          </p>
          <p>
            Nimbut holds a Bachelor of Science in Accountancy from Ahmadu Bello
            University, Zaria, and multiple certifications in logistics from the
            Nigerian Navy Logistics College, Kano, Nigeria.
          </p>
        </>
      ),
      picture: "../../images/paul.jpg",
    },
    {
      realname: "Philip Eberechi Chima",
      name: "Head of Logistics",
      role: "Export & Shipping Operations",
      shortexperience:
        "He is the CEO and Managing Director of Vonnimbut Enterprises. He isa trader and procurement officer with over 18 years of experience inprocurement, logistics, and trading.",
      experience: "15+ years in international trade",
      picture: "../../images/philip.jpg",
    },
    {
      realname: "Vincent Ohiri Uche",
      name: "Chief Financial Officer",
      role: "Financial Management & Investor Relations",
      shortexperience:
        "He is the CEO and Managing Director of Vonnimbut Enterprises. He isa trader and procurement officer with over 18 years of experience inprocurement, logistics, and trading.",
      experience: "18+ years in corporate finance",
      picture: "../../images/vincent.jpg",
    },
  ];

  const person = leadership.find((p) => p.realname === decodeURIComponent(id));

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="py-10 bg-gradient-to-br from-night-blue to-steel-blue text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h5 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gold ">{id} Profile</span>
          </h5>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-5">
        <div className="container">
          {!person && <h2>Profile not found</h2>}

          {/* Render profile only if person exists */}
          {person && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Show "Leader not found" if person doesn't exist */}

              <div>
                <div className="space-y-4 text-gray-700">
                  {person.experience}
                </div>
              </div>

              <div className="space-y-6">
                {" "}
                <div className="relative">
                  <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-rust-orange/20 to-gold/20 p-8">
                    <img src={person.picture} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-iron-silver">
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
                  <div className="text-sm text-gray-600">
                    {leader.shortexperience}
                    <Link to="/profile" className="text-rust-orange">
                      ... read more.
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
