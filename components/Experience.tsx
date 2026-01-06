import { Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Graduate Research Assistant',
      company: 'North Dakota State University',
      location: 'Fargo, North Dakota, United States',
      period: 'January 2025 - Present',
      description: 'Pursuing M.S. in Civil Engineering with focus on Transportation Engineering. Research on cutting-edge solutions including Asset Management Systems and BisonGuard project, integrating UAVs, LiDAR, and AI for sustainable herd management.',
      highlights: [
        'Transportation data science and statistical modeling',
        'Machine learning applications in transportation',
        'AI-driven sustainable infrastructure solutions'
      ]
    },
    {
      title: 'Assistant Shift Miller',
      company: 'Flour Mills of Ghana Limited',
      location: 'Tema, Ghana',
      period: 'July 2024 - December 2024',
      description: 'Monitored milling equipment and made necessary adjustments to obtain maximum flour production and quality.',
      highlights: [
        'Monitored milling equipment for optimal flour production and quality',
        'Performed repairs on grain sifters, sieves, conveyor systems and grain elevators',
        'Managed chemical additives and fortificants dosing and adjustments'
      ]
    },
    {
      title: 'Maintenance Engineer',
      company: 'SRG & Temaplast Plastic Manufacturing Company',
      location: 'Tema, Ghana',
      period: 'March 2023 - June 2024',
      description: 'Performed routine maintenance, troubleshooting, and repair of mechanical equipment used in plastics manufacturing processes.',
      highlights: [
        'Maintained extruders, injection molding machines, and conveyor systems',
        'Troubleshooting and repair of complex manufacturing equipment',
        'Optimized production efficiency through preventive maintenance'
      ]
    },
    {
      title: 'Technical Manager',
      company: 'Lotus Global Petroleum Ghana Ltd',
      location: 'Accra, Ghana',
      period: 'January 2020 - August 2022',
      description: 'Played a pivotal role in optimizing vessel tracking and discharge processes while maintaining rigorous documentation.',
      highlights: [
        'Optimized vessel tracking and discharge operations',
        'Ensured quality and quantity accuracy during oil product importation',
        'Dual role as Company Secretary in strategic decision-making',
        'Managed computer hardware, software and networking systems'
      ]
    },
    {
      title: 'Technical Engineer',
      company: 'Essel Oil & Gas Co. Ltd. Ghana',
      location: 'Ghana',
      period: 'June 2019 - January 2020',
      description: 'Facilitated seamless importation of crude oil and refined products by meticulously handling documentation, quality control, and financial accuracy.',
      highlights: [
        'Handled documentation and quality control for oil imports',
        'Assisted Operations Manager with vessel tracking and discharge operations',
        'Ensured compliance with importation protocols'
      ]
    },
    {
      title: 'Boiler Engineer & Operator',
      company: 'Thai Union (Pioneer Food Cannery Ltd)',
      location: 'Tema, Ghana',
      period: 'September 2017 - February 2019',
      description: 'Efficiently operated and maintained fire tube boilers, ensuring consistent steam generation and adherence to safety standards.',
      highlights: [
        'Daily operation of fire tube boilers for steam generation',
        'Maintenance of boiler mountings and auxiliary units',
        'Chemical treatment of boiler feed water using specialized compounds',
        'Ensured safety standards and optimal boiler performance'
      ]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive journey through diverse engineering roles across multiple industries
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full transform -translate-x-2 md:-translate-x-2 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                } ml-12 md:ml-0`}>
                  <div className="card">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-primary-600 font-medium mb-2">
                          <Building size={16} />
                          {exp.company}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-gray-600 mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 