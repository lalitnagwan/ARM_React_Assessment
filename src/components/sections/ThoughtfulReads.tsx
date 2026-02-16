const articles = [
  { id: 1, image: '/images/image22.png', link: '#article-1' },
  { id: 2, image: '/images/image23.png', link: '#article-2' },
  { id: 3, image: '/images/image24.png', link: '#article-3' },
  { id: 4, image: '/images/image25.png', link: '#article-4' },
];

export default function ThoughtfulReads() {
  return (
    <section className="relative w-full">
      <div
        className="absolute top-0 left-0 w-full h-1/2 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/image6.png')" }}
      />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#003946]" />

      <div className="relative z-10 max-w-[1280px] mx-auto lg:px-8 pt-28 pb-28 lg:pt-36 lg:pb-36">
        <div className="absolute inset-0"></div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#003946] mb-6 lg:mb-8 leading-tight tracking-wide transition-all duration-500 hover:scale-105 hover:-translate-y-1" style={{ fontFamily: 'SF Pro, Inter, sans-serif' }}>
              Thoughtful Reads for<br className="md:hidden" /> Modern Living
            </h2>
            <div className="w-56 md:w-80 h-[2px] bg-[#003946] mx-auto mb-16 lg:mb-20 transition-all duration-500 hover:w-96"></div>
          </div>
        </div>

        <div className="lg:hidden flex gap-6 overflow-x-auto scrollbar-hide px-[12%] sm:px-[12%] mb-12 snap-x snap-mandatory">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.link}
              className="group flex-shrink-0 w-[75%] rounded-2xl overflow-hidden shadow-lg snap-center transition-all duration-500 hover:shadow-2xl hover:scale-105"
            >
              <img
                src={article.image}
                alt="Article Thumbnail"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </a>
          ))}
        </div>

        <div className="hidden lg:grid lg:grid-cols-4 gap-8 mb-16 mt-12">
          {articles.map((article) => (
            <a
              key={article.id}
              href={article.link}
              className="group block rounded-2xl overflow-hidden shadow-xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-3 hover:rotate-1 hover:scale-105"
            >
              <img
                src={article.image}
                alt="Article Thumbnail"
                className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
              />
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-block text-white font-bold text-lg border-b-2 border-white pb-1 hover:opacity-90 transition-all duration-300 hover:border-b-4 hover:pb-0 hover:scale-110 hover:tracking-wider"
          >
            <span className="lg:hidden">View All</span>
            <span className="hidden lg:inline">Explore More</span>
          </a>
        </div>
      </div>
    </section>
  );
}
