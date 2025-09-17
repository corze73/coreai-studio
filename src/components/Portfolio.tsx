'use client';

import { useState } from 'react';

interface CaseStudy {
  title: string;
  company?: string;
  industry?: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  before?: string;
  after?: string;
  results: {
    improvement: string;
    timeframe: string;
    cost: string;
  } | string[];
  testimonial: {
    quote: string;
    author: string;
    role?: string;
    position?: string;
    company: string;
  };
  gradient: string;
  tags: string[];
  metrics: string[];
  packageUsed?: string;
  clientType?: string;
  timeline?: string;
  beforeAfter?: {
    before: string;
    after: string;
  };
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const projects: CaseStudy[] = [
    {
      title: "Local Restaurant Content Boost",
      category: "Content Creation",
      description: "Transformed a local restaurant's online presence with our £75 Starter Blog Pack, generating engaging content that increased customer engagement.",
      metrics: [
        "10 Blog Posts Created",
        "150% Social Engagement",
        "40+ New Customers"
      ],
      tags: ["Starter Blog Pack", "£75", "Food & Beverage"],
      gradient: "from-primary-600 to-primary-700",
      packageUsed: "Starter Blog Pack (£75)",
      clientType: "Local Restaurant",
      timeline: "Delivered in 48 hours",
      challenge: "The restaurant struggled to create engaging content consistently. They needed blog posts about seasonal menus, local events, and food stories but lacked time and writing skills.",
      solution: "Using our £75 Starter Blog Pack, we created 10 engaging blog posts including seasonal menu highlights, local ingredient stories, chef interviews, and community event coverage. All content was SEO-optimized for local search.",
      results: [
        "150% increase in social media engagement",
        "40+ new customers in first month",
        "300% increase in website blog traffic",
        "Featured in local food blog roundup",
        "Improved Google My Business ranking"
      ],
      testimonial: {
        quote: "The blog posts were exactly what we needed! Professional quality at an unbeatable price. Our customers love reading about our seasonal ingredients and community involvement.",
        author: "Maria Rodriguez",
        position: "Owner",
        company: "Bella Vista Bistro"
      },
      beforeAfter: {
        before: "Sporadic social posts, no blog content, struggling to attract new customers",
        after: "Consistent, engaging content that tells their story and attracts food lovers"
      }
    },
    {
      title: "Tech Startup Visual Identity",
      category: "Design",
      description: "Created a complete brand identity for a fintech startup using our £95 Logo & Social Kit, establishing professional credibility in a competitive market.",
      metrics: [
        "Professional Logo Design",
        "5 Social Media Graphics",
        "50% Faster Brand Launch"
      ],
      tags: ["Logo & Social Kit", "£95", "Fintech"],
      gradient: "from-gray-600 to-gray-700",
      packageUsed: "Logo & Social Kit (£95)",
      clientType: "Fintech Startup",
      timeline: "Delivered in 24 hours",
      challenge: "A new fintech startup needed professional branding to gain investor confidence and customer trust. They had limited budget but needed to look established and trustworthy.",
      solution: "Our £95 Logo & Social Kit provided a sophisticated logo design, brand colors, and 5 professional social media graphics. We focused on conveying trust, innovation, and financial expertise through clean, modern design.",
      results: [
        "Professional brand identity established",
        "Successfully pitched to 3 investors",
        "40% increase in website conversions",
        "Featured in fintech startup roundup",
        "1000+ LinkedIn followers in first month"
      ],
      testimonial: {
        quote: "The logo and branding completely transformed how people perceive our startup. We went from looking like amateurs to a serious fintech company overnight. Best £95 we ever spent!",
        author: "James Chen",
        position: "Co-Founder",
        company: "PayFlow Solutions"
      },
      beforeAfter: {
        before: "Generic design, looked unprofessional, struggled with credibility",
        after: "Sophisticated brand identity that commands respect and trust"
      }
    },
    {
      title: "Consultancy Email Automation",
      category: "Automation",
      description: "Implemented our £125 Mini Automation package to streamline client follow-ups and lead nurturing for a growing consultancy business.",
      metrics: [
        "90% Time Saved on Follow-ups",
        "2 Workflows Automated",
        "300% More Consistent Contact"
      ],
      tags: ["Mini Automation", "£125", "Professional Services"],
      gradient: "from-gray-700 to-gray-800",
      packageUsed: "Mini Automation (£125)",
      clientType: "Business Consultancy",
      timeline: "Setup in 3 days",
      challenge: "A growing consultancy was losing potential clients due to inconsistent follow-up. Manual email management was taking 10+ hours per week and leads were falling through cracks.",
      solution: "We implemented 2 key automations: lead nurturing sequence for new prospects and client onboarding workflow. Automated welcome emails, follow-up reminders, and proposal delivery using their existing Gmail and calendar systems.",
      results: [
        "90% reduction in manual follow-up time",
        "300% more consistent client communication",
        "25% increase in proposal response rates",
        "Zero leads lost to poor follow-up",
        "£3,000 additional revenue in first month"
      ],
      testimonial: {
        quote: "The automation has been a game-changer! I'm no longer stressed about forgetting to follow up with prospects. The system handles everything professionally while I focus on delivering value to clients.",
        author: "Sarah Thompson",
        position: "Founder",
        company: "Strategic Growth Consulting"
      },
      beforeAfter: {
        before: "Manual follow-ups, lost leads, 10+ hours/week on email management",
        after: "Automated nurturing, zero lost leads, 1 hour/week email oversight"
      }
    },
    {
      title: "E-commerce Content Campaign",
      category: "Content Creation",
      description: "Scaled content production for an online store using multiple Starter Blog Packs, creating comprehensive product and lifestyle content.",
      metrics: [
        "25 Blog Posts",
        "200% Organic Traffic",
        "£15K Additional Revenue"
      ],
      tags: ["Multiple Blog Packs", "£225 Total", "E-commerce"],
      gradient: "from-primary-700 to-gray-700",
      packageUsed: "3x Starter Blog Packs (£225 total)",
      clientType: "Online Fashion Store",
      timeline: "Delivered over 6 weeks",
      challenge: "An online fashion store needed consistent content to improve SEO rankings and engage customers. They were struggling to create enough content to support their 50+ product categories.",
      solution: "We delivered 3 Starter Blog Packs over 6 weeks, creating style guides, seasonal trends articles, outfit inspiration posts, and product spotlights. Each pack focused on different product categories and seasonal themes.",
      results: [
        "200% increase in organic search traffic",
        "£15,000 additional revenue attributed to content",
        "40% improvement in average session duration",
        "Featured in fashion blog directories",
        "300% increase in email newsletter signups"
      ],
      testimonial: {
        quote: "The content strategy completely transformed our online presence. Our blog now drives significant traffic and sales. The quality is consistently excellent and our customers love the style advice.",
        author: "Emma Williams",
        position: "Marketing Director",
        company: "StyleHub Fashion"
      },
      beforeAfter: {
        before: "Minimal content, poor SEO rankings, low customer engagement",
        after: "Rich content library driving traffic, sales, and customer loyalty"
      }
    },
    {
      title: "Healthcare Practice Brand Refresh",
      category: "Design",
      description: "Modernized a dental practice's visual identity with our Logo & Social Kit, creating a more welcoming and professional patient experience.",
      metrics: [
        "Modern Brand Identity",
        "5 Marketing Graphics",
        "30% More Appointments"
      ],
      tags: ["Logo & Social Kit", "£95", "Healthcare"],
      gradient: "from-gray-500 to-gray-600",
      packageUsed: "Logo & Social Kit (£95)",
      clientType: "Dental Practice",
      timeline: "Delivered in 48 hours",
      challenge: "A family dental practice had outdated branding that made them look old-fashioned. They needed modern, welcoming visuals to attract younger families and compete with newer practices.",
      solution: "Created a fresh, modern logo with calming colors and friendly typography. Designed social media graphics for common dental topics, appointment reminders, and health tips that positioned them as caring and professional.",
      results: [
        "30% increase in new patient appointments",
        "Modern, welcoming brand perception",
        "Improved social media engagement by 180%",
        "Featured in local health directory",
        "Positive patient feedback on new look"
      ],
      testimonial: {
        quote: "The new branding makes such a difference! Patients comment on how professional and modern we look. We've seen a real uptick in new families choosing our practice.",
        author: "Dr. Michael Park",
        position: "Practice Owner",
        company: "Family Dental Care"
      },
      beforeAfter: {
        before: "Outdated logo, looked old-fashioned, struggled to attract young families",
        after: "Modern, welcoming brand that appeals to all age groups"
      }
    },
    {
      title: "Real Estate Lead Management",
      category: "Automation",
      description: "Automated lead qualification and follow-up processes for a busy real estate agent using our Mini Automation package.",
      metrics: [
        "80% Faster Lead Response",
        "2 Key Workflows",
        "£8K Extra Commission"
      ],
      tags: ["Mini Automation", "£125", "Real Estate"],
      gradient: "from-gray-600 to-primary-600",
      packageUsed: "Mini Automation (£125)",
      clientType: "Real Estate Agent",
      timeline: "Setup in 5 days",
      challenge: "A successful real estate agent was overwhelmed with lead management. Quick response times are crucial in real estate, but manual follow-up was causing delays and lost opportunities.",
      solution: "Implemented automated lead qualification surveys and instant response sequences. Created workflows for property viewing bookings and buyer/seller nurturing campaigns that integrate with their CRM and calendar.",
      results: [
        "80% faster initial lead response time",
        "£8,000 additional commission in 2 months",
        "50% improvement in lead-to-viewing conversion",
        "Zero missed follow-ups",
        "5 hours/week saved on admin tasks"
      ],
      testimonial: {
        quote: "The automation has transformed my business! I can respond to leads instantly even when I'm showing properties. My conversion rates have improved dramatically and I'm less stressed.",
        author: "Lisa Johnson",
        position: "Senior Agent",
        company: "Premier Properties"
      },
      beforeAfter: {
        before: "Slow lead response, missed opportunities, overwhelmed with admin",
        after: "Instant lead engagement, higher conversions, focused on selling"
      }
    }
  ];

