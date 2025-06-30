"use client";

import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, Award, Users, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      type: 'internship',
      title: 'Software Development Intern',
      company: 'Stanbriss Infotech',
      location: 'Remote',
      duration: 'Jun 2024 - Aug 2024',
      description: 'Developed full-stack web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      achievements: [
        'Built responsive web applications using React and Node.js',
        'Optimized database queries reducing load times by 40%',
        'Implemented RESTful APIs and integrated third-party services'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js']
    },
    {
      type: 'internship',
      title: 'Technical Intern',
      company: 'AICTE',
      location: 'New Delhi',
      duration: 'Mar 2024 - May 2024',
      description: 'Participated in research and development projects focused on emerging technologies and their applications in education sector.',
      achievements: [
        'Contributed to AI-driven educational platform development',
        'Conducted technical research on machine learning applications',
        'Presented findings to senior technical team'
      ],
      technologies: ['Python', 'Machine Learning', 'Django', 'PostgreSQL']
    },
    {
      type: 'program',
      title: 'CSR Initiative Participant',
      company: 'SAP & Microsoft',
      location: 'Online',
      duration: 'Jan 2024 - Mar 2024',
      description: 'Participated in corporate social responsibility program focusing on technology education and community impact.',
      achievements: [
        'Completed advanced technology training modules',
        'Contributed to community tech education initiatives',
        'Developed solutions for social impact projects'
      ],
      technologies: ['Cloud Computing', 'Azure', 'SAP', 'Community Outreach']
    }
  ];

  const leadership = [
    {
      title: 'TechWiz Event Leader',
      organization: 'University Tech Club',
      duration: '2023 - Present',
      description: 'Led and mentored 150+ students in technical competitions and organized large-scale tech events.',
      achievements: [
        'Mentored 150+ students in various technical domains',
        'Organized tech competition with 500+ participants',
        'Previously won the same competition as a participant'
      ]
    }
  ];

  const education = {
    degree: 'B.Tech in Computer Science & Engineering',
    university: 'Dr. APJ Abdul Kalam Technical University',
    location: 'Uttar Pradesh, India',
    duration: '2021 - 2025',
    status: 'Final Year Student'
  };

  const workshops = [
    'The Engineering Leader\'s Playbook: The First 90 Days - Leadership and Management Workshop'
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Experience & <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and academic background
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Professional Experience */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 flex items-center gap-2"
            >
              <Building className="h-6 w-6 text-primary" />
              Professional Experience
            </motion.h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-4 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />
                    
                    <Card className="md:ml-16 border-border/50 hover:border-primary/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                          <div className="space-y-2">
                            <h4 className="text-xl font-semibold">{exp.title}</h4>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Building className="h-4 w-4" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>{exp.duration}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                          <Badge variant={exp.type === 'internship' ? 'default' : 'secondary'}>
                            {exp.type === 'internship' ? 'Internship' : 'Program'}
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {exp.description}
                        </p>
                        
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-semibold mb-2">Key Achievements:</h5>
                            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                              {exp.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Leadership & Activities */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 flex items-center gap-2"
            >
              <Users className="h-6 w-6 text-primary" />
              Leadership & Activities
            </motion.h3>
            
            {leadership.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold">{item.title}</h4>
                        <p className="text-muted-foreground">{item.organization}</p>
                        <p className="text-sm text-muted-foreground">{item.duration}</p>
                      </div>
                      <Badge variant="secondary">
                        <Award className="h-3 w-3 mr-1" />
                        Leadership
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div>
                      <h5 className="font-semibold mb-2">Achievements:</h5>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {item.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 flex items-center gap-2"
            >
              <BookOpen className="h-6 w-6 text-primary" />
              Education
            </motion.h3>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-semibold">{education.degree}</h4>
                      <p className="text-muted-foreground font-medium">{education.university}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{education.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{education.location}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="default">{education.status}</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Workshops & Training */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 flex items-center gap-2"
            >
              <Award className="h-6 w-6 text-primary" />
              Workshops & Training
            </motion.h3>
            
            <div className="space-y-4">
              {workshops.map((workshop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-border/50">
                    <CardContent className="p-4">
                      <p className="font-medium">{workshop}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;