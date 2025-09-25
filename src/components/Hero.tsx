import { Figtree } from 'next/font/google';
import Image from 'next/image';
import DarkVeil from './DarkVeil';

const figtree = Figtree({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center">
      <div className="absolute inset-0 z-0">
        <DarkVeil hueShift={280} warpAmount={1.5} speed={1.5} />
      </div>
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-4">
          <Image
            src="/crown1.svg"
            alt="Crown Logo"
            width={96}
            height={96}
          />
        </div>
        <div className="flex justify-center mb-4">
          <span className="bg-[#801950]/10 text-white px-6 py-2 rounded-full text-base font-light shadow-lg border border-[#801950]/25" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
            Board Certified Plastic Surgeons
          </span>
        </div>
        <h1
          className={`mb-1 leading-none sm:leading-tight tracking-tight font-black text-white ${figtree.className}`}
          style={{
            fontSize: 'clamp(4rem, 8vw, 10rem)',
            textShadow: '2px 2px 6px rgba(0,0,0,0.7)'
          }}
        >
          B&O CLINICA
        </h1>
        <p
          className={`text-xl sm:text-2xl md:text-3xl mb-8 text-white ${figtree.className}`}
          style={{ textShadow: '3px 3px 8px rgba(0,0,0,0.6)', letterSpacing: '0.2em', lineHeight: '1.1' }}
        >
          BE THE BEST VERSION OF YOURSELF
        </p>
        <button
          className="px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-300 shadow-lg text-[#BCA77B]"
          style={{
            background: 'linear-gradient(135deg, #801950 0%, #601940 100%)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2), 0 1px 2px rgba(0,0,0,0.3)'
          }}
        >
          Book Consultation
        </button>
      </div>
    </section>
  );
};

export default Hero;