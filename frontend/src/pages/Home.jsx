import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Code, Globe, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { developerInfo, skills, currentlyLearning, projects } from '../data/mock';

const Home = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm{' '}
                <span className="text-blue-600">{developerInfo.name}</span>
              </h1>
              <h2 className="text-xl lg:text-2xl text-gray-600 mb-6">
                {developerInfo.title}
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {developerInfo.tagline}. I specialize in creating responsive, 
                user-friendly web applications using modern technologies like React, 
                JavaScript, and WordPress. Currently expanding my skills with MERN stack and Python.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/projects">
                    View My Work <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </div>

              <div className="flex space-x-6">
                <a
                  href={developerInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href={developerInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <Code className="h-32 w-32 text-white" />
                </div>
                <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-4">
                  <Zap className="h-8 w-8 text-yellow-800" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-green-400 rounded-full p-4">
                  <Globe className="h-8 w-8 text-green-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are the technologies I work with and the skills I'm currently developing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-600">Frontend</h3>
                <div className="space-y-3">
                  {skills.frontend.map((skill) => (
                    <div key={skill.name} className="flex justify-between items-center">
                      <span className="text-gray-700">{skill.name}</span>
                      <Badge variant="secondary">{skill.level}%</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Backend Skills */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-600">Backend</h3>
                <div className="space-y-3">
                  {skills.backend.map((skill) => (
                    <div key={skill.name} className="flex justify-between items-center">
                      <span className="text-gray-700">{skill.name}</span>
                      <Badge variant="secondary">{skill.level}%</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-600">Tools & CMS</h3>
                <div className="space-y-3">
                  {skills.tools.map((skill) => (
                    <div key={skill.name} className="flex justify-between items-center">
                      <span className="text-gray-700">{skill.name}</span>
                      <Badge variant="secondary">{skill.level}%</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Currently Learning */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Currently Learning
            </h2>
            <p className="text-lg text-gray-600">
              Always growing and expanding my skill set
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {currentlyLearning.map((item, index) => (
              <Badge key={index} variant="outline" className="text-lg py-2 px-4">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600">
              A showcase of my recent work and learning projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Badge 
                    className={
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : project.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }
                  >
                    {project.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;