import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
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
        <div id="applications">
          <UseCases />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
