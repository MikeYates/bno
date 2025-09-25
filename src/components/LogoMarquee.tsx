import Image from 'next/image';

const LogoMarquee = () => {
  const logos = [
    'https://img.icons8.com/color/48/lipstick.png',
    'https://img.icons8.com/color/48/mirror.png',
    'https://img.icons8.com/color/48/scissors.png',
    'https://img.icons8.com/color/48/hair-dryer.png',
    'https://img.icons8.com/color/48/makeup.png',
    'https://img.icons8.com/color/48/cream.png',
    'https://img.icons8.com/color/48/eyelash.png',
    'https://img.icons8.com/color/48/nail-polish.png',
  ];

  return (
    <div className="w-full overflow-hidden bg-gray-50 py-8">
      <div className="flex animate-marquee">
        {logos.concat(logos).map((logo, index) => (
          <div key={index} className="flex-shrink-0 mx-8">
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              width={48}
              height={48}
              unoptimized
              className="h-12 w-12 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoMarquee;