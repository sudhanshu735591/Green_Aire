"use client";
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Footer from '../Footer';
import { features } from './featureData';
import Header from '../Header';
export default function Company_Introduction() {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [activeTab, setActiveTab] = useState('Oils');
    const tabs = ['Oils', 'HVAC', '3D Layout'];
    const fullText = "Smart HVAC & Data Center";
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150); // typing speed in ms
    useEffect(() => {
        let timer;

        if (isDeleting) {
            // Deleting text
            timer = setTimeout(() => {
                setDisplayText(fullText.substring(0, currentIndex - 1));
                setCurrentIndex(currentIndex - 1);

                if (currentIndex === 0) {
                    setIsDeleting(false);
                    setSpeed(150); // reset to typing speed
                }
            }, speed);
        } else {
            // Typing text
            timer = setTimeout(() => {
                setDisplayText(fullText.substring(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);

                if (currentIndex === fullText.length) {
                    setIsDeleting(true);
                    setSpeed(50); // faster deletion speed
                    // Wait a bit before starting to delete
                    setTimeout(() => { }, 1000);
                }
            }, speed);
        }

        return () => clearTimeout(timer);
    }, [currentIndex, isDeleting, speed, fullText]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                when: "beforeChildren"
            }
        }
    };
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const words = ["Innovation", "Growth", "Success", "Transformation"];
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <Header />
            <div className="min-h-screen bg-white">
                <section className="relative overflow-hidden">
                    {/* Diagonal background split (bottom-left to top-right) */}
                    <div className="absolute inset-0 z-0 bg-[linear-gradient(to_top_right,theme(colors.blue.400)_49.9%,white_50.1%)]"></div>

                    {/* Content container */}
                    <div className="relative z-10 px-4 sm:px-6  md:py-15 text-blue-700">
                        <div className="max-w-7xl mx-auto py-25">
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="text-center mb-12 md:mb-16"
                            >
                                <motion.h2
                                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 uppercase"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {displayText}
                                    <motion.span
                                        animate={{ opacity: [0, 1, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.8 }}
                                        className="inline-block w-1 h-8 bg-current align-middle ml-1"
                                    >
                                        {" "}
                                    </motion.span>
                                </motion.h2>
                                <motion.p
                                    className="text-start sm:text-lg text-black max-w-6xl mx-auto"
                                    initial={{ y: 0 }}
                                    animate={{
                                        y: [0, -3, 0, 2, 0],
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    We are Sister Concern of Green Air Technologies India .
                                    We GreenAire Air Conditioning Systems co. LLC represent <a target="_blank" className='font-semibold text-blue-900 hover:underline' href="https://dunham-bush.com/">Dunham Bush and Trane
                                    Technologies</a>, as their Authorized Partners & Consultants in India with services across the Middle
                                    East (UAE) and Africa.
                                    Some of our esteemed clients include, GMR, ONGC India, Oil India, Indian Refineries (Acting as
                                    Consultants for HVAC for their Building in Rajasthan), Vertiv & AWS (Amazon Data Centres)
                                    We would like to get empanelled and extend our services with your company for supporting in
                                    HVAC solutions.

                                    Advanced climate control and energy optimization for mission-critical environments
                                    Our advanced control system optimizes climate and energy efficiency in mission-critical environments. Using AI-driven automation, it monitors temperature, humidity, and airflow in real-time while minimizing energy consumption. Designed for data centers, commercial buildings, and industrial facilities, it ensures reliability, sustainability, and cost savings through intelligent cooling management and predictive maintenance.
                                </motion.p>
                            </motion.div>

                            {/* Tabbed Card Section */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="mb-12"
                            >
                                <motion.div
                                    className="max-w-md mx-auto p-6 bg-gradient-to-br from-blue-900/20 to-blue-800 rounded-2xl shadow-2xl border border-blue-700/30 backdrop-blur-sm"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    whileHover={{
                                        scale: 1.02,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <motion.div
                                        className="flex justify-center text-yellow-200 space-x-2 mb-6"
                                        variants={containerVariants}
                                        initial="hidden"
                                        animate="visible"
                                    >
                                        {tabs.map((tab) => (
                                            <motion.button
                                                key={tab}
                                                className={`px-4 cursor-pointer py-2 rounded-lg font-medium text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 relative`}
                                                variants={itemVariants}
                                                animate={activeTab === tab ? 'active' : 'inactive'}
                                                whileHover={activeTab !== tab ? 'hover' : {}}
                                                onClick={() => setActiveTab(tab)}
                                            >
                                                {activeTab === tab && (
                                                    <motion.span
                                                        className="absolute inset-0 border-2 border-yellow-400 rounded-lg"
                                                        layoutId="activeTab"
                                                        initial={false}
                                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                    />
                                                )}
                                                <span className="relative z-10">
                                                    {tab}
                                                </span>
                                            </motion.button>
                                        ))}
                                    </motion.div>

                                    {/* Content area with enhanced animation */}
                                    <motion.div
                                        className="p-4 bg-blue-900/20 rounded-xl text-white/80 text-center border border-blue-700/50"
                                        key={activeTab}
                                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            scale: 1,
                                            borderColor: activeTab === 'Oils' ? '#fde047' :
                                                activeTab === 'HVAC' ? '#7dd3fc' :
                                                    '#a78bfa' // Different border colors for each tab
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            borderColor: { duration: 0.3 }
                                        }}
                                        whileHover={{
                                            boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)',
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        {activeTab === 'Oils' && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                <p>Oil system configuration and settings</p>
                                                {/* Add more oil-specific content here */}
                                            </motion.div>
                                        )}
                                        {activeTab === 'HVAC' && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                <p>Heating, Ventilation and AC controls</p>
                                                {/* Add more HVAC-specific content here */}
                                            </motion.div>
                                        )}
                                        {activeTab === '3D Layout' && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                <p>Interactive 3D visualization</p>
                                                {/* Add more 3D-specific content here */}
                                            </motion.div>
                                        )}
                                    </motion.div>
                                </motion.div>

                                <div className="bg-blue-900/50 backdrop-blur-sm rounded-xl p-6 border border-blue-800">
                                    {activeTab === 'Oils' && (
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5 }}
                                                className="bg-blue-800/30 p-4 rounded-lg border border-blue-700"
                                            >
                                                <h3 className="font-semibold mb-3 text-yellow-500 flex items-center">
                                                    <svg className="w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                                                    </svg>
                                                    Oil Quality Monitoring
                                                </h3>
                                                <p className="text-sm text-blue-200 mb-4">Ensure peak equipment performance with our advanced oil quality monitoring solutions. Real-time analysis detects contamination, oxidation, and viscosity changes, preventing costly downtime. Our predictive maintenance technology extends asset life, optimizes lubrication efficiency, and reduces operational risks—delivering reliability you can trust.</p>
                                                <div className="h-2 bg-blue-900 rounded-full mb-2">
                                                    <div className="h-full bg-green-400 rounded-full" style={{ width: '85%' }}></div>
                                                </div>
                                                <p className="text-xs text-blue-300">Condition: Excellent</p>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.1 }}
                                                className="bg-blue-800/30 p-4 rounded-lg border border-blue-700"
                                            >
                                                <h3 className="font-semibold mb-3 flex text-yellow-500 items-center">
                                                    <svg className="w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                    </svg>
                                                    Oil Consumption
                                                </h3>
                                                <p className="text-sm text-blue-200 mb-4">Proper oil consumption management is critical for maintaining equipment efficiency and longevity. Our advanced lubrication solutions minimize excess usage while ensuring optimal performance. By monitoring consumption patterns, we help prevent leaks, reduce wear, and lower operational costs—enhancing productivity and sustainability for your business.</p>
                                                <div className="h-2 bg-blue-900 rounded-full mb-2">
                                                    <div className="h-full bg-yellow-400 rounded-full" style={{ width: '65%' }}></div>
                                                </div>
                                                <p className="text-xs text-blue-300">Monthly Usage: 320L</p>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                                className="bg-blue-800/30 p-4 rounded-lg border border-blue-700"
                                            >
                                                <h3 className="font-semibold mb-3 flex items-center text-yellow-400">
                                                    <svg className="w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                    </svg>
                                                    Oil Analysis
                                                </h3>
                                                <p className="text-sm text-blue-200 mb-4">Maximize equipment reliability with our precision oil analysis. We detect wear particles, fluid degradation, and contaminants to predict failures before they occur. Our expert diagnostics optimize maintenance schedules, reduce unplanned downtime, and extend machinery life—delivering data-driven protection for your critical assets.</p>
                                                <div className="h-2 bg-blue-900 rounded-full mb-2">
                                                    <div className="h-full bg-blue-400 rounded-full" style={{ width: '72%' }}></div>
                                                </div>
                                                <p className="text-xs text-blue-300">Last Test: 2 days ago</p>
                                            </motion.div>
                                        </div>
                                    )}

                                    {activeTab === 'HVAC' && (
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5 }}
                                                className="bg-blue-800/30 p-4 rounded-lg border border-blue-700"
                                            >
                                                <h3 className="font-semibold mb-3 flex items-center text-yellow-400">
                                                    <svg className="w-5 h-5 mr-2 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                                    </svg>
                                                    Temperature Control
                                                </h3>
                                                <p className="text-sm text-blue-200 mb-4">Maintain optimal oil performance with our intelligent temperature monitoring and regulation systems. Our solutions prevent thermal degradation, stabilize viscosity, and protect equipment from heat-related wear. Real-time alerts and automated cooling controls ensure consistent operation while maximizing energy efficiency and component lifespan.</p>
                                                <div className="h-2 bg-blue-900 rounded-full mb-2">
                                                    <div className="h-full bg-green-400 rounded-full" style={{ width: '92%' }}></div>
                                                </div>
                                                <p className="text-xs text-blue-300">Average: 22.5°C</p>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.1 }}
                                                className="bg-blue-800/30 p-4 rounded-lg border border-blue-700"
                                            >
                                                <h3 className="font-semibold mb-3 flex items-center text-yellow-400">
                                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                                    </svg>
                                                    Humidity Control
                                                </h3>
                                                <p className="text-sm text-blue-200 mb-4">Protect your lubrication systems from moisture damage with our advanced humidity control solutions. Our technology maintains optimal dryness levels, preventing oil oxidation, additive depletion, and corrosive wear. Real-time monitoring and automated dehumidification ensure consistent fluid integrity and extended equipment service life.</p>
                                                <div className="h-2 bg-blue-900 rounded-full mb-2">
                                                    <div className="h-full bg-yellow-400 rounded-full" style={{ width: '75%' }}></div>
                                                </div>
                                                <p className="text-xs text-blue-300">Average: 45% RH</p>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                                className="bg-blue-800/30 p-4 rounded-lg border border-blue-700"
                                            >
                                                <h3 className="font-semibold mb-3 flex items-center text-yellow-400">
                                                    <svg className="w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                    </svg>
                                                    Energy Efficiency
                                                </h3>
                                                <p className="text-sm text-blue-200 mb-4">Boost your operational sustainability with our oil-focused energy optimization solutions. Our advanced lubrication technologies reduce friction losses by up to 30%, while smart viscosity control minimizes pumping energy requirements. Real-time monitoring identifies efficiency gaps, helping you cut power consumption without compromising equipment protection.</p>
                                                <div className="h-2 bg-blue-900 rounded-full mb-2">
                                                    <div className="h-full bg-blue-400 rounded-full" style={{ width: '88%' }}></div>
                                                </div>
                                                <p className="text-xs text-blue-300">Savings: 22% vs baseline</p>
                                            </motion.div>
                                        </div>
                                    )}

                                    {activeTab === '3D Layout' && (
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5 }}
                                                className="bg-blue-800/30 p-4 rounded-lg border border-blue-700"
                                            >
                                                <h3 className="font-semibold mb-3 flex items-center text-yellow-400">
                                                    <svg className="w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                                    </svg>
                                                    Facility Overview
                                                </h3>
                                                <p className="text-sm text-blue-200 mb-4">Our state-of-the-art facility integrates cutting-edge technology for comprehensive oil analysis, treatment, and monitoring. Featuring ISO-certified labs, automated blending systems, and AI-driven diagnostics, we deliver precision lubrication solutions that enhance equipment reliability across industries while maintaining strict environmental compliance.</p>
                                                <div className="h-32 bg-blue-900/50 rounded-lg flex items-center justify-center">
                                                    <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                    </svg>
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.1 }}
                                                className="bg-blue-800/30 p-4 rounded-lg border border-blue-700"
                                            >
                                                <h3 className="font-semibold mb-3 flex items-center text-yellow-400">
                                                    <svg className="w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                                    </svg>
                                                    Equipment Mapping
                                                </h3>
                                                <p className="text-sm text-blue-200 mb-4">Optimize your lubrication management with our intelligent equipment mapping technology. Our digital twin solutions create precise 3D models of your oil-dependent assets, tracking lubrication points, flow paths, and consumption patterns. This enables predictive maintenance scheduling and eliminates missed service intervals across complex facilities.</p>
                                                <div className="h-32 bg-blue-900/50 rounded-lg flex items-center justify-center">
                                                    <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                                    </svg>
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                                className="bg-blue-800/30 p-4 rounded-lg border border-blue-700"
                                            >
                                                <h3 className="font-semibold mb-3 flex items-center text-yellow-400">
                                                    <svg className="w-5 h-5 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                                    </svg>
                                                    Thermal Zones
                                                </h3>
                                                <p className="text-sm text-blue-200 mb-4">Maximize equipment protection with our intelligent thermal zone management. Our system creates precise heat maps of your machinery, identifying critical temperature gradients in bearings, gears, and hydraulic components. Real-time alerts prevent thermal runaway while optimizing viscosity performance across all operating conditions.</p>
                                                <div className="h-32 bg-blue-900/50 rounded-lg flex items-center justify-center">
                                                    <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                                    </svg>
                                                </div>
                                            </motion.div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>

                            {/* Rest of your existing content... */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        {/* Temperature Card */}
                                        <motion.div
                                            className="bg-blue-900/50 backdrop-blur-sm rounded-xl p-4 border border-blue-800 hover:border-blue-500 transition-all duration-300"
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <div className="flex items-center space-x-3">
                                                <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-blue-300">Temperature</p>
                                                    <p className="text-xl font-bold text-yellow-400">22.5°C</p>
                                                </div>
                                            </div>
                                            <div className="mt-3 h-1 bg-blue-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" style={{ width: '65%' }}></div>
                                            </div>
                                        </motion.div>

                                        {/* Humidity Card */}
                                        <motion.div
                                            className="bg-blue-900/50 backdrop-blur-sm rounded-xl p-4 border border-blue-800 hover:border-blue-500 transition-all duration-300"
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <div className="flex items-center space-x-3">
                                                <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-blue-300">Humidity</p>
                                                    <p className="text-xl font-bold text-yellow-400">45%</p>
                                                </div>
                                            </div>
                                            <div className="mt-3 h-1 bg-blue-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" style={{ width: '45%' }}></div>
                                            </div>
                                        </motion.div>

                                        {/* Energy Card */}
                                        <motion.div
                                            className="bg-blue-900/50 backdrop-blur-sm rounded-xl p-4 border border-blue-800 hover:border-blue-500 transition-all duration-300"
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <div className="flex items-center space-x-3">
                                                <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center">
                                                    <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                                    </svg>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-blue-300">Energy</p>
                                                    <p className="text-xl font-bold text-yellow-400">78 kW</p>
                                                </div>
                                            </div>
                                            <div className="mt-3 h-1 bg-blue-800 rounded-full overflow-hidden">
                                                <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full" style={{ width: '78%' }}></div>
                                            </div>
                                        </motion.div>
                                    </div>

                                    <motion.div
                                        className="bg-blue-900/50 backdrop-blur-sm rounded-xl p-6 border border-blue-800"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        <h3 className="text-lg font-semibold mb-4 flex items-center text-yellow-400">
                                            <svg className="w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                                            </svg>
                                            HVAC Controls
                                        </h3>
                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-blue-300 text-sm mb-2">Temperature Setpoint</label>
                                                <div className="flex items-center space-x-3">
                                                    <input
                                                        type="range"
                                                        min="18"
                                                        max="26"
                                                        step="0.5"
                                                        defaultValue="22.5"
                                                        className="w-full h-2 bg-blue-800 rounded-lg appearance-none cursor-pointer"
                                                    />
                                                    <span className="text-white font-medium w-12 text-center">22.5°C</span>
                                                </div>
                                            </div>
                                            <div>
                                                <button className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-yellow-400 rounded-lg font-medium transition-all">
                                                    Optimize Climate Settings
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                    className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden border border-blue-800"
                                >
                                    <img
                                        src="https://blog.tate.com/hs-fs/hubfs/Hot%20Aisle.gif?width=426&height=365&name=Hot%20Aisle.gif"
                                        alt="Data center cooling visualization"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-4 left-4 right-4 bg-blue-900/80 p-4 rounded-lg backdrop-blur-sm">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h3 className="font-medium text-yellow-400">Cooling System Active</h3>
                                                <p className="text-xs text-blue-300">4 chillers running at 75% capacity</p>
                                            </div>
                                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Hero Section with Image */}
                <section className="px-4 sm:px-6">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-5 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 uppercase">
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="block text-gray-600"
                                >
                                    Elevate Your
                                </motion.span>
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        textShadow: '0 0 10px rgba(0,150,255,0.5)'
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.3
                                    }}
                                    className="block text-blue-600 mt-3 md:mt-5 animate-bounce"
                                >
                                    Success
                                </motion.span>
                            </h1>

                            <motion.p
                                className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8"
                                initial={{ y: 0 }}
                                animate={{
                                    y: [0, -3, 0, 2, 0],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                "We combine innovative engineering with energy-efficient technologies to deliver customized climate solutions for industries, offices, and homes. Our expertise ensures optimal thermal comfort, reduced power consumption, and eco-friendly operations—helping businesses and homeowners achieve sustainability without compromising performance or reliability."
                            </motion.p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-blue-600 text-yellow-300 px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg text-sm sm:text-base"
                                >
                                    Get Started
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="border-2 border-blue-600 text-blue-600 px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-medium hover:bg-blue-50 transition-all text-sm sm:text-base"
                                >
                                    Learn More
                                </motion.button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-xl mt-8 md:mt-0"
                        >
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200"
                                initial={{ scale: 1 }}
                                animate={{ scale: 1.05 }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            >
                                <motion.div
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        originX: 0.5,
                                        originY: 0
                                    }}
                                    animate={{
                                        rotate: [0, 3, -3, 0]
                                    }}
                                    transition={{
                                        duration: 6,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                >
                                    <motion.img
                                        src='https://greenairtechnologies.co.in/images/home/1.jpg'
                                        className="w-full h-full object-cover"
                                        initial={{ scale: 1 }}
                                        animate={{ scale: 1.1 }}
                                        transition={{
                                            duration: 15,
                                            repeat: Infinity,
                                            repeatType: "reverse"
                                        }}
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="px-4 sm:px-6 py-10 md:py-16 mt-8 md:mt-10 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-10 md:mb-16"
                        >
                            <motion.h2
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 underline mb-3 md:mb-4 uppercase"
                                animate={{
                                    y: [0, -5, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                What we do for our clients
                            </motion.h2>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.15
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        y: -10,
                                        background: "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(236,240,245,0.9) 100%)",
                                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                                    }}
                                    className="bg-gray-50 p-6 sm:p-8 rounded-xl border border-gray-200 transition-all duration-300 relative overflow-hidden group hover:shadow-xl"
                                >
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        initial={{ x: -100, opacity: 0 }}
                                        whileHover={{ x: 0, opacity: 0.6 }}
                                        transition={{ duration: 0.6 }}
                                    />

                                    <motion.div
                                        className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 sm:mb-6 shadow-md"
                                        animate={{
                                            y: [0, -8, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: index * 0.3
                                        }}
                                    >
                                        <div className="text-xl sm:text-2xl text-white">
                                            {feature.icon}
                                        </div>
                                    </motion.div>

                                    <motion.h3
                                        className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3"
                                        animate={{
                                            x: [0, 3, 0],
                                        }}
                                        transition={{
                                            duration: 6,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: index * 0.2
                                        }}
                                    >
                                        {feature.title}
                                    </motion.h3>

                                    <motion.p
                                        className="text-sm sm:text-base text-gray-600"
                                        animate={{
                                            y: [0, 2, 0],
                                        }}
                                        transition={{
                                            duration: 7,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: index * 0.25
                                        }}
                                    >
                                        {feature.description}
                                    </motion.p>

                                    <motion.div
                                        className="absolute top-2 right-2 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-cyan-400"
                                        animate={{
                                            scale: [1, 1.3, 1],
                                            opacity: [0.6, 1, 0.6]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: index * 0.1
                                        }}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative bg-white overflow-hidden">
                    <div className="px-4 sm:px-6 py-16 md:py-20 bg-gradient-to-br from-blue-900 to-emerald-800 relative">
                        <div className="absolute inset-0 overflow-hidden">
                            {[...Array(12)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 100, x: Math.random() * 1000 }}
                                    animate={{
                                        opacity: [0.1, 0.3, 0.1],
                                        y: [0, -100, -200],
                                        x: [0, Math.random() * 100 - 50, 0],
                                    }}
                                    transition={{
                                        duration: 15 + Math.random() * 10,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                    className="absolute rounded-full bg-white/10"
                                    style={{
                                        width: `${10 + Math.random() * 20}px`,
                                        height: `${10 + Math.random() * 20}px`,
                                        left: `${Math.random() * 100}%`,
                                    }}
                                />
                            ))}
                        </div>

                        <div className="max-w-6xl mx-auto text-center relative z-10">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-2 rounded-full mb-6 md:mb-8 border border-white/30"
                            >
                                <span className="text-emerald-300 font-semibold text-xs sm:text-sm tracking-wider">
                                    TRUSTED BY 100+ INDUSTRY LEADERS
                                </span>
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-snug md:leading-tight"
                            >
                                Engineering <span className="text-emerald-300">Sustainable Air Solutions</span><br className="hidden md:block" />
                                for India's Top Industries
                            </motion.h2>

                            <motion.div
                                className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 my-8 md:my-12"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ staggerChildren: 0.1 }}
                            >
                                {["Automotive", "Pharma", "IT", "Healthcare", "Hospitality"].map((industry, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ y: 30, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        whileHover={{ y: -5 }}
                                        className="bg-white/10 backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-all text-sm sm:text-base"
                                    >
                                        <span className="text-white font-medium">{industry}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Value Propositions on white background */}
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-8 md:-mt-10 relative z-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ staggerChildren: 0.2 }}
                            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
                        >
                            {[
                                {
                                    title: "40% Energy Savings",
                                    desc: "AI-optimized systems reduce operational costs",
                                    icon: "⚡"
                                },
                                {
                                    title: "Application-First Design",
                                    desc: "Solutions tailored to your workflow, not brand specs",
                                    icon: "🛠️"
                                },
                                {
                                    title: "Zero Carbon Compliance",
                                    desc: "Meet global sustainability standards effortlessly",
                                    icon: "🌱"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ y: 30, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: i * 0.2 }}
                                    className="bg-white p-4 sm:p-6 rounded-xl border border-gray-200 hover:border-emerald-300 shadow-lg hover:shadow-emerald-100 transition-all"
                                >
                                    <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{item.icon}</div>
                                    <h3 className="text-emerald-600 text-lg sm:text-xl font-bold mb-1 sm:mb-2">{item.title}</h3>
                                    <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* CTA on white background */}
                    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12 md:py-16 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                                Join industry pioneers like <span className="font-semibold text-gray-800">Tata Motors, Sun Pharma, Infosys</span> who trust our
                                <span className="text-emerald-600"> engineering-first approach</span> to sustainable climate control.
                            </p>
                            <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-emerald-400/30 text-sm sm:text-base">
                                Get Your Custom Solution →
                            </button>
                            <p className="text-gray-400 text-xs sm:text-sm mt-3 md:mt-4">14-day free assessment included</p>
                        </motion.div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}