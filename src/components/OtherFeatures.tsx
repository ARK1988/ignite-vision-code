import { Puzzle, ArrowUpCircle, Wrench, FileText, Bell, PackageSearch } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const otherFeatures = [
  {
    icon: Puzzle,
    title: "Integration Ready",
    description: "This system can be integrated with products and infrastructure from various companies, including storage devices and cameras of different types.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: ArrowUpCircle,
    title: "Scalable",
    description: "As the number of cameras and events increases, it's possible to expand different parts of the system and increase image processing, storage, and alert delivery capacity.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Wrench,
    title: "Extensible",
    description: "The system's capabilities in AI and reporting can be developed according to user needs. New events or reports can be defined to meet specific requirements.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: PackageSearch,
    title: "Support",
    description: "Unlike traditional systems, AI systems require constant monitoring and model updates. Therefore, system support is renewable annually to ensure optimal performance.",
    gradient: "from-primary to-accent",
  },
  {
    icon: FileText,
    title: "Comprehensive Reporting",
    description: "Users can get comprehensive and user-friendly reports of events detected in real-time or historically, on their phone or computer, from inside or outside their facility.",
    gradient: "from-accent to-secondary",
  },
  {
    icon: Bell,
    title: "Alert Notifications",
    description: "For awareness of events detected in real-time, alerts are sent to mobile phones. These alerts can be delivered via SMS or popular messaging apps.",
    gradient: "from-secondary to-primary",
  },
];

const OtherFeatures = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(190,95,250,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Additional <span className="bg-gradient-accent bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-justify">
            Beyond core AI capabilities, CCAI system offers enterprise-grade features for scalability, integration, and continuous support to ensure long-term success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherFeatures.map((feature, index) => (
            <Card
              key={index}
              className="group relative border-border hover:border-primary/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="space-y-4 relative z-10">
                {/* Icon with gradient background */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-[2px]`}>
                  <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed text-justify">
                    {feature.description}
                  </CardDescription>
                </div>
              </CardHeader>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherFeatures;
