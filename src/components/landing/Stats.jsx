export default function Stats() {
  const stats = [
    { label: "3000+ Sessions", value: "3000+" },
    { label: "10+ Years Experience", value: "10+" },
    { label: "95% Satisfaction Rate", value: "95%" },
  ];

  return (
    <section className="py-16 px-4 md:px-12 lg:px-24 bg-background text-foreground">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="bg-muted p-6 rounded-lg shadow">
            <p className="text-3xl font-bold text-primary">{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
