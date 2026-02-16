import { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Mr. Vinod Mittal',
    quote: 'Eternia is a good product and very attractive in design and also durable and is supplemented with brand image and trust of Aditya Birla Group. Absolute windows, Gurgoan is very hard working and nice person.',
  },
  {
    id: 2,
    name: 'Mr. Vinod Mittal',
    quote: 'Eternia is a good product and very attractive in design and also durable and is supplemented with brand image and trust of Aditya Birla Group. Absolute windows, Gurgoan is very hard working and nice person.',
  },
  {
    id: 3,
    name: 'Mr. Vinod Mittal',
    quote: 'Eternia is a good product and very attractive in design and also durable and is supplemented with brand image and trust of Aditya Birla Group. Absolute windows, Gurgoan is very hard working and nice person.',
  },
  {
    id: 4,
    name: 'Mr. Vinod Mittal',
    quote: 'Eternia is a good product and very attractive in design and also durable and is supplemented with brand image and trust of Aditya Birla Group. Absolute windows, Gurgoan is very hard working and nice person.',
  }
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-28 lg:py-36 text-white relative overflow-hidden" style={{ backgroundColor: '#003946' }}>
      <div className="container-custom">
        <div className="flex flex-col items-center mb-20 lg:mb-28">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 lg:mb-8 leading-tight tracking-wide" style={{ fontFamily: 'SF Pro, Inter, sans-serif' }}>
            What Our Customers<br className="md:hidden" /> Have to Say
          </h2>
          <div className="w-80 md:w-[500px] h-[2px] bg-white mx-auto"></div>
        </div>
        
        <div className="hidden md:block relative mb-12">
          <div className="overflow-hidden mx-auto" style={{ maxWidth: '1200px' }}>
            <div 
              className="flex transition-transform duration-700 ease-out gap-8"
              style={{ 
                transform: `translateX(calc(-${currentSlide * 25}% - ${currentSlide * 2}rem))`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0"
                  style={{ width: 'calc(25% - 24px)' }}
                >
                  <div className="glass-card rounded-2xl p-10 h-full transition-all duration-500 hover:scale-110 hover:-rotate-1 hover:shadow-2xl group">
                    <FaQuoteLeft className="text-5xl mb-8 text-white/70 transition-all duration-500 group-hover:scale-125 group-hover:text-white group-hover:rotate-12" />
                    <p className="text-base mb-10 leading-relaxed text-gray-200 group-hover:text-white transition-colors duration-300">{testimonial.quote}</p>
                    <div className="pt-6 border-t-2 border-white/20">
                      <p className="font-bold text-lg">{testimonial.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="md:hidden relative mb-[32px]">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div 
                    className="rounded-lg p-6"
                    style={{
                      background: 'rgba(0, 57, 70, 0.25)',
                      backdropFilter: 'blur(24px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.15)'
                    }}
                  >
                    <FaQuoteLeft className="text-4xl mb-4 text-white/70" />
                    <p className="text-sm mb-6 leading-relaxed text-gray-200">{testimonial.quote}</p>
                    <div className="pt-4 border-t border-white/20">
                      <p className="font-bold">{testimonial.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-[16px] mb-[32px]">
          <button
            onClick={prevSlide}
            className="bg-white rounded-full w-[48px] h-[48px] flex items-center justify-center shadow-lg hover:opacity-90 hover:scale-110 transition-all duration-300"
            aria-label="Previous slide"
          >
            <img src="/images/left1.png" alt="Previous" className="w-[20px] h-[20px]" />
          </button>
          
          <div className="flex gap-[8px]">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-[8px] rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white w-[32px]' : 'bg-transparent border border-white w-[8px] hover:w-[16px] hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="bg-white rounded-full w-[48px] h-[48px] flex items-center justify-center shadow-lg hover:opacity-90 hover:scale-110 transition-all duration-300"
            aria-label="Next slide"
          >
            <img src="/images/right1.png" alt="Next" className="w-[20px] h-[20px]" />
          </button>
        </div>
        
        <div className="text-center">
          <a href="#explore" className="text-white hover:text-gray-200 underline font-semibold underline-offset-4 transition-all duration-300 hover:underline-offset-8 hover:scale-105 inline-block">
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
}
