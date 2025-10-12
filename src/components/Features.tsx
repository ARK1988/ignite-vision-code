import { Target, Zap, Shield, DollarSign, Clock, Cpu } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Precise Detection",
    description: "Advanced AI algorithms ensure accurate identification with 99.8% precision rate.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Real-time processing with sub-50ms response time for immediate alerts.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade encryption and local processing for maximum data privacy.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: DollarSign,
    title: "Cost Effective",
    description: "Reduce security costs by up to 70% with automated AI monitoring.",
    gradient: "from-accent to-secondary",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Continuous surveillance with intelligent alerts for critical events.",
    gradient: "from-primary to-accent",
  },
  {
    icon: Cpu,
    title: "Edge Computing",
    description: "Local processing eliminates latency and reduces bandwidth costs.",
    gradient: "from-secondary to-primary",
  },
];

const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">CCAI</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-justify">
            Accurate, Fast, and Cost-Effective. Our experienced team leverages cutting-edge technology to deliver the perfect balance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon with gradient background */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-[2px] mb-4`}>
                <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-justify">
                {feature.description}
              </p>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
