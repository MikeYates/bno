import { Birthstone, Montserrat } from 'next/font/google';

const birthstone = Birthstone({
  weight: '400',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'],
});

const BentoGrid = () => {
  const services = [
    'Laser & Energy',
    'Skin Rejuvenation',
    'Breast & Body',
    'Injectables & Fillers'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white text-center mb-6">
        Precision and Care for <span className={`text-5xl md:text-6xl lg:text-7xl font-black text-[#BCA77B] ${birthstone.className}`}>Lasting Beauty</span>
      </h2>
      <p className={`text-lg md:text-xl text-white/80 text-center mb-12 max-w-3xl mx-auto ${montserrat.className}`}>
        We believe that every people deserve to be the best version of them self and taking care of your self is a way of self love.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/10 rounded-lg p-8 shadow-2xl flex flex-col justify-end items-start min-h-[350px] md:min-h-[500px] relative overflow-hidden"
            style={index === 0 ? { backgroundImage: 'url("/laser.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' } : index === 1 ? { backgroundImage: 'url("/skin.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' } : index === 2 ? { backgroundImage: 'url("/body.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' } : index === 3 ? { backgroundImage: 'url("/filler.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' } : {}}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white relative z-10">
              {service}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;