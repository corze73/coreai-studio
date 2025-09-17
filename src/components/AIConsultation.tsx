'use client';

import { useState } from 'react';

interface ConsultationQuestion {
  id: string;
  question: string;
  type: 'text' | 'select' | 'multi-select' | 'scale';
  options?: string[];
  required: boolean;
}

interface ServiceQuestions {
  [key: string]: {
    title: string;
    description: string;
    questions: ConsultationQuestion[];
  };
}

export default function AIConsultation({ 
  isOpen, 
  onClose, 
  serviceType 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  serviceType: string | null;
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: any }>({});
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  const [consultationReport, setConsultationReport] = useState<string | null>(null);

  const serviceQuestions: ServiceQuestions = {
    'content': {
      title: 'AI Content Creation Consultation',
      description: 'Help us understand your content needs to provide personalized recommendations.',
      questions: [
        {
          id: 'business_type',
          question: 'What type of business are you in?',
          type: 'select',
          options: ['E-commerce', 'SaaS/Tech', 'Professional Services', 'Healthcare', 'Finance', 'Education', 'Other'],
          required: true
        },
        {
          id: 'content_goals',
          question: 'What are your primary content goals?',
          type: 'multi-select',
          options: ['Increase website traffic', 'Generate leads', 'Build brand awareness', 'Educate customers', 'Improve SEO', 'Social media engagement'],
          required: true
        },
        {
          id: 'current_content_volume',
          question: 'How much content do you currently produce per month?',
          type: 'select',
          options: ['0-2 pieces', '3-5 pieces', '6-10 pieces', '11-20 pieces', '20+ pieces'],
          required: true
        },
        {
          id: 'content_types_needed',
          question: 'What types of content do you need?',
          type: 'multi-select',
          options: ['Blog posts', 'Social media posts', 'Email newsletters', 'Product descriptions', 'Website copy', 'Technical documentation'],
          required: true
        },
        {
          id: 'current_pain_points',
          question: 'What are your biggest content creation challenges?',
          type: 'multi-select',
          options: ['Takes too much time', 'Lack of ideas', 'Inconsistent quality', 'Too expensive', 'Difficulty with SEO', 'Writer availability'],
          required: true
        },
        {
          id: 'budget_range',
          question: 'What\'s your monthly content budget range?',
          type: 'select',
          options: ['Under £200', '£200-£500', '£500-£1000', '£1000-£2000', '£2000+'],
          required: true
        },
        {
          id: 'timeline_urgency',
          question: 'How quickly do you need to start seeing results?',
          type: 'select',
          options: ['Immediately', 'Within 1 week', 'Within 1 month', 'Within 3 months', 'No rush'],
          required: true
        }
      ]
    },
    'design': {
      title: 'AI Design Solutions Consultation',
      description: 'Let us understand your design needs to create the perfect visual identity.',
      questions: [
        {
          id: 'business_stage',
          question: 'What stage is your business in?',
          type: 'select',
          options: ['Just starting (need everything)', 'Established (rebranding)', 'Growing (expanding assets)', 'Mature (refreshing look)'],
          required: true
        },
        {
          id: 'design_priorities',
          question: 'What design elements are most important to you?',
          type: 'multi-select',
          options: ['Professional logo', 'Social media graphics', 'Website visuals', 'Print materials', 'Brand guidelines', 'Marketing materials'],
          required: true
        },
        {
          id: 'brand_personality',
          question: 'How would you describe your brand personality?',
          type: 'multi-select',
          options: ['Professional & Corporate', 'Creative & Artistic', 'Modern & Tech-savvy', 'Friendly & Approachable', 'Luxurious & Premium', 'Fun & Playful'],
          required: true
        },
        {
          id: 'color_preferences',
          question: 'Do you have any color preferences or restrictions?',
          type: 'text',
          required: false
        },
        {
          id: 'design_inspiration',
          question: 'Are there any brands whose design you admire?',
          type: 'text',
          required: false
        },
        {
          id: 'current_design_assets',
          question: 'What design assets do you currently have?',
          type: 'multi-select',
          options: ['Logo', 'Business cards', 'Website', 'Social media graphics', 'Nothing yet', 'Other'],
          required: true
        },
        {
          id: 'budget_range',
          question: 'What\'s your design budget range?',
          type: 'select',
          options: ['Under £200', '£200-£500', '£500-£1000', '£1000+'],
          required: true
        }
      ]
    },
    'automation': {
      title: 'Business Automation Consultation',
      description: 'Help us identify the best automation opportunities for your business.',
      questions: [
        {
          id: 'business_size',
          question: 'How many people work in your business?',
          type: 'select',
          options: ['Just me', '2-5 people', '6-20 people', '21-50 people', '50+ people'],
          required: true
        },
        {
          id: 'time_wasting_tasks',
          question: 'What repetitive tasks waste the most time?',
          type: 'multi-select',
          options: ['Email management', 'Social media posting', 'Data entry', 'Report generation', 'Customer follow-ups', 'Appointment scheduling'],
          required: true
        },
        {
          id: 'current_tools',
          question: 'What business tools do you currently use?',
          type: 'multi-select',
          options: ['Email (Gmail/Outlook)', 'CRM (Salesforce/HubSpot)', 'Social media platforms', 'Accounting software', 'Project management tools', 'None'],
          required: true
        },
        {
          id: 'automation_goals',
          question: 'What do you hope to achieve with automation?',
          type: 'multi-select',
          options: ['Save time', 'Reduce errors', 'Improve customer service', 'Scale operations', 'Cut costs', 'Better organization'],
          required: true
        },
        {
          id: 'time_saved_value',
          question: 'How many hours per week could you save with better automation?',
          type: 'select',
          options: ['1-5 hours', '6-10 hours', '11-20 hours', '20+ hours'],
          required: true
        },
        {
          id: 'technical_comfort',
          question: 'How comfortable are you with technology?',
          type: 'scale',
          options: ['1', '2', '3', '4', '5'],
          required: true
        },
        {
          id: 'budget_range',
          question: 'What\'s your automation budget range?',
          type: 'select',
          options: ['Under £300', '£300-£600', '£600-£1000', '£1000+'],
          required: true
        }
      ]
    }
  };

  const currentQuestions = serviceType && serviceQuestions[serviceType] ? serviceQuestions[serviceType].questions : [];
  const currentServiceInfo = serviceType && serviceQuestions[serviceType] ? serviceQuestions[serviceType] : null;

  const handleAnswerChange = (questionId: string, value: any) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const generateConsultationReport = async () => {
    setIsGeneratingReport(true);
    
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Generate a personalized report based on answers
    const report = generatePersonalizedReport(answers, serviceType || '');
    setConsultationReport(report);
    setIsGeneratingReport(false);
  };

  const generatePersonalizedReport = (answers: any, service: string): string => {
    // This would typically call an AI service, but for now we'll generate based on logic
    let report = '';
    
    if (service === 'content') {
      report = `# Your Personalized Content Strategy Report

## Business Analysis
Based on your responses, you're in the **${answers.business_type || 'business'}** sector and currently produce **${answers.current_content_volume || 'limited'}** content monthly.

## Recommended Solution
Given your goals of **${Array.isArray(answers.content_goals) ? answers.content_goals.join(', ') : 'improving content'}** and budget of **${answers.budget_range || 'flexible'}**, we recommend:

**🎯 Starter Blog Pack (£75)** - Perfect for getting started with 5-10 high-quality pieces
- Addresses your pain points: ${Array.isArray(answers.current_pain_points) ? answers.current_pain_points.join(', ') : 'content challenges'}
- Focus on: ${Array.isArray(answers.content_types_needed) ? answers.content_types_needed.slice(0,3).join(', ') : 'key content types'}

## Timeline
Since you need results **${answers.timeline_urgency || 'soon'}**, we can deliver your first content within 48 hours.

## Next Steps
1. Order your Starter Blog Pack
2. Provide brand guidelines and topics
3. Receive your content within 48 hours
4. Scale up based on results

*This consultation saved you 30 minutes while providing the same insights!*`;
    } else if (service === 'design') {
      report = `# Your Personalized Design Strategy Report

## Brand Analysis
Your business is in the **${answers.business_stage || 'development'}** stage with a **${Array.isArray(answers.brand_personality) ? answers.brand_personality.join(' & ') : 'professional'}** personality.

## Recommended Solution
Based on your priorities: **${Array.isArray(answers.design_priorities) ? answers.design_priorities.join(', ') : 'visual identity'}** and budget **${answers.budget_range || 'flexible'}**:

**🎨 Logo & Social Kit (£95)** - Complete visual foundation
- Professional logo design
- 5 social media graphics
- Brand color scheme
- Perfect for your current assets: ${Array.isArray(answers.current_design_assets) ? answers.current_design_assets.join(', ') : 'starting fresh'}

## Design Direction
- Style: ${Array.isArray(answers.brand_personality) ? answers.brand_personality[0] : 'Professional'}
- Color preferences: ${answers.color_preferences || 'We\'ll provide options'}
- Inspiration: ${answers.design_inspiration || 'Clean, modern approach'}

## Next Steps
1. Order your Logo & Social Kit
2. Complete brand questionnaire
3. Receive designs within 24-48 hours
4. Request revisions if needed

*AI consultation completed in minutes, not hours!*`;
    } else if (service === 'automation') {
      report = `# Your Personalized Automation Strategy Report

## Business Analysis
Team size: **${answers.business_size || 'small team'}** with **${answers.technical_comfort || '3'}/5** technical comfort level.

## Biggest Opportunities
Your top time-wasters: **${Array.isArray(answers.time_wasting_tasks) ? answers.time_wasting_tasks.join(', ') : 'repetitive tasks'}**
Potential time savings: **${answers.time_saved_value || '5-10 hours'}** per week

## Recommended Solution
Budget: **${answers.budget_range || 'flexible'}** - We recommend:

**⚡ Mini Automation (£125)** - Perfect starting point
- Automate your top 2 time-wasting tasks
- Integrate with: ${Array.isArray(answers.current_tools) ? answers.current_tools.slice(0,2).join(', ') : 'your existing tools'}
- Goals: ${Array.isArray(answers.automation_goals) ? answers.automation_goals.slice(0,3).join(', ') : 'efficiency gains'}

## Expected Results
- Save ${answers.time_saved_value || '5-10 hours'} per week
- Reduce errors by 80%
- ROI within first month

## Implementation
1. Order Mini Automation package
2. Strategy call to map workflows
3. Setup within 3-5 days
4. Training and handover

*Automated consultation = faster results!*`;
    }
    
    return report;
  };

  const nextStep = () => {
    if (currentStep < currentQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      generateConsultationReport();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {consultationReport ? 'Your AI Consultation Report' : (currentServiceInfo?.title || 'AI Consultation')}
              </h2>
              <p className="text-gray-600 mt-1">
                {consultationReport ? 'Personalized recommendations ready!' : (currentServiceInfo?.description || 'Get instant, personalized recommendations')}
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
          </div>
          
          {!consultationReport && !isGeneratingReport && (
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>Question {currentStep + 1} of {currentQuestions.length}</span>
                <span>{Math.round(((currentStep + 1) / currentQuestions.length) * 100)}% complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / currentQuestions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {consultationReport ? (
            /* Final Report */
            <div className="space-y-6">
              <div className="prose max-w-none">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <svg className="w-6 h-6 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold text-green-800">Consultation Complete!</span>
                  </div>
                </div>
                
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {consultationReport}
                </div>
              </div>
              
              <div className="flex gap-4 pt-6 border-t">
                <button 
                  onClick={() => {
                    // Navigate to pricing or order
                    onClose();
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Order Recommended Package
                </button>
                <button 
                  onClick={onClose}
                  className="flex-1 border-2 border-gray-300 hover:border-primary-600 text-gray-700 hover:text-primary-600 py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  Get Quote for Custom Solution
                </button>
              </div>
            </div>
          ) : isGeneratingReport ? (
            /* Loading State */
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary-600 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analyzing Your Needs...</h3>
              <p className="text-gray-600">Our AI is generating personalized recommendations based on your responses.</p>
            </div>
          ) : currentQuestions.length > 0 ? (
            /* Question Form */
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {currentQuestions[currentStep]?.question}
                </h3>
                
                {currentQuestions[currentStep]?.type === 'select' && (
                  <div className="space-y-2">
                    {currentQuestions[currentStep]?.options?.map((option) => (
                      <label key={option} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name={currentQuestions[currentStep].id}
                          value={option}
                          checked={answers[currentQuestions[currentStep].id] === option}
                          onChange={(e) => handleAnswerChange(currentQuestions[currentStep].id, e.target.value)}
                          className="mr-3"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                )}

                {currentQuestions[currentStep]?.type === 'multi-select' && (
                  <div className="space-y-2">
                    {currentQuestions[currentStep]?.options?.map((option) => (
                      <label key={option} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={Array.isArray(answers[currentQuestions[currentStep].id]) && answers[currentQuestions[currentStep].id].includes(option)}
                          onChange={(e) => {
                            const current = Array.isArray(answers[currentQuestions[currentStep].id]) ? answers[currentQuestions[currentStep].id] : [];
                            if (e.target.checked) {
                              handleAnswerChange(currentQuestions[currentStep].id, [...current, option]);
                            } else {
                              handleAnswerChange(currentQuestions[currentStep].id, current.filter((item: string) => item !== option));
                            }
                          }}
                          className="mr-3"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                )}

                {currentQuestions[currentStep]?.type === 'text' && (
                  <textarea
                    value={answers[currentQuestions[currentStep].id] || ''}
                    onChange={(e) => handleAnswerChange(currentQuestions[currentStep].id, e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent"
                    rows={3}
                    placeholder="Type your answer here..."
                  />
                )}

                {currentQuestions[currentStep]?.type === 'scale' && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Not comfortable</span>
                    <div className="flex space-x-2">
                      {currentQuestions[currentStep]?.options?.map((option) => (
                        <label key={option} className="flex flex-col items-center cursor-pointer">
                          <input
                            type="radio"
                            name={currentQuestions[currentStep].id}
                            value={option}
                            checked={answers[currentQuestions[currentStep].id] === option}
                            onChange={(e) => handleAnswerChange(currentQuestions[currentStep].id, e.target.value)}
                            className="mb-1"
                          />
                          <span className="text-sm">{option}</span>
                        </label>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">Very comfortable</span>
                  </div>
                )}
              </div>

              {/* Navigation */}
              <div className="flex justify-between pt-6 border-t">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                
                <button
                  onClick={nextStep}
                  disabled={currentQuestions[currentStep]?.required && !answers[currentQuestions[currentStep].id]}
                  className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {currentStep === currentQuestions.length - 1 ? 'Generate Report' : 'Next'}
                </button>
              </div>
            </div>
          ) : (
            /* No Service Selected */
            <div className="text-center py-12">
              <p className="text-gray-600">Please select a service to begin your consultation.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}