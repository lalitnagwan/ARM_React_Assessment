import { useState } from 'react';

const projects = [
  {
    id: 1,
    image: '/images/image13.png',
  },
  {
    id: 2,
    image: '/images/image14.png',
  },
  {
    id: 3,
    image: '/images/image15.png',
  },
  {
    id: 4,
    image: '/images/image16.png',
  }
];

export default function ProjectsGallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };
  
  return (
    <section className="relative overflow-hidden">
      <div 
        className="relative pt-28 pb-56 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/image6.png')" }}
      >
        <div className="absolute inset-0"></div>
        <div className="container-custom relative z-10">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#003946] mb-6 lg:mb-8 leading-tight tracking-wide" style={{ fontFamily: 'SF Pro, Inter, sans-serif' }}>
              Crafted for<br className="md:hidden" /> Iconic Spaces
            </h2>
            <div className="w-56 md:w-[500px] h-[2px] bg-[#003946] mx-auto"></div>
          </div>
        </div>
      </div>

      <div className="relative pt-56 pb-28 lg:pb-36 mt-16" style={{ backgroundColor: '#003946' }}>
        <div className="absolute left-0 right-0 -top-44 z-20 pb-20 md:pb-0">
          <div className="container-custom">
            <div className="hidden md:block">
              <div className="grid md:grid-cols-4 gap-8 px-4 mb-16">
                {projects.map((project) => (
                  <div key={project.id} className="rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 hover:scale-110 hover:-rotate-2 hover:shadow-3xl group">
                    <img 
                      src={project.image} 
                      alt='Project'
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                    />
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center items-center gap-8">
                <button
                  onClick={prevSlide}
                  className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-2xl hover:bg-gray-100 hover:scale-125 hover:-translate-x-2 transition-all duration-300"
                  aria-label="Previous slide"
                >
                  <img src="/images/left1.png" alt="Previous" className="w-6 h-6" />
                </button>
                
                <div className="flex gap-4">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-3 rounded-full transition-all duration-300 ${
                        currentSlide === index ? 'bg-white w-12' : 'bg-transparent border-2 border-white w-3 hover:w-8 hover:bg-white/50'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextSlide}
                  className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-2xl hover:bg-gray-100 hover:scale-125 hover:translate-x-2 transition-all duration-300"
                  aria-label="Next slide"
                >
                  <img src="/images/right1.png" alt="Next" className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="md:hidden overflow-x-auto px-4 scrollbar-hide">
              <div className="flex gap-6 pb-6">
                {projects.map((project) => (
                  <div key={project.id} className="flex-shrink-0 w-72 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={project.image} 
                      alt='Project'
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
}
