import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Smartphone, ArrowUpRight } from "lucide-react";

const features = [
  {
    title: "Performance Optimization",
    description: "Lightning-fast solutions that keep your applications running at peak efficiency",
    icon: Zap,
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Secure Architecture",
    description: "Enterprise-grade security implementation with modern best practices",
    icon: Shield,
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Responsive Design",
    description: "Seamless experiences across all devices and screen sizes",
    icon: Smartphone,
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold inline-flex items-center gap-2">
            Our Expertise
            <span className="text-primary/80">
              <ArrowUpRight className="w-6 h-6" />
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how our specialized solutions can elevate your digital presence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group"
            >
              <Card className="relative h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <CardContent className="relative p-6 flex flex-col h-full">
                  <div className="mb-4 p-3 rounded-lg bg-primary/5 w-fit">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground flex-grow">{feature.description}</p>

                  <div className="mt-4 flex items-center text-sm text-primary">
                    <span className="group-hover:underline">Learn more</span>
                    <ArrowUpRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}