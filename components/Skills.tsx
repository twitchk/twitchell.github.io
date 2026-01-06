import { Code, Wrench, Brain, Cloud } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming & Development',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'MATLAB', level: 90 },
        { name: 'Web Development', level: 85 },
        { name: 'TypeScript/JavaScript', level: 80 },
        { name: 'Next.js/React', level: 75 }
      ]
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      skills: [
        { name: 'Machine Learning', level: 90 },
        { name: 'Computer Vision', level: 85 },
        { name: 'Model Training', level: 85 },
        { name: 'Large Language Models', level: 80 },
        { name: 'Statistical Modeling', level: 85 }
      ]
    },
    {
      icon: Wrench,
      title: 'Engineering & CAD',
      skills: [
        { name: 'AutoCAD', level: 90 },
        { name: 'SketchUp', level: 85 },
        { name: 'Mechanical Design', level: 95 },
        { name: 'Manufacturing Processes', level: 90 },
        { name: 'Boiler Systems', level: 95 }
      ]
    },
    {
      icon: Cloud,
      title: 'Technology & Systems',
      skills: [
        { name: 'Cloud Computing', level: 80 },
        { name: 'Computer Hardware', level: 90 },
        { name: 'Networking', level: 85 },
        { name: 'System Maintenance', level: 95 },
        { name: 'Robotics', level: 75 }
      ]
    }
  ]

  const conferences = [
    'Youth in AI: AI Applications in Modern Agriculture (2024)',
    'Youth in AI Summit (2024)',
    'Ghana Data Science Summit (IndabaX Ghana) (2024)'
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set spanning traditional engineering and modern AI technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <category.icon size={24} className="text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Conferences & Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Conferences */}
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Recent Conferences
            </h3>
            <div className="space-y-4">
              {conferences.map((conference, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">{conference}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Languages
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">English</span>
                <span className="text-sm bg-primary-100 text-primary-700 px-2 py-1 rounded">
                  Full Professional
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-medium">French</span>
                <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded">
                  Elementary
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 