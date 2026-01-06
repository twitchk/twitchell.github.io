import { FileText, ExternalLink, Users, Calendar } from 'lucide-react'

const Publications = () => {
  const publications = [
    {
      title: "Integrating Travel Behavior Forecasting and Generative Modeling for Predicting Future Urban Mobility and Spatial Transformations",
      authors: ["Eugene Denteh", "Andrews Danyo", "Joshua Kofi Asamoah", "Blessing Agyei Kyem", "Twitchell Addai", "Armstrong Aboah"],
      venue: "arXiv preprint",
      year: "2025",
      doi: "arXiv:2503.21158",
      abstract: "Transportation planning plays a critical role in shaping urban development, economic mobility, and infrastructure sustainability. However, traditional planning methods often struggle to accurately predict long-term urban growth and transportation demands. This study integrates a Temporal Fusion Transformer to predict travel patterns from demographic data with a Generative Adversarial Network to predict future urban settings through satellite imagery. The framework achieved a 0.76 R-square score in travel behavior prediction and generated high-fidelity satellite images with a Structural Similarity Index of 0.81.",
      keywords: ["Transportation Planning", "Machine Learning", "Computer Vision", "Urban Development", "AI"],
      links: {
        arxiv: "https://arxiv.org/abs/2503.21158",
        scholar: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=u-IlxEAAAAAJ&citation_for_view=u-IlxEAAAAAJ:u-x6o8ySG0sC"
      },
      metrics: {
        rSquare: "0.76",
        ssim: "0.81"
      }
    }
  ]

  return (
    <section id="publications" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Research Publications
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Contributing to the advancement of transportation engineering and AI through peer-reviewed research
          </p>
        </div>

        <div className="space-y-8">
          {publications.map((paper, index) => (
            <div key={index} className="card">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-lg flex-shrink-0">
                    <FileText size={24} className="text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                      {paper.title}
                    </h3>
                    
                    {/* Authors */}
                    <div className="flex items-center gap-2 mb-2">
                      <Users size={16} className="text-gray-500" />
                      <p className="text-gray-600 text-sm">
                        {paper.authors.map((author, idx) => (
                          <span key={idx}>
                            {author === "Twitchell Addai" ? (
                              <strong className="text-primary-600">{author}</strong>
                            ) : (
                              author
                            )}
                            {idx < paper.authors.length - 1 && ", "}
                          </span>
                        ))}
                      </p>
                    </div>

                    {/* Venue and Year */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {paper.year}
                      </div>
                      <span>•</span>
                      <span>{paper.venue}</span>
                      <span>•</span>
                      <span className="font-mono text-xs bg-gray-100 px-2 py-1 rounded">
                        {paper.doi}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Abstract */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Abstract</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {paper.abstract}
                  </p>
                </div>

                {/* Key Results */}
                {paper.metrics && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-primary-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary-600 mb-1">
                        {paper.metrics.rSquare}
                      </div>
                      <div className="text-sm text-gray-600">
                        R-square Score in Travel Behavior Prediction
                      </div>
                    </div>
                    <div className="bg-primary-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary-600 mb-1">
                        {paper.metrics.ssim}
                      </div>
                      <div className="text-sm text-gray-600">
                        Structural Similarity Index for Generated Images
                      </div>
                    </div>
                  </div>
                )}

                {/* Keywords */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Keywords</h4>
                  <div className="flex flex-wrap gap-2">
                    {paper.keywords.map((keyword, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
                  <a
                    href={paper.links.arxiv}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    View on arXiv
                  </a>
                  <a
                    href={paper.links.scholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Google Scholar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Impact */}
        <div className="mt-16">
          <div className="card bg-gradient-to-r from-primary-50 to-primary-100 border-primary-200">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Research Impact
              </h3>
              <div className="max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">1</div>
                    <div className="text-gray-700">Published Papers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">6</div>
                    <div className="text-gray-700">Co-authors</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">2025</div>
                    <div className="text-gray-700">Latest Publication</div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-gray-700">
                    Contributing to cutting-edge research in transportation engineering, 
                    AI applications, and sustainable urban development solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Publications 