"use client";

import { motion } from 'framer-motion';
import { Code, Heart, Target, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Problem Solver',
      description: 'Strong analytical mindset with a passion for tackling complex challenges'
    },
    {
      icon: Heart,
      title: 'Team Player',
      description: 'Empathetic and collaborative approach to software development'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on delivering impactful solutions and continuous improvement'
    },
    {
      icon: Users,
      title: 'Communicator',
      description: 'Excellent at handling deadlines and working under pressure'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">
                Passionate Software Developer
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I&apos;m a final-year B.Tech Computer Science student with an unwavering passion for 
                software and web development. My journey in technology is driven by a deep love for 
                problem-solving and creating solutions that make a real difference.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in building user-centric applications using modern technologies, with a 
                focus on creating seamless digital experiences. My goal is to leverage technology to 
                solve real-world problems and contribute to innovative projects that push the boundaries 
                of what&apos;s possible.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold">My Mission</h4>
              <p className="text-muted-foreground leading-relaxed">
                To secure dynamic and challenging projects where I can apply my technical skills, 
                contribute to meaningful solutions, and continue growing as a developer. I&apos;m 
                committed to delivering high-quality code and creating applications that users love.
              </p>
            </div>

            <div className="pt-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-primary">Location:</span>
                  <p className="text-muted-foreground">Noida, Uttar Pradesh</p>
                </div>
                <div>
                  <span className="font-semibold text-primary">Education:</span>
                  <p className="text-muted-foreground">B.Tech Computer Science</p>
                </div>
                <div>
                  <span className="font-semibold text-primary">University:</span>
                  <p className="text-muted-foreground">Dr. APJ Abdul Kalam Technical University</p>
                </div>
                <div>
                  <span className="font-semibold text-primary">Status:</span>
                  <p className="text-muted-foreground">Final Year Student</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                      <highlight.icon className="h-6 w-6" />
                    </div>
                    <h5 className="font-semibold">{highlight.title}</h5>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;