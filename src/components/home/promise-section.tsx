import { memo } from 'react';

function PromiseSection() {
  const roles = [
    {
      image:
        'https://images.unsplash.com/photo-1588557132645-ff567110cafd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Safari Lodge',
      title: 'Lodge Owners',
      description: 'Get direct bookings, manage guests, and grow smarter.',
      bgClass: 'bg-white hover:bg-gray-50',
      borderClass: 'border-gray-200 hover:border-[#1B4332]',
      textColorClass: 'group-hover:text-[#1B4332]',
      accentClass: 'bg-[#1B4332]',
    },
    {
      image:
        'https://images.unsplash.com/photo-1527780338772-bf4f87155378?q=80&w=770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Tour Operator',
      title: 'Tour Operators',
      description: 'Build trips faster, quote cleaner, and wow your clients.',
      bgClass: 'bg-white hover:bg-[#A7FFD9]/5',
      borderClass: 'border-gray-200 hover:border-[#A7FFD9]',
      textColorClass: 'group-hover:text-[#1B4332]',
      accentClass: 'bg-[#A7FFD9]',
    },
    {
      image:
        'https://images.unsplash.com/photo-1496886685427-450a50a56a51?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Safari Travelers',
      title: 'Travelers',
      description: 'Discover, customize, and book unforgettable journeys.',
      bgClass: 'bg-white hover:bg-[#DAB785]/5',
      borderClass: 'border-gray-200 hover:border-[#DAB785]',
      textColorClass: 'group-hover:text-[#1B4332]',
      accentClass: 'bg-[#DAB785]',
    },
    {
      image:
        'https://images.unsplash.com/photo-1680789076643-180e62aa5575?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Safari Service Provider',
      title: 'Service Providers',
      description: "Get found and booked by the industry's best.",
      bgClass: 'bg-white hover:bg-gray-50',
      borderClass: 'border-gray-200 hover:border-[#1B4332]',
      textColorClass: 'group-hover:text-[#1B4332]',
      accentClass: 'bg-[#1B4332]',
    },
  ];

  return (
    <section id="promise" className="bg-white py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl leading-tight font-bold text-[#1B4332] sm:text-4xl lg:text-5xl">
            One platform. Every player.
            <br />
            <span className="text-[#1B4332]">Total safari harmony.</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Shuri Way brings every part of the safari industry into one
            ecosystem — powered by Shuri AI to help you plan faster, sell
            smarter, and personalize like never before
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {roles.map((role, index) => (
            <div
              key={index}
              className={`group overflow-hidden rounded-2xl border shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${role.bgClass} ${role.borderClass}`}
            >
              <div className="flex h-48 lg:h-56">
                <div className="relative w-2/5 overflow-hidden">
                  <img
                    src={role.image}
                    alt={role.alt}
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent"></div>
                </div>

                <div className="flex w-3/5 flex-col justify-center p-6 lg:p-8">
                  <h3
                    className={`mb-3 text-xl font-bold text-[#1B4332] transition-colors duration-300 lg:text-2xl ${role.textColorClass}`}
                  >
                    {role.title}
                  </h3>

                  <p className="mb-4 text-base leading-relaxed text-gray-600 lg:text-lg">
                    {role.description}
                  </p>

                  <div
                    className={`h-1 w-12 rounded-full transition-all duration-300 group-hover:w-16 ${role.accentClass}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(PromiseSection);
