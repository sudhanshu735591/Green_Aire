import { useState, useEffect } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { saveAs } from 'file-saver';
const products = [
  { 
    name: 'VRF Systems', 
    path: '/products/vrf-systems',
    description: 'Variable Refrigerant Flow (VRF) systems provide precise temperature control with exceptional energy efficiency. Our VRF solutions offer simultaneous heating and cooling to different zones, making them ideal for commercial buildings with diverse thermal needs.',
    features: ['Energy efficient inverter technology', 'Individual zone control', 'Quiet operation', 'Scalable for any building size'],
    specs: {
      capacity: '8-60 HP',
      efficiency: 'Up to 30% more efficient than conventional systems',
      applications: 'Office buildings, hotels, hospitals, schools'
    },
    img:"data:image/jpeg;base64,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"
  },
  { 
    name: 'Packaged Units', 
    path: '/products/packaged-units',
    description: 'All-in-one HVAC solutions that combine heating, cooling, and air handling in a single unit. Perfect for spaces where indoor equipment space is limited, our packaged units are designed for easy installation and maintenance.',
    features: ['Space-saving design', 'High SEER ratings', 'Weather-resistant construction', 'Easy maintenance access'],
    specs: {
      capacity: '3-25 tons',
      efficiency: 'SEER up to 18',
      applications: 'Roof tops, small commercial spaces'
    },
    img: "https://www.phnix-e.com/upfiles/202006/28/1593334649_n33.gif"
  },
  { 
    name: 'Ductable Units', 
    path: '/products/ductable-units',
    description: 'High-performance ductable air conditioning units designed for concealed installation with ductwork distribution. These units provide uniform air distribution while maintaining aesthetic appeal in commercial and residential spaces.',
    features: ['Concealed installation', 'Flexible ducting options', 'Energy star certified', 'Low noise operation'],
    specs: {
      capacity: '3-25 tons',
      efficiency: 'SEER up to 18',
      applications: 'Roof tops, small commercial spaces'
    },
    img:"https://www.bluestarindia.com/media/271414/7-ducted-splits-t3.gif"
  },
  { 
    name: 'Chiller Units', 
    path: '/products/chiller-units',
    description: 'Industrial-grade chiller systems for large-scale cooling applications. Our chillers are engineered for reliability and efficiency in demanding environments like data centers, hospitals, and manufacturing facilities.',
    features: ['Air-cooled and water-cooled options', 'Magnetic bearing compressors', 'Intelligent control systems', 'Low global warming potential refrigerants'],
    specs: {
      capacity: '3-25 tons',
      efficiency: 'SEER up to 18',
      applications: 'Roof tops, small commercial spaces'
    },
    img:"https://theengineeringmindset.com/wp-content/uploads/2017/11/Water-cooled-chiller-animation.gif"
  },
  { 
    name: 'Custom Air Conditioning', 
    path: '/products/custom-ac',
    description: 'Bespoke air conditioning solutions tailored to your specific requirements. Whether you need specialized cooling for server rooms, laboratories, or unique architectural spaces, we design systems that fit perfectly.',
    features: ['Engineered to specification', 'Unmatched performance', 'Aesthetic integration', 'Future-proof design'],
    specs: {
      capacity: '3-25 tons',
      efficiency: 'SEER up to 18',
      applications: 'Roof tops, small commercial spaces'
    },
    img:"https://img.global.news.samsung.com/global/wp-content/uploads/2020/05/Wind-free-Tech_main_1.gif"
  },
  { 
    name: 'Air Quality Solutions', 
    path: '/products/air-quality',
    description: 'Comprehensive air quality management including sensors, dehumidifiers, and purification systems. Our solutions monitor and improve indoor air quality in real-time, creating healthier indoor environments.',
    features: ['PM2.5 filtration', 'VOC detection', 'Humidity control', 'UV-C sterilization'],
    specs: {
      capacity: '3-25 tons',
      efficiency: 'SEER up to 18',
      applications: 'Roof tops, small commercial spaces'
    },
    img:"https://edinburghsensors.com/wp-content/uploads/2023/01/indoor-air-quality.gif"
  },
  { 
    name: 'Automation Systems', 
    path: '/products/automation',
    description: 'Smart building automation that integrates HVAC, lighting, and security into a single intelligent system. Our automation solutions optimize energy use while enhancing comfort and operational efficiency.',
    features: ['AI-driven optimization', 'Remote monitoring', 'Predictive maintenance', 'Seamless integration'],
    specs: {
      capacity: '3-25 tons',
      efficiency: 'SEER up to 18',
      applications: 'Roof tops, small commercial spaces'
    },
    img:"https://cdn.dribbble.com/userupload/22540036/file/original-50018e852bd4f2d06800906946d600fe.gif"
  },
  { 
    name: 'Electrical Panels', 
    path: '/products/electrical-panels',
    description: 'Custom HT & LT electrical panels designed for safety, reliability, and efficiency. Our panels are built to exacting standards for industrial, commercial, and critical power applications.',
    features: ['Arc flash protection', 'Energy monitoring', 'Modular design', 'Surge protection'],
    specs: {
      capacity: '3-25 tons',
      efficiency: 'SEER up to 18',
      applications: 'Roof tops, small commercial spaces'
    },
    img:"https://www.eclipseelectrical.net.au/media/library/uploads/blog/large/a-guide-on-understanding-electrical-panels-to-ensure-home-safety-1739512459-0.jpg"
  },
  { 
    name: 'Air Distribution', 
    path: '/products/air-distribution',
    description: 'Innovative air distribution products that optimize airflow while enhancing interior aesthetics. Our solutions include linear diffusers, displacement ventilation, and custom fabric ductwork.',
    features: ['Low-velocity airflow', 'Architectural finishes', 'Thermal comfort optimization', 'Easy cleaning access'],
    specs: {
      capacity: '3-25 tons',
      efficiency: 'SEER up to 18',
      applications: 'Roof tops, small commercial spaces'
    },
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjwaYE7J4heaaBo3JJMVCeePyyCecCUdlzx0B8OKxanvu3cJZ0xmbe2ywBr3KsvdjukfQ&usqp=CAU"
  },
  { 
    name: 'Fabrication Services', 
    path: '/products/fabrication',
    description: 'Precision metal fabrication for ductwork, equipment housings, and specialized components. Our fabrication shop produces high-quality, code-compliant components for any HVAC application.',
    features: ['CAD-designed components', 'Laser cutting technology', 'On-site measurement', 'Rapid prototyping'],
    specs: {
      capacity: '3-25 tons',
      efficiency: 'SEER up to 18',
      applications: 'Roof tops, small commercial spaces'
    },
    img:"https://chools.in/wp-content/uploads/Manufacturing-ANIM.gif"
  }
];
export default function Products() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!popupOpen) {
        setIsAnimating(true);
        setTimeout(() => {
          setActiveIndex((prev) => (prev + 1) % products.length);
          setIsAnimating(false);
        }, 500);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [popupOpen]);
  const openProductPopup = (product) => {
    setSelectedProduct(product);
    setPopupOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const closePopup = () => {
    setPopupOpen(false);
    setTimeout(() => {
      setSelectedProduct(null);
      document.body.style.overflow = 'auto';
    }, 300);
  };
  function downloadFile(){
      const pdfUrl = "./GACS BREIF PROFILE.pdf"
      saveAs(pdfUrl,"GACS BREIF PROFILE.pdf")
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
        <title>Premium Climate Solutions | Our Products</title>
        <meta name="description" content="Discover our innovative HVAC and air quality management systems" />
      <Header/>
      {/* Subtle Particle Background */}
      <div className="fixed inset-0 overflow-hidden opacity-10 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gray-300"
            style={{
              width: Math.random() * 80 + 20,
              height: Math.random() * 80 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.2 + 0.05,
              animation: `float ${Math.random() * 15 + 5}s infinite ease-in-out ${Math.random() * 5}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-20">
        {/* Hero Section */}
        <section className="text-center mb-10">
          <div className="relative inline-block">
            <h1 className="uppercase text-transparent bg-clip-text  bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-4xl md:text-5xl font-bold mb-6 relative z-10 mt-5">
              Precision Climate Solutions
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Engineered for performance, designed for comfort, built for sustainability
          </p>
        </section>

        {/* Product Showcase */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              isActive={index === activeIndex}
              isAnimating={isAnimating && index === activeIndex}
              isHovered={hoveredCard === index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => openProductPopup(product)}
            />
          ))}
        </section>

        {/* Featured Product */}
        <section className="mt-12 bg-white rounded-3xl p-8 shadow-lg backdrop-blur-sm border border-gray-100 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full filter blur-3xl opacity-30 -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-100 rounded-full filter blur-3xl opacity-30 -ml-20 -mb-20"></div>
          
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Featured Solution
                </span>
              </h2>
              <div className="flex space-x-2">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAnimating(true);
                      setTimeout(() => {
                        setActiveIndex(index);
                        setIsAnimating(false);
                      }, 300);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
                    aria-label={`View ${products[index].name}`}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className={`text-2xl font-semibold mb-4 transition-all duration-500 ${isAnimating ? 'text-blue-600 translate-x-2' : 'text-gray-800'}`}>
                  {products[activeIndex].name}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {products[activeIndex].description}
                </p>
                <button 
                  onClick={() => openProductPopup(products[activeIndex])}
                  className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-6 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-md hover:shadow-lg mb-8"
                >
                  View Full Details
                </button>
              </div>
              <div className="flex-1 w-full h-80 bg-gradient-to-br from-white to-gray-100 rounded-xl flex items-center justify-center relative overflow-hidden border border-gray-200 shadow-inner">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full opacity-70 animate-pulse"></div>
                </div>
                <div className="relative z-10 text-center p-6">
                  <img src={products[activeIndex].img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Product Detail Popup */}
      {popupOpen && selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={closePopup}
          ></div>
          
          {/* Popup Container */}
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div 
              className={`inline-block align-bottom bg-white rounded-3xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full ${
                popupOpen ? 'animate-popup-enter' : 'animate-popup-exit'
              }`}
            >
              <div className="bg-white px-8 pt-8 pb-6 sm:p-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedProduct.name}</h3>
                    <p className="text-blue-600 font-medium">{selectedProduct.specs.capacity}</p>
                  </div>
                  <button
                    onClick={closePopup}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Product Overview</h4>
                    <p className="text-gray-600 mb-6 leading-relaxed">{selectedProduct.description}</p>
                    
                    <div className="bg-blue-50 rounded-xl p-5 mb-6">
                      <h5 className="font-semibold text-blue-800 mb-3">Key Specifications</h5>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span className="text-gray-600">Capacity Range:</span>
                          <span className="font-medium">{selectedProduct.specs.capacity}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Energy Efficiency:</span>
                          <span className="font-medium">{selectedProduct.specs.efficiency}</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Typical Applications:</span>
                          <span className="font-medium">{selectedProduct.specs.applications}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-4">Features & Benefits</h4>
                    <ul className="space-y-3">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="flex-shrink-0 h-6 w-6 text-blue-500 mr-3 mt-0.5">
                            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-5 text-white">
                      <h5 className="font-semibold mb-3">Ready to learn more?</h5>
                      <p className="mb-4 opacity-90">Our experts can help you determine the perfect solution for your needs.</p>
                      <button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105">
                        Request Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 px-8 py-4 sm:px-8 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="cursor-pointer w-full inline-flex justify-center rounded-full border border-transparent shadow-sm px-6 py-3 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm transition-all transform hover:scale-105"
                  onClick={downloadFile}
                >
                  Download Brochure
                </button>
                <button
                  type="button"
                  onClick={closePopup}
                  className="mt-3 w-full inline-flex justify-center rounded-full border border-gray-300 shadow-sm px-6 py-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer/>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes popup-enter {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes popup-exit {
          from { opacity: 1; transform: translateY(0) scale(1); }
          to { opacity: 0; transform: translateY(20px) scale(0.95); }
        }
        .animate-popup-enter {
          animation: popup-enter 0.3s ease-out forwards;
        }
        .animate-popup-exit {
          animation: popup-exit 0.3s ease-in forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .product-glow {
          box-shadow: 0 10px 30px -10px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </div>
  );
}

const ProductCard = ({ product, isActive, isAnimating, isHovered, onMouseEnter, onMouseLeave, onClick }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-xl p-6 cursor-pointer transition-all duration-500 ${
        isActive ? 'bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 product-glow' : 
                 'bg-white border border-gray-200'
      } ${isAnimating ? 'scale-95 opacity-90' : 'scale-100 opacity-100'} ${
        isHovered ? 'transform -translate-y-2 shadow-lg product-glow' : 'shadow-md'
      }`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 opacity-0 ${
        isHovered ? 'opacity-30' : ''
      } transition-opacity duration-300`}></div>
      
      <div className="relative z-10">
        <h3 className={`text-xl font-semibold mb-2 transition-colors ${
          isActive ? 'text-blue-800' : 'text-gray-800'
        }`}>{product.name}</h3>
        <p className={`text-sm ${
          isActive ? 'text-blue-600' : 'text-gray-500'
        }`}>
          {product.name.includes('Unit') ? 'Custom HVAC Solution' : 
           product.name.includes('Quality') ? 'Health & Comfort' : 
           'Advanced Technology'}
        </p>
      </div>
      
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${
        isActive ? 'from-blue-400 to-purple-400' : 'from-gray-200 to-gray-300'
      } transition-all duration-500`}></div>
      
      {isHovered && (
        <div className="absolute top-3 right-3">
          <svg className="h-6 w-6 text-blue-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  );
};