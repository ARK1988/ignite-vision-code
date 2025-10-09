import { Brain, Users, Grid3x3 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const capabilities = [
  {
    icon: Grid3x3,
    title: "ناحیه بندی",
    description: "تشخیص و جداسازی اتوماتیک اشیاء، افراد و مناطق مختلف در تصویر با دقت بالا. این قابلیت امکان تحلیل دقیق هر بخش از صحنه را فراهم می‌کند.",
    videoUrl: "https://cc-ai.ir/videos/segmentation.mp4",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Users,
    title: "تشخیص حالات بدن",
    description: "شناسایی و تحلیل حالات و ژست‌های بدن افراد به صورت لحظه‌ای. مفید برای نظارت بر ایمنی، تحلیل رفتار و کنترل دسترسی.",
    videoUrl: "https://cc-ai.ir/videos/pose.mp4",
    gradient: "from-accent to-primary",
  },
  {
    icon: Brain,
    title: "شناسایی و طبقه بندی چهره",
    description: "تشخیص چهره با دقت بالا و طبقه‌بندی افراد برای کنترل دسترسی، حضور و غیاب و امنیت پیشرفته در زمان واقعی.",
    videoUrl: "https://cc-ai.ir/videos/face-detection.mp4",
    gradient: "from-secondary to-accent",
  },
];

const AICapabilities = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            قابلیت‌های <span className="bg-gradient-primary bg-clip-text text-transparent">هوش مصنوعی</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            فناوری‌های پیشرفته بینایی ماشین برای تحلیل هوشمند تصاویر دوربین‌های مداربسته شما
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <Card
              key={index}
              className="group relative border-border hover:border-primary/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="space-y-4 relative z-10 text-right">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary p-[2px] mr-auto">
                  <div className="w-full h-full bg-card rounded-xl flex items-center justify-center">
                    <capability.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">
                    {capability.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed text-base">
                    {capability.description}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="relative z-10 pt-0">
                {/* Video Demo */}
                <div className="relative rounded-xl overflow-hidden border border-primary/20 shadow-lg group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all">
                  <video
                    src={capability.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
                </div>
              </CardContent>

              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AICapabilities;
