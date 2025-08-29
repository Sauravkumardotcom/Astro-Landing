import { Gem, Compass, Map } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Birth Chart Analysis",
      description:
        "Complete personality analysis with path guidance through your cosmic blueprint.",
      icon: Compass,
    },
    {
      title: "Gemstone Therapy",
      description:
        "Personalized gemstone recommendations to enhance positive energy and well-being.",
      icon: Gem,
    },
    {
      title: "Vastu Consultation",
      description:
        "Harmonize your living space with ancient principles for peace and prosperity.",
      icon: Map,
    },
  ];

  return (
    <section className="py-16 px-4 md:px-12 lg:px-24 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-muted p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <service.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
