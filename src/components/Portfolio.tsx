'use client';

import { useState } from 'react';

type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  metrics: string[];
  gradient: string;
  challenge: string;
  solution: string;
  status: string;
  note: string;
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: 'FACT – Find A Coach Today',
      category: 'Web App',
      description: 'Coaching marketplace platform with user roles, bookings, dashboards and a mobile-first layout.',
      tags: ['Marketplace', 'Bookings', 'Project in Development'],
      metrics: ['Marketplace platform', 'User roles and dashboards', 'Mobile-first layout'],
      gradient: 'from-primary-600 to-primary-700',
      challenge: 'The project needed a clear marketplace structure that could support multiple user types, bookings and a simple mobile experience.',
      solution: 'Built around a practical app structure with role-based views, booking flows and dashboard screens designed for day-to-day use.',
      status: 'In development',
      note: 'This project is being presented honestly as work in progress rather than a completed client case study.'
    },
    {
      title: 'AFMG',
      category: 'Website',
      description: 'Football management website created to present the brand clearly and support ongoing updates.',
      tags: ['Website', 'Responsive', 'Concept & Development'],
      metrics: ['Football management website', 'Responsive layout', 'Content-ready structure'],
      gradient: 'from-gray-600 to-gray-700',
      challenge: 'The business needed a clear website presence that could present information professionally and work well on mobile.',
      solution: 'Developed a straightforward football management site structure with strong navigation, clean content sections and responsive presentation.',
      status: 'In development',
      note: 'A practical website build focused on clarity, readability and future updates.'
    },
    {
      title: 'Project Analytics Dashboard',
      category: 'Dashboard',
      description: 'Business dashboard and data display project focused on presenting useful information clearly.',
      tags: ['Dashboard', 'Data display', 'Project in Development'],
      metrics: ['Dashboard UI', 'Data display views', 'Mobile-friendly layout'],
      gradient: 'from-gray-700 to-gray-800',
      challenge: 'The dashboard needed to present data clearly for day-to-day business use without clutter or unnecessary complexity.',
      solution: 'Created a practical dashboard structure with readable summaries, clear sections and a layout that works on smaller screens.',
      status: 'In development',
      note: 'Designed to make business data easier to scan and act on.'
    }
  ];

  const filters = ['All', 'Web App', 'Website', 'Dashboard'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-14 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Selected Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Real project examples that show the kind of practical work CoreAI Studio delivers.
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${
                  activeFilter === filter
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
            <p className="text-blue-800 text-sm text-center">
              <strong>Note:</strong> Where a project is still being developed, it is labelled honestly rather than presented as a completed client case study.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 mb-12 sm:mb-16">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group flex flex-col h-full"
            >
              <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white relative overflow-hidden min-h-[190px]`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>

                <div className="relative z-10">
                  <div className="text-sm font-semibold text-white/80 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-white/90 text-sm">{project.description}</p>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Details:</h4>
                  <div className="space-y-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="brand-btn brand-btn-secondary w-full mt-auto bg-gray-100 hover:bg-primary-600 hover:text-white text-gray-700 font-semibold py-3 px-6 rounded-lg group-hover:bg-primary-600 group-hover:text-white"
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a similar project for your business?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              If you need a website, app, dashboard or automation build, I can help scope the right approach.
            </p>
            <a href="/#contact" className="brand-btn brand-btn-primary bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold inline-block">
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className={`bg-gradient-to-r ${selectedProject.gradient} p-6 text-white relative`}>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
              >
                ×
              </button>
              <div>
                <div className="text-sm font-semibold text-white/80 mb-2">{selectedProject.category}</div>
                <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
                <p className="text-white/90 text-lg">{selectedProject.status}</p>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Challenge</h3>
                <p className="text-gray-600 leading-relaxed">{selectedProject.challenge}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Build</h3>
                <p className="text-gray-600 leading-relaxed">{selectedProject.solution}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Project Note</h3>
                <p className="text-gray-600 leading-relaxed">{selectedProject.note}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Details</h3>
                <div className="space-y-2">
                  {selectedProject.metrics.map((metric, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                      {metric}
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="brand-btn brand-btn-primary bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}