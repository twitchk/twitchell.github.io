import { Target, Users, Award, Lightbulb } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Research Focus',
      description: 'Transportation Engineering, Urban Mobility Prediction, and AI Applications in Modern Agriculture'
    },
    {
      icon: Users,
      title: 'Leadership',
      description: 'Technical Manager with experience in high-level negotiations and strategic decisions'
    },
    {
      icon: Award,
      title: 'Experience',
      description: '6+ years in transportation, oil & gas, manufacturing, food industries and web development'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Creating Large Language Models in low-resource Ghanaian languages'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A passionate engineer bridging the gap between traditional mechanical engineering 
            and cutting-edge AI technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">
                Professional Journey
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I am a hardworking Civil & Mechanical Engineer with 6 years of experience performing diverse 
                technical and maintenance roles. My academic foundation, combined with hands-on experience, 
                has equipped me with a comprehensive understanding of civil & mechanical systems, manufacturing 
                processes, and production management principles.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Currently pursuing my Master&apos;s degree in Civil Engineering with a focus on Transportation 
                Engineering at North Dakota State University, I am passionate about integrating AI and 
                machine learning technologies into traditional engineering solutions.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My research interests include creating AI applications in modern transportation & agriculture systems
                and Large Language Models in low-resource Ghanaian languages.
              </p>
            </div>

            <div className="pt-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Core Values</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  Self-motivated with passion and determination
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  Commitment to continuous learning and innovation
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  Focus on sustainable and smart infrastructure solutions
                </li>
              </ul>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="card text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                  <item.icon size={24} className="text-primary-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 