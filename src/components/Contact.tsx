import { MapPin, Phone, Mail } from "lucide-react";
import { Card } from "@/components/ui/card";

const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.070282385812!2d55.212222!3d25.116666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b7c7c7c7c7c%3A0x7c7c7c7c7c7c7c7c!2sRasis%20Business%20Center%2C%20Al%20Barsha%201%2C%20Dubai%2C%20UAE!5e0!3m2!1sen!2sae!4v1690000000000!5m2!1sen!2sae";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Contact <span className="bg-gradient-primary bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-justify">
            Get in touch with our team to learn more about how CCAI can transform your security infrastructure with AI-powered solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* CTA Text */}
          <div className="mb-12 animate-fade-in">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Ready to Transform Your <span className="bg-gradient-primary bg-clip-text text-transparent">Operations?</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed text-justify max-w-3xl">
              Contact us today to discuss how CCAI can deliver immediate ROI through enhanced compliance, reduced waste, and optimised throughput.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info Card */}
            <Card className="border-border bg-card/50 backdrop-blur-sm p-8 md:p-12 animate-fade-in" style={{ animationDelay: "100ms" }}>
              <div className="grid gap-8">
                {/* Address */}
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary p-[2px]">
                    <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Address</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                      Unit 112, 3rd floor, Rasis Business Center. Al Barsha 1, Dubai, UAE
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-accent p-[2px]">
                    <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Phone</h3>
                    <a 
                      href="tel:+971507180093"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      +971-50-7180093
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary p-[2px]">
                    <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <a 
                      href="mailto:reza.karbas@4cell.net"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors break-all"
                    >
                      reza.karbas@4cell.net
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Google Map Embed */}
            <Card className="border-border bg-card/50 backdrop-blur-sm overflow-hidden animate-fade-in flex items-center justify-center" style={{ animationDelay: "200ms" }}>
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;