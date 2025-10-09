import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AICapabilities from "@/components/AICapabilities";
import UseCases from "@/components/UseCases";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      <main>
        <Hero />
        <div id="features">
          <Features />
        </div>
        <AICapabilities />
        <div id="applications">
          <UseCases />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
