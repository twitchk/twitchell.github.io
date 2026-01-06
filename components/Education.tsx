import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'

const Education = () => {
  const education = [
    {
      degree: "Master's Degree in Civil Engineering",
      specialization: 'Transportation Engineering',
      institution: 'North Dakota State University',
      location: 'Fargo, North Dakota, United States',
      period: 'January 2025 - Present',
      description: 'Focusing on transportation data science, statistical modeling, and machine learning applications in transportation systems. Research includes the BisonGuard project integrating UAVs, LiDAR, and AI.',
      highlights: [
        'Transportation Engineering specialization',
        'AI and Machine Learning in Transportation',
        'BisonGuard project research',
        'Statistical modeling and data science'
      ]
    },
    {
      degree: 'BSc. Mechanical Engineering',
      specialization: 'Design, Manufacturing & Production',
      institution: 'Kwame Nkrumah University of Science and Technology',
      location: 'Kumasi, Ghana',
      period: 'September 2013 - July 2017',
      description: 'Comprehensive mechanical engineering program with specialization in design, manufacturing, and production processes.',
      highlights: [
        'Thesis: Design of A Plant Layout for Gas Cylinder Manufacturing',
        'Specialization in Design, Manufacturing & Production',
        'Strong foundation in mechanical systems',
        'Production management principles'
      ]
    },
    {
      degree: 'Certified Computer Hardware Technician',
      specialization: 'Computer and Information Sciences',
      institution: 'NIIT',
      location: 'Tema, Ghana',
      period: 'June 2013 - August 2013',
      description: 'Professional certification in computer hardware technology and support services.',
      highlights: [
        'Computer hardware diagnostics and repair',
        'System maintenance and troubleshooting',
        'Networking fundamentals',
        'Technical support services'
      ]
    },
    {
      degree: 'WASSCE Certificate',
      specialization: 'General Science',
      institution: 'Achimota School',
      location: 'Accra, Ghana',
      period: '2009 - 2013',
      description: 'West African Senior School Certificate Examination with focus on General Science subjects.',
      highlights: [
        'Strong foundation in science subjects',
        'Mathematics and Physics excellence',
        'Preparation for engineering studies',
        'Academic excellence recognition'
      ]
    }
  ]

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Education & Qualifications
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A strong academic foundation supporting continuous learning and professional growth
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="card">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Left Column - Icon and Basic Info */}
                <div className="md:col-span-1">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-100 rounded-lg flex-shrink-0">
                      <GraduationCap size={24} className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {edu.degree}
                      </h3>
                      {edu.specialization && (
                        <p className="text-primary-600 font-medium mb-2">
                          {edu.specialization}
                        </p>
                      )}
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Institution and Details */}
                <div className="md:col-span-2">
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {edu.institution}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Award size={16} />
                      Key Highlights
                    </h5>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {edu.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Interests */}
        <div className="mt-16">
          <div className="card bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Research Interests
              </h3>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Current Focus</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        Transportation Engineering & Smart Infrastructure
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        AI Applications in Modern Agriculture
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Future Goals</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        Large Language Models in Low-Resource Languages
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        Sustainable Transportation Systems
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education 