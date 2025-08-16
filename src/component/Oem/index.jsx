"use client";
import Header from "../Header";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import Footer from "../Footer";
import CircularGallery from "./Gallery";

function Oem() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const jumpVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white relative overflow-hidden">
        {/* Hero Section - Modified to be full width */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 w-full z-10">
          {/* Background GIF only for this section - now full width */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src="https://media2.giphy.com/media/v1.Y2lkPTZjMDliOTUyYmV4OGd0Zzh1c2ZxejhrbHo3dTNlamVyNWN2cWRlMG51Nzd5M3NmYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o8doOLbnDv6SVK8uY/source.gif"
              alt="background"
              className="w-full h-full object-cover opacity-10"
            />
          </div>

          {/* Inner container for content - now with max-w-7xl */}
          <div className="max-w-7xl mx-auto mt-20">
            <motion.div
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={containerVariants}
              className="relative flex flex-col"
            >
              {/* Text Content - full width */}
              <motion.div
                variants={itemVariants}
                className="space-y-6 w-full" // Full width text
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                    Innovating Since 2020
                  </span>
                  <motion.h2
                    className="text-5xl font-bold text-blue-900 mb-6 leading-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, type: "spring" }}
                  >
                    <TypeAnimation
                      sequence={[
                        'Who We Are',
                        1000,
                        'Your Trusted OEM Partner',
                        1000
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                      className="text-blue-900"
                    />
                  </motion.h2>
                </motion.div>

                <motion.div
                  className="prose prose-lg text-gray-600 space-y-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <TypeAnimation
                    sequence={[
                      "Dunham-Bush is one of the biggest commercial air conditioning companies with a global network of sales and service offices. The brand has long been committed to offering clean and green heating and cooling systems to meet the specific air-conditioning needs of the customers.",
                      1000
                    ]}
                    wrapper="p"
                    cursor={false}
                    speed={65}
                  />
                  <TypeAnimation
                    sequence={[
                      1500,
                      "As a company that does business with the environment in mind, it makes sense that we offer a complete range of green heating and cooling systems to ensure a cleaner and greener future. Our range of energy efficient, clean energy products include green HVAC/R heating and cooling systems, large chillers, heat pumps, thermal energy storage, airside systems; and unitary to residences, commercial buildings & industrial facilities.",
                      1000
                    ]}
                    wrapper="p"
                    cursor={false}
                    speed={65}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Learn More About Us
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-lg transition-all duration-300"
                  >
                    Contact Our Team
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* Image - full width below text */}

              <div style={{ height: '600px', position: 'relative' }}>
                <CircularGallery bend={2} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
              </div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-6"
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {[
                { number: "15+", label: "Years Experience", color: "from-blue-600 to-cyan-500" },
                { number: "500+", label: "Clients Worldwide", color: "from-blue-600 to-cyan-500" },
                { number: "99%", label: "Customer Satisfaction", color: "from-blue-600 to-cyan-500" },
                { number: "24/7", label: "Support Available", color: "from-blue-600 to-cyan-500" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                  whileHover={{
                    y: -8,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <motion.div
                    variants={jumpVariants}
                    animate="animate"
                    initial="initial"
                    className="text-center"
                  >
                    <h3 className={`text-4xl font-bold mb-3 bg-gradient-to-r ${stat.color} text-transparent bg-clip-text`}>
                      {stat.number}
                    </h3>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Additional Content Section - Keep this as before */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100"
          >
            <div className="max-w-3xl mx-auto text-center">
              <motion.h2
                className="text-4xl font-bold text-blue-900 mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <TypeAnimation
                  sequence={[
                    'Why Choose Us?',
                    1000,
                    'Our OEM Advantages',
                    1000
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-blue-900"
                />
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 mb-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                We combine cutting-edge technology with unparalleled expertise to deliver OEM solutions that drive your business forward.
              </motion.p>

              <motion.div
                className="grid md:grid-cols-3 gap-6 mt-12"
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
              >
                {[
                  {
                    title: "Innovation",
                    icon: "💡",
                    desc: "Continuous R&D for cutting-edge solutions",
                    color: "bg-blue-100 text-blue-800"
                  },
                  {
                    title: "Quality",
                    icon: "🏆",
                    desc: "Rigorous testing and quality control",
                    color: "bg-blue-100 text-blue-800"
                  },
                  {
                    title: "Support",
                    icon: "🤝",
                    desc: "Dedicated technical support team",
                    color: "bg-blue-100 text-blue-800"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
                    whileHover={{
                      y: -5,
                      scale: 1.02
                    }}
                  >
                    <div className={`text-3xl w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mb-4 mx-auto`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        <Footer />
      </div>

      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
}

export default Oem;