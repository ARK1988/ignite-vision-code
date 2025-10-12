import { UserCheck, ShoppingCart, Flame, HardHat, Factory, Warehouse } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import retailImage from "@/assets/usecase-retail.jpg";
import manufacturingImage from "@/assets/usecase-manufacturing.jpg";
import healthcareImage from "@/assets/usecase-healthcare.jpg";
import smartcityImage from "@/assets/usecase-smartcity.jpg";
import transportationImage from "@/assets/usecase-transportation.jpg";

const useCases = [
  {
    icon: UserCheck,
    title: "Access Control",
    description: "Automated management of personnel and vehicle traffic using face recognition, license plate detection, and zone monitoring. Enhances security while tracking work hours and unauthorized access.",
    color: "primary",
    image: smartcityImage,
  },
  {
    icon: ShoppingCart,
    title: "Retail & Stores",
    description: "Analyze customer behavior, detect theft, monitor queue lengths, and optimize store layouts. AI-powered insights to increase sales and improve customer experience.",
    color: "accent",
    image: retailImage,
  },
  {
    icon: Flame,
    title: "Fire & Smoke Detection",
    description: "Early detection of fire and smoke in industrial facilities, warehouses, and public spaces. Immediate alerts enable rapid response to prevent catastrophic damage.",
    color: "destructive",
    image: manufacturingImage,
  },
  {
    icon: HardHat,
    title: "Safety Compliance",
    description: "Automatic detection of PPE (helmets, vests, masks) and safety violations in construction sites and factories. Ensure workplace safety standards are maintained 24/7.",
    color: "secondary",
    image: healthcareImage,
  },
  {
    icon: Factory,
    title: "Industrial Sites",
    description: "Monitor production lines, detect anomalies, track equipment status, and prevent accidents. Optimize operations with real-time visual intelligence.",
    color: "primary",
    image: manufacturingImage,
  },
  {
    icon: Warehouse,
    title: "Warehouses & Logistics",
    description: "Track inventory movements, detect unauthorized access, monitor loading docks, and optimize space utilization with comprehensive visual analytics.",
    color: "accent",
    image: transportationImage,
  },
];

const UseCases = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Applications Across <span className="bg-gradient-accent bg-clip-text text-transparent">Industries</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-justify">
            CCTV cameras are deployed everywhere across different industries. An unparalleled data source that can solve numerous and diverse challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className="group relative border-border hover:border-primary/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={useCase.image} 
                  alt={useCase.title}
                  className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/95 to-card/80" />
              </div>
              
              <CardHeader className="space-y-4 relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-primary p-[2px]">
                  <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                    <useCase.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {useCase.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed text-justify">
                    {useCase.description}
                  </CardDescription>
                </div>
              </CardHeader>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
