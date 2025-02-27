import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Smartphone } from "lucide-react";

const features = [
  {
    title: "Lightning Fast",
    description: "Optimized performance that keeps your applications running smoothly",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1559752562-1513aa167782",
  },
  {
    title: "Secure by Design",
    description: "Enterprise-grade security to protect your valuable data",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1653389526309-f8e2e75f8aaf",
  },
  {
    title: "Mobile First",
    description: "Responsive design that works seamlessly across all devices",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1653389527532-884074ac1c65",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Why Choose Us</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover the features that set us apart
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <feature.icon className="h-6 w-6 text-primary" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
