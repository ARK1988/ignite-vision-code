import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AICapabilities from "@/components/AICapabilities";
import OtherFeatures from "@/components/OtherFeatures";
import UseCases from "@/components/UseCases";
import Contact from "@/components/Contact";
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
        <OtherFeatures />
        <div id="applications">
          <UseCases />
        </div>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
