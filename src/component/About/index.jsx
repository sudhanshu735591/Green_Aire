import { useEffect, useRef } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useNavigate } from 'react-router-dom';

export default function About() {
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  // Highcharts configuration
  const chartOptions = {
    chart: {
      type: 'line',
      backgroundColor: 'transparent',
      height: (window.innerWidth < 768) ? '250px' : '300px' // Smaller on mobile
    },
    title: {
      text: 'Our Growth Journey',
      style: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: (window.innerWidth < 768) ? '16px' : null
      }
    },
    xAxis: {
      categories: ['2020', '2021', '2022', '2023', '2024'],
      labels: {
        style: {
          color: 'white',
          fontSize: (window.innerWidth < 768) ? '10px' : null
        }
      }
    },
    yAxis: {
      title: {
        text: 'Projects Completed',
        style: {
          color: 'white',
          fontSize: (window.innerWidth < 768) ? '10px' : null
        }
      },
      labels: {
        style: {
          color: 'white',
          fontSize: (window.innerWidth < 768) ? '10px' : null
        }
      },
      gridLineColor: 'rgba(255, 255, 255, 0.1)'
    },
    legend: {
      itemStyle: {
        color: 'white',
        fontSize: (window.innerWidth < 768) ? '10px' : null
      }
    },
    series: [{
      name: 'Projects',
      data: [10, 35, 75, 120, 200],
      color: '#4FD1C5',
      lineWidth: 3,
      marker: {
        radius: (window.innerWidth < 768) ? 4 : 6,
        symbol: 'circle'
      }
    }, {
      name: 'Clients',
      data: [5, 15, 30, 45, 60],
      color: '#4299E1',
      lineWidth: 3,
      marker: {
        radius: (window.innerWidth < 768) ? 4 : 6,
        symbol: 'circle'
      }
    }],
    credits: {
      enabled: false
    },
    plotOptions: {
      series: {
        marker: {
          fillColor: '#FFFFFF',
          lineWidth: 2,
          lineColor: null // inherit from series
        }
      }
    }
  };

  return (
    <>
      <Header />
        <title>About Us | Your Company Name</title>
        <meta name="description" content="Learn more about our company and team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10"
      ></canvas>

      <div className="min-h-screen py-10  flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl w-full space-y-8 md:space-y-10">
          {/* Hero Section */}
          <div className='text-center'>
            <h1 className="text-3xl md:text-4xl lg:text-5xl animate-bounce font-bold mb-4 md:mb-6">
              <span className="uppercase  text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-x">
                Our Success Story
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mx-auto text-black max-w-3xl">
              We're revolutionizing the digital landscape with innovative solutions that {" "}
              <span className="block md:inline-block">
                <span className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-1 text-blue-400">
                  Inspire,
                </span>
              </span>
              <span className="block md:inline-block">
                <span className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-1 text-purple-400">
                  Transform,
                </span>
              </span>
              <span className="block md:inline-block">
                <span className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-1 text-green-400">
                  and Elevate.
                </span>
              </span>
            </p>
          </div>

          {/* Who We Are Section */}
          <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Floating gradient orbs */}
              <div className="absolute -left-20 -top-20 w-64 h-64 md:w-96 md:h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-float-orb" />
              <div className="absolute -right-20 md:-right-40 top-1/3 w-64 h-64 md:w-80 md:h-80 bg-indigo-600/20 rounded-full filter blur-3xl animate-float-orb-reverse" />
              <div className="absolute left-1/4 md:left-1/3 bottom-20 w-48 h-48 md:w-64 md:h-64 bg-blue-600/15 rounded-full filter blur-3xl animate-float-orb-slow" />

              {/* Subtle grid pattern */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
            </div>

            {/* Glass morphism container */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
                {/* Left Column - Text Content */}
                <div className="space-y-6 md:space-y-8 backdrop-blur-sm bg-white/5 rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl shadow-indigo-900/30">
                  <style>
                    {`
                      @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                      }
                      @keyframes slideUp {
                        from { 
                          transform: translateY(20px);
                          opacity: 0;
                        }
                        to { 
                          transform: translateY(0);
                          opacity: 1;
                        }
                      }
                      @keyframes floatOrb {
                        0%, 100% { transform: translate(0, 0); }
                        50% { transform: translate(10px, -15px); }
                      }
                      @keyframes floatOrbReverse {
                        0%, 100% { transform: translate(0, 0); }
                        50% { transform: translate(-10px, 15px); }
                      }
                      @keyframes floatOrbSlow {
                        0%, 100% { transform: translate(0, 0); }
                        50% { transform: translate(5px, -10px); }
                      }
                      @keyframes textGlow {
                        0%, 100% { text-shadow: 0 0 10px rgba(165,180,252,0.5); }
                        50% { text-shadow: 0 0 15px rgba(165,180,252,0.8); }
                      }
                      .animate-fade-in {
                        animation: fadeIn 1.2s ease-out forwards;
                      }
                      .animate-slide-up {
                        animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                      }
                      .animate-float-orb {
                        animation: floatOrb 15s ease-in-out infinite;
                      }
                      .animate-float-orb-reverse {
                        animation: floatOrbReverse 18s ease-in-out infinite;
                      }
                      .animate-float-orb-slow {
                        animation: floatOrbSlow 20s ease-in-out infinite;
                      }
                      .animate-text-glow {
                        animation: textGlow 4s ease-in-out infinite;
                      }
                    `}
                  </style>

                  <div className="overflow-hidden">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                      <span className="block overflow-hidden">
                        <span
                          className="inline-block animate-slide-up"
                          style={{ animationDelay: '0.2s' }}
                        >
                          Transforming
                        </span>
                      </span>
                      <span className="block overflow-hidden">
                        <span
                          className="inline-block animate-slide-up text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 animate-text-glow"
                          style={{ animationDelay: '0.4s' }}
                        >
                          Sustainable Futures
                        </span>
                      </span>
                    </h1>
                  </div>
                  <p className="text-base md:text-lg lg:text-xl text-indigo-100/80 leading-relaxed">
                    <span className="block overflow-hidden mb-3 md:mb-4">
                      <span
                        className="inline-block animate-slide-up"
                        style={{ animationDelay: '0.6s' }}
                      >
                        We pioneer eco-conscious technology solutions that
                      </span>
                    </span>
                    <span className="block overflow-hidden">
                      <span
                        className="inline-block animate-slide-up"
                        style={{ animationDelay: '0.8s' }}
                      >
                        harmonize innovation with environmental stewardship.
                      </span>
                    </span>
                  </p>

                  <div className="flex flex-wrap gap-3 md:gap-4 mt-6 md:mt-10">
                    <button
                      className="px-6 py-2.5 md:px-8 md:py-3.5 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.03] animate-slide-up"
                      style={{ animationDelay: '1s' }}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-sm md:text-base">Discover Solutions</span>
                        <svg className="w-3 h-3 md:w-4 md:h-4 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </button>
                    <button
                      className="px-6 py-2.5 md:px-8 md:py-3.5 bg-transparent text-indigo-100 border border-indigo-400/30 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.03] hover:bg-white/5 animate-slide-up"
                      style={{ animationDelay: '1.1s' }}
                    >
                      <span className="flex items-center gap-2">
                        <span className="text-sm md:text-base">Our Approach</span>
                        <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>

                {/* Right Column - Interactive Card */}
                <div className="relative h-full min-h-[400px] md:min-h-[500px] group perspective-1000">
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-purple-900/50 rounded-3xl shadow-2xl overflow-hidden border border-indigo-400/20 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:rotate-y-12"
                    style={{
                      transformStyle: 'preserve-3d',
                      backdropFilter: 'blur(16px)'
                    }}
                  >
                    {/* Floating elements inside card */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 md:w-40 md:h-40 bg-purple-500/10 rounded-full filter blur-xl animate-float-orb-slow" />
                    <div className="absolute bottom-5 left-5 w-24 h-24 md:w-32 md:h-32 bg-indigo-500/10 rounded-full filter blur-xl animate-float-orb-reverse" />

                    {/* Card content */}
                    <div className="absolute inset-0 p-4 md:p-8 flex flex-col">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 animate-fade-in" style={{ animationDelay: '1.2s' }}>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">
                          Environmental Impact
                        </span>
                      </h3>

                      <div className="flex-1 flex items-center justify-center">
                        <div
                          className="w-full h-56 md:h-64 bg-indigo-900/30 rounded-xl border border-indigo-400/20 p-2 md:p-4 animate-fade-in"
                          style={{ animationDelay: '1.4s' }}
                        >
                          <HighchartsReact
                            highcharts={Highcharts}
                            options={chartOptions}
                            containerProps={{
                              style: {
                                height: '100%',
                                width: '100%',
                                filter: 'drop-shadow(0 0 8px rgba(165, 180, 252, 0.3))'
                              }
                            }}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8">
                        {[
                          { value: '200+', label: 'Clean Projects', color: 'from-indigo-400 to-purple-400', delay: '1.5s' },
                          { value: '50+', label: 'Global Partners', color: 'from-blue-400 to-indigo-400', delay: '1.6s' },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className={`bg-gradient-to-r ${item.color} rounded-xl p-3 md:p-4 border border-white/10 shadow-lg animate-slide-up`}
                            style={{ animationDelay: item.delay }}
                          >
                            <h4 className="font-bold text-lg md:text-xl text-white">{item.value}</h4>
                            <p className="text-xs md:text-sm text-indigo-100/80 mt-1">{item.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Animated scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 md:w-8 md:h-12 border-2 border-indigo-300/50 rounded-xl flex justify-center">
                <div className="w-1 h-2 bg-indigo-300/80 rounded-full mt-2 animate-scroll-wheel" />
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center py-8 md:py-12 px-4 sm:px-6">
            <div className="space-y-4 md:space-y-6 relative">
              {/* Floating animated elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 md:w-32 md:h-32 rounded-full bg-purple-500/10 blur-xl animate-float1"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 md:w-40 md:h-40 rounded-full bg-blue-500/10 blur-xl animate-float2"></div>
              <div className="absolute top-1/2 right-1/4 w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-500/10 blur-lg animate-float3"></div>

              <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 uppercase tracking-wider relative z-10">
                Our Mission
                {/* Animated underline */}
                <span className="block w-16 md:w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mt-2 animate-underline"></span>
              </h2>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed relative z-10">
                Our mission is to lead the way toward a sustainable future by revolutionizing air quality through eco-friendly innovation. We tackle pollution with advanced green technologies, renewable energy solutions, and carbon-neutral practices, ensuring cleaner air for generations to come. Committed to environmental stewardship, we collaborate with communities, industries, and policymakers to drive impactful change. By integrating science, sustainability, and smart design, we reduce emissions, promote energy efficiency, and foster a healthier planet. Every initiative we undertake is a step toward a greener, more resilient world—where clean air is a fundamental right, not a privilege. Together, we're building a legacy of sustainability for all.
              </p>

              <div className="flex flex-wrap gap-2 md:gap-4 relative z-10">
                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-green-900/10 text-green-600 rounded-full text-xs md:text-sm border border-green-400/30 hover:bg-green-900/20 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                  Sustainability
                </span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-blue-900/10 text-blue-600 rounded-full text-xs md:text-sm border border-blue-400/30 hover:bg-blue-900/20 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  Innovation
                </span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-purple-900/10 text-purple-600 rounded-full text-xs md:text-sm border border-purple-400/30 hover:bg-purple-900/20 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                  Excellence
                </span>
                <span className="px-3 py-1.5 md:px-4 md:py-2 bg-yellow-900/10 text-yellow-600 rounded-full text-xs md:text-sm border border-yellow-400/30 hover:bg-yellow-900/20 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10">
                  Integrity
                </span>
              </div>
            </div>

            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 z-10"></div>
              <img
                src="https://www.shutterstock.com/image-vector/abstract-closeup-hands-holding-target-600nw-2359949743.jpg"
                alt="Our Mission"
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              {/* Floating dots overlay */}
              <div className="absolute top-0 left-0 w-full h-full opacity-30">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 md:w-3 md:h-3 bg-white rounded-full animate-bounce"></div>
                <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-300 rounded-full animate-bounce delay-100"></div>
                <div className="absolute bottom-1/4 right-1/4 w-2 h-2 md:w-3 md:h-3 bg-purple-300 rounded-full animate-bounce delay-200"></div>
                <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 md:w-2 md:h-2 bg-green-300 rounded-full animate-bounce delay-300"></div>
              </div>
            </div>
          </div>

          <style jsx>{`
            @keyframes float1 {
              0%, 100% { transform: translateY(0) translateX(0); }
              50% { transform: translateY(-10px) translateX(5px); }
            }
            @keyframes float2 {
              0%, 100% { transform: translateY(0) translateX(0); }
              50% { transform: translateY(8px) translateX(-8px); }
            }
            @keyframes float3 {
              0%, 100% { transform: translateY(0) translateX(0); }
              50% { transform: translateY(-5px) translateX(8px); }
            }
            @keyframes underline {
              0% { width: 0; opacity: 0; }
              100% { width: 64px; opacity: 1; }
            }
            .animate-float1 { animation: float1 8s ease-in-out infinite; }
            .animate-float2 { animation: float2 10s ease-in-out infinite; }
            .animate-float3 { animation: float3 12s ease-in-out infinite; }
            .animate-underline { animation: underline 1.5s ease-out forwards; }
          `}</style>

          {/* Values Section */}
          <div className="relative overflow-hidden">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-text">
                Our Core Values
              </span>
            </h2>

            {/* Floating background elements */}
            <div className="absolute -top-12 -left-12 w-48 h-48 md:w-64 md:h-64 bg-purple-500/20 rounded-full filter blur-3xl motion-safe:animate-[float_8s_ease-in-out_infinite]"></div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 md:w-80 md:h-80 bg-blue-500/20 rounded-full filter blur-3xl motion-safe:animate-[float_10s_ease-in-out_infinite]"></div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
              {[
                {
                  title: "Innovation",
                  description: "We push boundaries and explore new possibilities in everything we create.",
                  icon: "💡",
                  color: "from-purple-500 to-indigo-600",
                  animation: "animate-[float_6s_ease-in-out_infinite]"
                },
                {
                  title: "Integrity",
                  description: "We build trust through transparency, honesty, and accountability.",
                  icon: "🤝",
                  color: "from-blue-500 to-cyan-600",
                  animation: "animate-[float_5s_ease-in-out_infinite]"
                },
                {
                  title: "Excellence",
                  description: "We're committed to delivering the highest quality in every detail.",
                  icon: "🌟",
                  color: "from-yellow-500 to-orange-600",
                  animation: "animate-[float_7s_ease-in-out_infinite]"
                }
              ].map((value, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${value.color} p-0.5 rounded-xl hover:shadow-lg hover:shadow-${value.color.split('to-')[1].split(' ')[0]}/30 transition-all transform hover:-translate-y-2 duration-500 motion-safe:${value.animation}`}
                >
                  <div className="bg-gray-900/80 backdrop-blur-sm h-full rounded-[11px] p-6 md:p-8 flex flex-col relative overflow-hidden group">
                    {/* Particle background effect */}
                    <div className={`absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300 bg-[url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='1' fill='white' /%3E%3C/svg%3E")]`}></div>

                    {/* Animated icon */}
                    <div className="text-4xl md:text-5xl mb-4 md:mb-6 motion-safe:group-hover:scale-110 motion-safe:group-hover:rotate-6 transition-transform duration-300">
                      {value.icon}
                    </div>

                    <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 relative inline-block">
                      <span className="relative z-10">{value.title}</span>
                      <span className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${value.color} z-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500`}></span>
                    </h3>

                    <p className="text-gray-300 text-sm md:text-base flex-grow relative z-10 group-hover:text-white transition-colors duration-300">
                      {value.description}
                    </p>

                    <div className="mt-4 md:mt-6 h-1 w-12 md:w-16 bg-white rounded-full motion-safe:group-hover:scale-x-150 transition-transform duration-500 origin-left"></div>

                    {/* Glow effect */}
                    <div className={`absolute -inset-1 md:-inset-2 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-br ${value.color} blur-md -z-10 transition-opacity duration-500`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="py-12 md:py-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 animate-text">
                Meet The Visionaries
              </span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                {
                  name: "Alex Johnson",
                  role: "Founder & CEO",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop",
                  social: ["twitter", "linkedin", "github"]
                },
                {
                  name: "Sam Lee",
                  role: "Lead Designer",
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
                  social: ["twitter", "dribbble", "behance"]
                },
                {
                  name: "Taylor Smith",
                  role: "CTO",
                  image: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=1780&auto=format&fit=crop",
                  social: ["twitter", "linkedin", "stack-overflow"]
                },
                {
                  name: "Jordan Chen",
                  role: "Marketing Director",
                  image: "https://images.unsplash.com/photo-1628890920690-9e29d0019b9b?q=80&w=1887&auto=format&fit=crop",
                  social: ["twitter", "instagram", "medium"]
                }
              ].map((member, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl h-80 md:h-96">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${member.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-white">{member.name}</h3>
                    <p className="text-gray-300 mb-3 md:mb-4">{member.role}</p>
                    <div className="flex space-x-2 md:space-x-3">
                      {member.social.map((platform, i) => (
                        <span key={i} className="w-6 h-6 md:w-8 md:h-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/20 transition-all">
                          {platform[0].toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 bg-black/40 backdrop-blur-sm group-hover:opacity-0 transition-opacity">
                    <h3 className="text-lg md:text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-gray-300 text-sm md:text-base">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center py-12 md:py-16 relative overflow-hidden rounded-2xl md:rounded-3xl">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Ready to create something amazing?</h2>
              <p className="text-base md:text-lg text-gray-200 mb-6 md:mb-8">
                We're always looking for talented, passionate people to join our team.
              </p>
              <button onClick={()=>navigate("/Contact")} className="cursor-pointer px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-bold text-base md:text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:scale-105">
                Join Our Team
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}