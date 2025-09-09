import ProductTemplate from "@/components/ProductTemplate";

const Columbite = () => {
  const productData = {
    name: "Columbite",
    subtitle: "High-Grade Columbite Concentrate for Global Industries",
    description:
      "Premium quality Columbite sourced from Nigeria's rich mineral deposits. Our zinc concentrates meet international standards for galvanizing, die-casting, and alloy production applications.",
    purity: "35-65%",
    grade: "Premium",
    applications: [
      "Galvanizing Steel",
      "Die Casting Alloys",
      "Brass Production",
      "Chemical Manufacturing",
      "Battery Production",
      "Rubber Manufacturing",
    ],
    specifications: {
      "Zinc Content": "30-40%",
      "Lead Content": "< 2.0%",
      "Iron Content": "< 8.0%",
      "Sulfur Content": "< 30%",
      Moisture: "< 8%",
      "Particle Size": "-200 mesh (75μm)",
      "Bulk Density": "1.8-2.2 t/m³",
    },
    sourcingLocations: [
      "Bauchi State",
      "Ebonyi State",
      "Nassarawa State",
      "Taraba State",
      "Plateau  State",
    ],
    image: "../src/images/columbite.jpg",
    industries: [
      "Steel & Galvanizing",
      "Automotive",
      "Construction",
      "Electronics",
      "Chemical Processing",
      "Battery Manufacturing",
    ],
    advantages: [
      "Consistent high-grade zinc content meeting international standards",
      "Low impurity levels ensuring superior processing efficiency",
      "Sustainable sourcing from certified mining operations",
      "Reliable supply chain with flexible delivery schedules",
      "Comprehensive quality testing and certification for every shipment",
      "Competitive pricing with transparent cost structure",
    ],
  };

  return <ProductTemplate {...productData} />;
};

export default Columbite;