  const filters = ['All', 'Content Creation', 'Design', 'Automation'];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AI Solution
            <span className="text-primary-600"> Examples</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the type of results our affordable AI packages can deliver for your business. 
            These examples showcase what's possible with our £75-£125 starter packages.
          </p>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
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
              <strong>Note:</strong> These are example scenarios to demonstrate the potential of our AI solutions. 
              Ready to create your own success story?
            </p>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Header with Gradient */}
              <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
                
                <div className="relative z-10">
                  <div className="text-sm font-semibold text-white/80 mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-white/90 text-sm">{project.description}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Metrics */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Results:</h4>
                  <div className="space-y-2">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
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

                {/* CTA */}
                <button 
                  onClick={() => setSelectedCaseStudy(project)}
                  className="w-full bg-gray-100 hover:bg-primary-600 hover:text-white text-gray-700 font-semibold py-3 px-6 rounded-lg transition-all duration-200 group-hover:bg-primary-600 group-hover:text-white"
                >
                  View Example
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Create Your Own Success Story?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              These examples show what's possible with our affordable AI packages. 
              Let's discuss how we can achieve similar results for your business.
            </p>
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Your Free AI Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className={`bg-gradient-to-r ${selectedCaseStudy.gradient} p-6 text-white relative`}>
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl"
              >
                ×
              </button>
              <div>
                <div className="text-sm font-semibold text-white/80 mb-2">{selectedCaseStudy.category}</div>
                <h2 className="text-2xl font-bold mb-2">{selectedCaseStudy.company || selectedCaseStudy.testimonial.company}</h2>
                <p className="text-white/90 text-lg">{selectedCaseStudy.title}</p>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Challenge */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Challenge</h3>
                <p className="text-gray-600 leading-relaxed">{selectedCaseStudy.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Our Solution</h3>
                <p className="text-gray-600 leading-relaxed">{selectedCaseStudy.solution}</p>
              </div>

              {/* Before & After */}
              {(selectedCaseStudy.before && selectedCaseStudy.after) || selectedCaseStudy.beforeAfter ? (
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Before & After</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-800 mb-2">Before</h4>
                      <p className="text-red-700 text-sm">
                        {selectedCaseStudy.before || selectedCaseStudy.beforeAfter?.before}
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">After</h4>
                      <p className="text-green-700 text-sm">
                        {selectedCaseStudy.after || selectedCaseStudy.beforeAfter?.after}
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}

              {/* Results */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Results</h3>
                {Array.isArray(selectedCaseStudy.results) ? (
                  <div className="space-y-2">
                    {selectedCaseStudy.results.map((result, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                        {result}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-primary-600 mb-1">{selectedCaseStudy.results.improvement}</div>
                      <div className="text-sm text-gray-600">Improvement</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-primary-600 mb-1">{selectedCaseStudy.results.timeframe}</div>
                      <div className="text-sm text-gray-600">Timeframe</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-primary-600 mb-1">{selectedCaseStudy.results.cost}</div>
                      <div className="text-sm text-gray-600">Investment</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Testimonial */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Example Client Feedback</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                    <p className="text-blue-800 text-sm">
                      <strong>Example Scenario:</strong> This represents the type of feedback and results our AI packages can deliver.
                    </p>
                  </div>
                  <p className="text-gray-700 italic text-lg mb-4">
                    "{selectedCaseStudy.testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {selectedCaseStudy.testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{selectedCaseStudy.testimonial.author}</div>
                      <div className="text-gray-600">{selectedCaseStudy.testimonial.role || selectedCaseStudy.testimonial.position}</div>
                      <div className="text-gray-500 text-sm">{selectedCaseStudy.company || selectedCaseStudy.testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <p className="text-gray-600 mb-4">Ready to achieve similar results for your business?</p>
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}