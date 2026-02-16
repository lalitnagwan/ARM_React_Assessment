import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const features = [
  {
    id: 1,
    icon: '/images/image1.png',
    title: 'Energy Efficient',
    description: 'Designed to enhance thermal performance while maintaining year-round indoor comfort.',
    color: '#2BAAE1',
    link: '#energy-efficient'
  },
  {
    id: 2,
    icon: '/images/image2.png',
    title: 'Noise Insulation',
    description: 'Carefully engineered to significantly reduce external noise and create serene living spaces.',
    color: 'bg-white',
    link: '#noise-insulation'
  },
  {
    id: 3,
    icon: '/images/image3.png',
    title: 'Rainwater Insulation',
    description: 'Precision sealing systems prevent water ingress, even during intense monsoon conditions.',
    color: 'bg-white',
    link: '#rainwater-insulation'
  },
  {
    id: 4,
    icon: '/images/image4.png',
    title: 'Storm Resistant',
    description: 'Tested to endure high wind loads and extreme weather with lasting reliable strength.',
    color: 'bg-white',
    link: '#storm-resistant'
  }
];

export default function DesignFeatures() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length);
  };
  
  return (
    <section className="py-24 lg:py-32" style={{ backgroundColor: '#E6F4FA' }}>
      <div className="container-custom">
        <div className="text-center mb-20 lg:mb-24">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#003946] mb-6 lg:mb-8 tracking-tight">
            Design. Performance. Longevity.
          </h2>
          <div className="w-56 md:w-96 h-[2px] bg-[#003946] mx-auto"></div>
        </div>
        
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature) => (
            <div
              key={feature.id}
              style={feature.id === 1 ? { backgroundColor: feature.color } : {}}
              className={`${feature.id === 1 ? '' : feature.color} ${feature.id === 1 ? 'text-white' : 'text-[#003946]'} rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 border-2 ${feature.id === 1 ? 'border-[#2BAAE1]' : 'border-[#E0E0E0]'} flex flex-col group cursor-pointer`}
            >
              <div className="flex justify-center mb-6 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-3">
                <img src={feature.icon} alt={feature.title} className="w-20 h-20 object-contain" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center transition-colors duration-300">{feature.title}</h3>
              <p className="text-sm mb-6 leading-relaxed text-center flex-grow opacity-90 group-hover:opacity-100 transition-opacity duration-300">{feature.description}</p>
              <div className="text-center">
                <a 
                  href={feature.link} 
                  className={`text-sm font-bold ${feature.id === 1 ? 'text-white' : 'text-[#008B8B]'} underline hover:no-underline transition-all duration-300 inline-flex items-center gap-1 group-hover:gap-3`}
                >
                  Learn More
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="hidden md:flex justify-center items-center gap-6 mt-20">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-3 bg-white rounded-full shadow-lg transition-all duration-300 border-2 border-gray-200 ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50 hover:shadow-2xl hover:scale-125 hover:-translate-x-1'}`}
            aria-label="Previous slide"
          >
            <FaArrowLeft className="text-gray-600 text-base" />
          </button>
          <div className="flex gap-3">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-[#003946] w-12' : 'bg-gray-300 w-3 hover:bg-gray-400 hover:w-6'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            disabled={currentSlide === features.length - 1}
            className={`p-3 bg-white rounded-full shadow-lg transition-all duration-300 border-2 border-gray-200 ${currentSlide === features.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50 hover:shadow-2xl hover:scale-125 hover:translate-x-1'}`}
            aria-label="Next slide"
          >
            <FaArrowRight className="text-gray-600 text-base" />
          </button>
        </div>
        
        <div className="md:hidden grid grid-cols-2 gap-4 mb-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`${feature.color.startsWith('#') ? 'bg-white' : feature.color} text-gray-800 rounded-xl p-4 border border-gray-300 shadow-sm flex flex-col`}
            >
              <div className="flex justify-center mb-3">
                <img src={feature.id === 1 ? '/images/image5.png' : feature.icon} alt={feature.title} className="w-12 h-12 object-contain" />
              </div>
              <h3 className="text-sm font-bold mb-2 text-center">{feature.title}</h3>
              <p className="text-[10px] mb-3 leading-snug text-center flex-grow">{feature.description}</p>
              <div className="text-center">
                <a 
                  href={feature.link} 
                  className={`text-[10px] font-medium text-teal-700 underline hover:no-underline`}
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="md:hidden flex justify-center items-center gap-3">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-1.5 bg-white rounded-full shadow-md transition-colors border border-gray-200 ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
            aria-label="Previous slide"
          >
            <FaArrowLeft className="text-gray-500 text-xs" />
          </button>
          <div className="flex gap-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all ${
                  currentSlide === index ? 'bg-gray-800 w-1.5' : 'bg-gray-300 w-1.5'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            disabled={currentSlide === features.length - 1}
            className={`p-1.5 bg-white rounded-full shadow-md transition-colors border border-gray-200 ${currentSlide === features.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'}`}
            aria-label="Next slide"
          >
            <FaArrowRight className="text-gray-500 text-xs" />
          </button>
        </div>
      </div>
    </section>
  );
}
