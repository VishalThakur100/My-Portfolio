"use client";

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'LeaseLounge',
      description: ' Scalable rental platform connecting tenants with property owners. Features Google OAuth authentication, interactive Mapbox maps, responsive design with Tailwind CSS, and seamless media uploads via Cloudinary.',
      technologies: ['Nextjs', 'Node.js', 'MongoDB', 'TailwindCSS', 'Javascript'],
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      github: '#',
      demo: 'https://lease-lounge.vercel.app/',
      featured: true
    },
    {
      title: 'Diary Doodle',
      description: 'Personal journaling platform with JWT-based authentication, role-based access control, and CRUD entry management. Built using Spring Boot, Hibernate, and Spring Security for a secure and scalable backend.',
      technologies: ['Java', 'Spring Boot', 'MongoDB', 'Postman'],
      image: 'https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg',
      github: '#',
      demo: 'https://github.com/VishalThakur100/Diary-Doodle',
      featured: true
    },
    {
      title: 'Movie Matrix',
      description: 'Movie discovery platform featuring real-time search, genre filtering, trending content, and detailed insights powered by the TMDB API.',
      technologies: ['React', 'Redux', 'Firebase', 'TMDB API', 'Javascript', 'CSS','Tailwind'],
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg',
      github: '#',
      demo: 'https://movie-matrix-80eda.web.app/',
      featured: false
    },
    {
      title: 'Urban Havens',
      description: ' Real estate platform to browse, list, and filter urban properties with image galleries and a responsive, Tailwind-powered UI.',
      technologies: ['Reactjs','Nodejs','MongoDB', 'Express.js', 'MySQL', 'Mapbox'],
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg',
      github: '#',
      demo: '#',
      featured: false
    },
    {
      title: 'Beezy Bee',
      description: 'Responsive weather app with real-time updates, 5-day forecasts, and dynamic visuals powered by the OpenWeather API.',
      technologies: ['Javascript','React', 'HTML', 'CSS','Tailwind'],
      image: 'https://cdn.dribbble.com/userupload/9745588/file/original-75ee0ad604cd78d220b32090ce8499e4.png?resize=752x&vertical=center',
      github: '#',
      demo: 'https://beezy-bee.vercel.app/',
      featured: false
    },
    {
      title: 'Startup Pitch Platform',
      description: 'Startup showcase platform for pitching ideas, browsing innovations, and community interaction with authentication and responsive UI.',
      technologies: ['Next.js', 'TypeScript', 'Sanity', 'Javascript', 'CSS'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      github: '#',
      demo: 'https://pitch-hub-lime.vercel.app/',
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my development work and problem-solving capabilities
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Button size="icon" variant="secondary" className="h-8 w-8">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant="secondary">Featured</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <Button size="icon" variant="secondary" className="h-8 w-8">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </a>
                    </div>
                  </div>
                  <CardHeader>
                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="group">
            <span>View All Projects</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;