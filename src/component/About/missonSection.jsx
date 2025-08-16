import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(null);
    // Product categories data
    const productCategories = [
        {
            id: 1,
            category: "OUR TEAM",
            description: "",
            products: [
                {
                    name: "Our team mate",
                    specs: ["Our team consists of seasoned professionals with extensive expertise in HVAC technologies.From design and installation to maintenance and support, our team is dedicated to delivering excellence at every step."],
                    image: "./Team_image.png"
                },
                {
                    name: "Mission & Vision",
                    specs: ["We are dedicated to upholding core values that define our commitment to excellence. Our mission is to provide superior HVAC solutions driven by: 1. Quality 2. Sustainability 3. Customer Satisfaction"],
                    image: "./Team_image_1.png"
                }
            ]
        },
        {
            id: 2,
            category: "Products Range: CHILLERS",
            description: "Air handling solutions for optimal indoor air quality and comfort",
            products: [
                {
                    name: "Air Cooled Chiller",
                    specs: ["The air-cooled chiller offers efficient cooling solutions suitable for various applications, ensuring optimal performance and energy savings."],
                    image: "./aircooledchiller.png"
                },
                {
                    name: "Water Cooled Chiller",
                    specs: ["Our water-cooled chiller systems deliver reliable and sustainable cooling with advanced technology, tailored to meet specific industry demands."],
                    image: "./watercooledchiller.png"
                }
            ]
        },
        {
            id: 3,
            category: "Packaged Air Conditioners",
            description: "Variable refrigerant flow technology for zoned comfort control",
            products: [
                {
                    name: "Air Cooled Packaged",
                    specs: ["The air-cooled packaged air conditioners are designed for superior performance, providing cost-effective and efficient cooling solutions."],
                    image: "./aircooledpackage.png"
                },
                {
                    name: "Water Cooled Packaged",
                    specs: ["The water-cooled packaged air conditioners are engineered to deliver optimal cooling results and sustainability, meeting the specific requirements of diverse industries."],
                    image: "./watercooledpackage.png"
                }
            ]
        },
        {
            id: 4,
            category: "Customized HVAC Units",
            description: "Reliable heat rejection equipment for large-scale applications",
            products: [
                {
                    name: "Flameproof HVAC Units",
                    specs: ["GACS' Flame-Proof Air Conditioner is engineered for seamless operation, vital for applications like control panels in remote or challenging environments. In Oil, Gas, Refinery, and Petrochemical industries, this 24x7 system ensures trouble-free functionality with a focus on safety, preventing ignition of explosive gases."],
                    image: "./flameproof.png"
                },
                {
                    name: "Customized Air Conditioning Unit",
                    specs: ["ATEX certified Flameproof HVAC units are designed for hazardous environments with flammable substances. Complying with international safety standards, these systems feature Flame-proof enclosures, preventing potential explosions from causing harm."],
                    image: "./customizedairunit.png"
                }
            ]
        },
        {
            id: 5,
            category: "EC Fans",
            description: "Reliable heat rejection equipment for large-scale applications",
            products: [
                {
                    name: "High-Quality Fans",
                    specs: ["We offer top-notch EC fans known for their energy efficiency and excellent performance in various applications."],
                    image: "./highqualityfans.png"
                },
                {
                    name: "Fan Repair Services",
                    specs: ["Our expert team specializes in repairing and maintaining EC fans, ensuring their reliability and optimal functionality using advanced technology."],
                    image: "./fanrepairservice.png"
                }
            ]
        },
        {
            id: 6,
            category: "Customized HVAC Units",
            description: "Reliable heat rejection equipment for large-scale applications",
            products: [
                {
                    name: "Flameproof HVAC Units",
                    specs: ["GACS' Flame-Proof Air Conditioner is engineered for seamless operation, vital for applications like control panels in remote or challenging environments. In Oil, Gas, Refinery, and Petrochemical industries, this 24x7 system ensures trouble-free functionality with a focus on safety, preventing ignition of explosive gases."],
                    image: "./flameproof.png"
                },
                {
                    name: "Customized Air Conditioning Unit",
                    specs: ["ATEX certified Flameproof HVAC units are designed for hazardous environments with flammable substances. Complying with international safety standards, these systems feature Flame-proof enclosures, preventing potential explosions from causing harm."],
                    image: "./customizedairunit.png"
                }
            ]
        }
    ];

    // Auto-advance carousel
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 8000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setDirection('right');
        setCurrentIndex((prevIndex) =>
            prevIndex === productCategories.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setDirection('left');
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? productCategories.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setDirection(index > currentIndex ? 'right' : 'left');
        setCurrentIndex(index);
    };

    // Animation variants
    const variants = {
        enter: (direction) => {
            return {
                x: direction === 'right' ? 1000 : -1000,
                opacity: 0
            };
        },
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction) => {
            return {
                x: direction === 'right' ? -1000 : 1000,
                opacity: 0
            };
        }
    };

    return (
        <div className="bg-white w-full px-4">
            <h2 className="text-4xl font-bold text-center text-blue-800 mb-8 uppercase">Our Product Range</h2>

            <div className="relative overflow-hidden rounded-xl shadow-lg h-auto min-h-[600px] bg-gradient-to-br from-gray-50 to-white">
                <AnimatePresence custom={direction} initial={false}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        className="absolute inset-0 p-8 flex flex-col"
                    >
                        {/* Category Header */}
                        <div className="text-center mb-8">
                            <h3 className="text-2xl md:text-4xl font-bold text-blue-600">
                                {productCategories[currentIndex].category}
                            </h3>
                            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
                                {productCategories[currentIndex].description}
                            </p>
                        </div>

                        {/* Products Grid - Now with full-height images */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
                            {productCategories[currentIndex].products.map((product, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col"
                                >
                                    {/* Full-height image container */}
                                    <div className="flex-grow relative overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>

                                    {/* Product details */}
                                    <div className="p-6 border-t border-gray-100">
                                        <h4 className="text-xl font-bold text-gray-800 mb-3">{product.name}</h4>
                                        <ul className="space-y-2 mb-4">
                                            {product.specs.map((spec, i) => (
                                                <li key={i} className="flex items-start">
                                                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span className="text-gray-600">{spec}</span>
                                                </li>
                                            ))}
                                        </ul>
                                       
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows - Enhanced */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg z-10 transition-all duration-300 hover:scale-110 hover:shadow-xl"
                    aria-label="Previous category"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg z-10 transition-all duration-300 hover:scale-110 hover:shadow-xl"
                    aria-label="Next category"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Indicators - Enhanced */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                    {productCategories.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-blue-600 w-6 shadow-md' : 'bg-gray-300 hover:bg-gray-400'}`}
                            aria-label={`Go to ${productCategories[index].category}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCarousel;