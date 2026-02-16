import { useState } from 'react';

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };
  
  return (
    <section className="py-24 lg:py-32 bg-white bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url(/images/image6.png)' }}>
      <div className="container-custom relative z-10">
        <div className="text-center mb-20 lg:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#003946] mb-6 lg:mb-8 leading-tight tracking-wide" style={{ fontFamily: 'SF Pro, Inter, sans-serif' }}>
            Where Spaces<br className="md:hidden" /> Come Alive
          </h2>
          <div className="w-56 md:w-96 h-[2px] bg-[#003946] mx-auto"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl aspect-[16/10] group">
            <img 
              src="/images/before.png" 
              alt="Before renovation"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            <div 
              className="absolute inset-0 overflow-hidden transition-all duration-300"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src="/images/after.png" 
                alt="After renovation"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            
            <div className="glass-card absolute top-6 left-6 text-white px-8 py-3 rounded-full text-base font-bold transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
              Before
            </div>
            
            <div className="glass-card absolute top-6 right-6 text-white px-8 py-3 rounded-full text-base font-bold transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
              After
            </div>
            
            <div 
              className="absolute inset-y-0 w-1 bg-white cursor-ew-resize shadow-2xl transition-all duration-300 group-hover:w-[6px]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-2xl flex items-center justify-center border-4 border-gray-100 transition-all duration-300 hover:scale-125 hover:rotate-90 hover:shadow-3xl">
                <img 
                  src="/images/left-right-arrow.png" 
                  alt="Drag to compare"
                  className="w-8 h-8"
                />
              </div>
            </div>
            
            <div 
              className="absolute inset-y-0 w-[4px] bg-white cursor-ew-resize shadow-2xl"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[56px] h-[56px] bg-white rounded-full shadow-2xl flex items-center justify-center border-2 border-gray-100 transition-all duration-300 hover:scale-110 hover:shadow-3xl">
                <img 
                  src="/images/left-right-arrow.png" 
                  alt="Drag to compare"
                  className="w-[28px] h-[28px]"
                />
              </div>
            </div>
            
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
              aria-label="Before and after comparison slider"
            />
          </div>
          
          <div className="text-center mt-12 lg:mt-16">
            <a 
              href="#gallery" 
              className="inline-block text-[#003946] hover:text-[#003946]/80 font-bold text-lg underline decoration-2 underline-offset-8 transition-all duration-300 hover:underline-offset-4 hover:scale-110"
            >
              View All
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
