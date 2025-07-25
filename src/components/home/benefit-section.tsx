import { memo } from 'react';

function BenefitsSection() {
  const benefits = [
    {
      image:
        'https://images.unsplash.com/photo-1669950200209-69d8292c032f?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Pan-African Safari Network',
      title: 'Pan-African Platform',
      description:
        'Connect with safari operators across all major African destinations in one unified ecosystem.',
      bgClass: 'bg-white hover:bg-gray-50',
      borderClass: 'border-gray-200 hover:border-[#1B4332]',
      accentClass: 'bg-[#1B4332]',
    },
    {
      image:
        'https://images.unsplash.com/photo-1582035012007-22ae7cdcdeff?q=80&w=683&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Safari Industry Experts',
      title: 'Built by Safari Experts',
      description:
        'Designed from the ground up by people who live and breathe the safari industry daily.',
      bgClass: 'bg-white hover:bg-[#A7FFD9]/5',
      borderClass: 'border-gray-200 hover:border-[#A7FFD9]',
      accentClass: 'bg-[#A7FFD9]',
    },
    {
      image:
        'https://images.unsplash.com/photo-1645156568902-808a065943da?q=80&w=995&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Connected Safari Ecosystem',
      title: 'Complete Ecosystem Integration',
      description:
        'Seamlessly connects lodges, operators, travelers, and service providers in one platform.',
      bgClass: 'bg-white hover:bg-[#DAB785]/5',
      borderClass: 'border-gray-200 hover:border-[#DAB785]',
      accentClass: 'bg-[#DAB785]',
    },
    {
      image:
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0',
      alt: 'Secure Technology Platform',
      title: 'Enterprise-Grade Security',
      description:
        'Bank-level security with scalable infrastructure designed for global safari operations.',
      bgClass: 'bg-white hover:bg-gray-50',
      borderClass: 'border-gray-200 hover:border-[#1B4332]',
      accentClass: 'bg-[#1B4332]',
    },
    {
      image:
        'https://images.unsplash.com/photo-1739036868260-c26b292cd85d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'AI-Powered Safari Intelligence',
      title: 'Powered by Advanced AI',
      description:
        'Intelligent recommendations, dynamic pricing, and personalized experiences driven by machine learning.',
      bgClass: 'bg-white hover:bg-[#A7FFD9]/5',
      borderClass: 'border-gray-200 hover:border-[#A7FFD9]',
      accentClass: 'bg-[#A7FFD9]',
    },
    {
      image:
        'https://images.unsplash.com/photo-1508030592112-5b1661446db8?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Time-Saving Efficiency',
      title: 'Dramatic Time Savings',
      description:
        'Automate manual processes and reduce planning time from hours to minutes across the entire chain.',
      bgClass: 'bg-white hover:bg-[#DAB785]/5',
      borderClass: 'border-gray-200 hover:border-[#DAB785]',
      accentClass: 'bg-[#DAB785]',
    },
    {
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0',
      alt: 'Revenue Growth Analytics',
      title: 'Boost Revenue & Conversions',
      description:
        'Optimize pricing strategies and increase booking conversions with data-driven insights.',
      bgClass: 'bg-white hover:bg-gray-50',
      borderClass: 'border-gray-200 hover:border-[#1B4332]',
      accentClass: 'bg-[#1B4332]',
    },
    {
      image:
        'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0',
      alt: 'Safari Innovation Launch',
      title: 'Be Part of the Revolution',
      description:
        'Join the early adopters transforming how safari experiences are created and delivered.',
      bgClass: 'bg-white hover:bg-[#A7FFD9]/5',
      borderClass: 'border-gray-200 hover:border-[#A7FFD9]',
      accentClass: 'bg-[#A7FFD9]',
    },
  ];

  return (
    <section id="benefits" className="bg-gray-50 py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl leading-tight font-bold text-[#1B4332] sm:text-4xl lg:text-5xl">
            Built by people who live this industry.
            <br />
            <span className="text-[#1B4332]">
              Backed by people who want to grow it.
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
            Shuri Way isn't just another booking platform. It's a revolution
            designed from the ground up for safari.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group overflow-hidden rounded-2xl border shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg ${benefit.bgClass} ${benefit.borderClass}`}
            >
              {/* Image Header */}
              <div className="relative h-32 overflow-hidden">
                <img
                  src={benefit.image}
                  alt={benefit.alt}
                  className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="mb-3 text-lg leading-tight font-bold text-[#1B4332]">
                  {benefit.title}
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  {benefit.description}
                </p>

                {/* Accent line */}
                <div
                  className={`h-1 w-8 rounded-full transition-all duration-300 group-hover:w-12 ${benefit.accentClass}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(BenefitsSection);
