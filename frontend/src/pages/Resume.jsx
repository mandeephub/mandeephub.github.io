import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';
import { Download, Briefcase, GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import { developerInfo, experience, education, skills } from '../data/mock';

const Resume = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{developerInfo.name}</h1>
          <p className="text-xl text-gray-600 mb-2">{developerInfo.title}</p>
          <p className="text-gray-500 mb-6">{developerInfo.tagline}</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600 mb-8">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              {developerInfo.location}
            </div>
            <div>{developerInfo.email}</div>
            <div>{developerInfo.phone}</div>
          </div>

          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Download className="mr-2 h-4 w-4" />
            Download PDF Resume
          </Button>
        </div>

        {/* Professional Experience */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Briefcase className="h-6 w-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Professional Experience</h2>
          </div>
          
          <div className="space-y-6">
            {experience.map((job) => (
              <Card key={job.id}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-xl">{job.position}</CardTitle>
                      <p className="text-lg text-blue-600 font-semibold">{job.company}</p>
                    </div>
                    <div className="flex items-center text-gray-500 mt-2 sm:mt-0">
                      <Calendar className="h-4 w-4 mr-1" />
                      {job.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {job.achievements.map((achievement, index) => (
                        <li key={index} className="text-gray-700">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <GraduationCap className="h-6 w-6 text-green-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Education</h2>
          </div>
          
          <div className="space-y-6">
            {education.map((edu) => (
              <Card key={edu.id}>
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <p className="text-lg text-green-600 font-semibold">{edu.school}</p>
                    </div>
                    <div className="flex items-center text-gray-500 mt-2 sm:mt-0">
                      <Calendar className="h-4 w-4 mr-1" />
                      {edu.period}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <Award className="h-6 w-6 text-purple-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Technical Skills</h2>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-blue-600 mb-3">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge key={skill.name} variant="secondary">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-green-600 mb-3">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge key={skill.name} variant="secondary">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-purple-600 mb-3">Tools & CMS</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge key={skill.name} variant="secondary">
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications & Achievements */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Certifications & Achievements</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">Full Stack Web Development Certificate</h3>
                    <p className="text-gray-600">Code Academy Pro - 2019</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">JavaScript Algorithms and Data Structures</h3>
                    <p className="text-gray-600">freeCodeCamp - 2020</p>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold">React Development Specialization</h3>
                    <p className="text-gray-600">Coursera - 2021</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-gray-600 mb-6">
            I'm always open to discussing new opportunities and exciting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Contact Me
            </Button>
            <Button size="lg" variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;