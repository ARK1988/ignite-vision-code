import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Eye, Zap } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-subtle">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">AI-Powered CCTV Intelligence</span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">Close Circuit</span>
                <br />
                <span className="text-foreground">Artificial Intelligence</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Gain awareness of critical events in real-time and historically through AI-powered CCTV image processing. Local, cost-effective, and powered by cutting-edge technology.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group">
                Get Started
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="hero-outline" size="lg">
                View Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border/50">
              <div>
                <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">99.8%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">&lt;50ms</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
            </div>
          </div>

          {/* Right side - Dashboard image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-[0_0_50px_rgba(59,130,246,0.3)] animate-glow">
              <img
                src={heroDashboard}
                alt="AI CCTV Dashboard"
                className="w-full h-auto"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>

            {/* Floating cards */}
            <div className="absolute -top-4 -right-4 bg-card border border-primary/20 rounded-xl p-4 backdrop-blur-md shadow-card animate-float">
              <Eye className="w-6 h-6 text-primary mb-2" />
              <div className="text-sm font-medium">Live Detection</div>
              <div className="text-xs text-muted-foreground">15 cameras active</div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-card border border-accent/20 rounded-xl p-4 backdrop-blur-md shadow-card animate-float" style={{ animationDelay: "1s" }}>
              <Zap className="w-6 h-6 text-accent mb-2" />
              <div className="text-sm font-medium">Real-time Processing</div>
              <div className="text-xs text-muted-foreground">42ms avg response</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
