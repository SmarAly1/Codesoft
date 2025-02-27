import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background animate-gradient" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute -top-8 -left-8 text-primary/10"
              >
                <Code2 className="w-24 h-24" />
              </motion.div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="block mb-2">Crafting Digital</span>
                <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-6 text-xl text-muted-foreground max-w-xl"
              >
                Where innovation meets elegance. Transform your ideas into reality with our cutting-edge web solutions.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" className="group relative overflow-hidden">
                  <span className="relative z-10">Explore Projects</span>
                  <motion.div
                    className="absolute inset-0 bg-primary/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button size="lg" variant="outline" className="group">
                  <Sparkles className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                  View Services
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-1">
              <div className="w-full h-full rounded-xl overflow-hidden relative group">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt="Modern workspace"
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>

            <motion.div
              className="absolute -bottom-4 -right-4 bg-primary/10 w-24 h-24 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}