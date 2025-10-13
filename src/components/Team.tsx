import teamImage from "@/assets/ccai-team.png";

const Team = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            CCAI <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="animate-fade-in">
              <img
                src={teamImage}
                alt="CCAI Team - Multidisciplinary experts in MLOps, Backend Engineering, UI/UX Design, and Data Science"
                className="rounded-2xl shadow-elegant w-full h-auto"
              />
            </div>

            {/* Content */}
            <div className="space-y-8 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold bg-gradient-primary bg-clip-text text-transparent">
                  Proven Expertise
                </h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  Our multidisciplinary team combines MLOps, Backend Engineering, UI/UX Design, and Data Science expertise to deliver enterprise-grade solutions.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-semibold bg-gradient-accent bg-clip-text text-transparent">
                  Tailored Pilot Programme
                </h3>
                <p className="text-muted-foreground leading-relaxed text-justify">
                  Start with your highest-cost operational area and achieve measurable results, such as "Reduce Quality Rework by 20%" within 90 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
