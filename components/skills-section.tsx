"use client";

import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Smartphone,
  Brain,
  Cpu,
  FileCode,
  GitBranch,
  Layers
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', icon: FileCode, level: 90 },
        { name: 'TypeScript', icon: Code2, level: 85 },
        { name: 'Python', icon: Brain, level: 80 },
        { name: 'Java', icon: Cpu, level: 75 },
        { name: 'C++', icon: FileCode, level: 70 }
      ]
    },
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React.js', icon: Globe, level: 90 },
        { name: 'Next.js', icon: Layers, level: 85 },
        { name: 'HTML/CSS', icon: Code2, level: 95 },
        { name: 'Tailwind CSS', icon: Smartphone, level: 90 },
        { name: 'Redux', icon: Database, level: 80 }
      ]
    },
    {
      title: 'Backend & Databases',
      skills: [
        { name: 'Node.js', icon: Server, level: 85 },
        { name: 'Express.js', icon: Server, level: 80 },
        { name: 'MongoDB', icon: Database, level: 85 },
        { name: 'PostgreSQL', icon: Database, level: 75 },
        { name: 'Firebase', icon: Database, level: 80 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git/GitHub', icon: GitBranch, level: 90 },
        { name: 'Docker', icon: Layers, level: 70 },
        { name: 'AWS', icon: Globe, level: 65 },
        { name: 'REST APIs', icon: Server, level: 85 },
        { name: 'GraphQL', icon: Database, level: 70 }
      ]
    }
  ];

  // Central orbiting skills
  const coreSkills = [
    { name: 'React', angle: 0, radius: 120, speed: 1 },
    { name: 'TypeScript', angle: 72, radius: 140, speed: -0.8 },
    { name: 'Node.js', angle: 144, radius: 130, speed: 1.2 },
    { name: 'MongoDB', angle: 216, radius: 135, speed: -1.1 },
    { name: 'Python', angle: 288, radius: 125, speed: 0.9 },
    { name: 'Javascript', angle: 36, radius: 110, speed: -1.3 },
    { name: 'Java', angle: 108, radius: 145, speed: 1.1 },
    { name: 'Springboot', angle: 180, radius: 115, speed: -0.9 }
  ];

  return (
    <section id="skills" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Technical <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My technology stack and expertise across different domains
          </p>
        </motion.div>

        {/* Orbital Skills Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center mb-20 h-96"
        >
          {/* Central Next.js Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg"
            >
              Next.js
            </motion.div>
          </div>

          {/* Orbiting Skills */}
          {coreSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="absolute"
              style={{
                width: `${skill.radius * 2}px`,
                height: `${skill.radius * 2}px`,
                left: '50%',
                top: '50%',
                marginLeft: `-${skill.radius}px`,
                marginTop: `-${skill.radius}px`,
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 10 / Math.abs(skill.speed),
                repeat: Infinity,
                ease: "linear",
                direction: skill.speed > 0 ? "normal" : "reverse"
              }}
            >
              <motion.div
                className="absolute bg-background border-2 border-primary/20 rounded-lg flex items-center justify-center text-xs font-semibold shadow-md hover:border-primary/50 transition-colors px-3 py-2"
                style={{
                  left: `${50 + 50 * Math.cos((skill.angle * Math.PI) / 180)}%`,
                  top: `${50 + 50 * Math.sin((skill.angle * Math.PI) / 180)}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                whileHover={{ scale: 1.1 }}
                animate={{ rotate: -360 }}
                transition={{
                  rotate: {
                    duration: 10 / Math.abs(skill.speed),
                    repeat: Infinity,
                    ease: "linear",
                    direction: skill.speed > 0 ? "reverse" : "normal"
                  }
                }}
              >
                <span style={{ whiteSpace: 'nowrap' }}>{skill.name}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-center mb-6 pb-2 border-b border-primary/20">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary to-blue-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;