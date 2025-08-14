import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Progress } from '../components/ui/progress';
import { User, Code, BookOpen, Target, Coffee, MapPin } from 'lucide-react';
import { developerInfo, skills, currentlyLearning, testimonials } from '../data/mock';

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate web developer with a love for creating clean, efficient, and user-friendly applications
          </p>
        </div>

        {/* Introduction */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Who I Am
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  I'm {developerInfo.name}, a passionate web developer based in {developerInfo.location}. 
                  With over 4 years of experience in web development, I specialize in creating modern, 
                  responsive web applications that provide excellent user experiences.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  My journey started with HTML and CSS, and I've since expanded my expertise to include 
                  JavaScript, React, and WordPress development. I'm always eager to learn new technologies 
                  and currently diving deep into the MERN stack and Python.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When I'm not coding, you can find me exploring new web technologies, contributing to 
                  open-source projects, or enjoying a good cup of coffee while reading tech blogs.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="mr-2 h-5 w-5" />
                  What I Do
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Code className="mr-3 h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Frontend Development</h4>
                      <p className="text-gray-600 text-sm">Building responsive, interactive user interfaces with React and modern CSS</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Code className="mr-3 h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">WordPress Development</h4>
                      <p className="text-gray-600 text-sm">Custom themes, plugins, and CMS solutions for businesses</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <BookOpen className="mr-3 h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold">Learning & Growing</h4>
                      <p className="text-gray-600 text-sm">Currently mastering MERN stack and Python for full-stack development</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Coffee className="mr-2 h-5 w-5" />
                  Personal Info
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center text-gray-700">
                  <MapPin className="mr-2 h-4 w-4" />
                  {developerInfo.location}
                </div>
                <div className="flex items-center text-gray-700">
                  <Code className="mr-2 h-4 w-4" />
                  4+ years of experience
                </div>
                <div className="flex items-center text-gray-700">
                  <Target className="mr-2 h-4 w-4" />
                  Available for freelance work
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Detailed Skills */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="text-blue-600">Frontend Technologies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.frontend.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Backend Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Backend & Database</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.backend.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Tools */}
            <Card>
              <CardHeader>
                <CardTitle className="text-purple-600">Tools & Platforms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.tools.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Currently Learning */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Learning Journey</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-center">
                <BookOpen className="mr-2 h-5 w-5" />
                Currently Expanding My Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-4">
                {currentlyLearning.map((item, index) => (
                  <Badge key={index} variant="outline" className="text-lg py-2 px-4">
                    {item}
                  </Badge>
                ))}
              </div>
              <p className="text-center text-gray-600 mt-6">
                I believe in continuous learning and staying updated with the latest technologies 
                and best practices in web development.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Others Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id}>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.position} at {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;