import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer() {
    const footerLinks = [
        {
            title: "Company",
            links: [
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "OEM", path: "/oem" },
                { name: "Contact", path: "/contact" }
            ]
        },
        {
            title: "Support",
            links: [
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms of Service", path: "/terms" },
                { name: "Warranty", path: "/warranty" },
                { name: "FAQ", path: "/faq" }
            ]
        }
    ];

    const contactInfo = [
        { icon: <FaMapMarkerAlt className="mr-2" />, text: "123 Industrial Area, Dubai, UAE" },
        { icon: <FaPhone className="mr-2" />, text: "+971 4 123 4567" },
        { icon: <FaEnvelope className="mr-2" />, text: "info@greenac.ae" }
    ];

    return (
        <footer className="px-6 py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                {/* Company Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <h3 className="text-2xl font-bold text-white">
                        <span className="text-emerald-400">Green</span> Aire Conditioning
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                        Innovative HVAC solutions for commercial and residential spaces across the UAE.
                    </p>
                    
                    <div className="flex items-center space-x-4">
                        <a 
                            href="#" 
                            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
                        >
                            <FaLinkedin className="mr-2" />
                            LinkedIn Profile
                        </a>
                    </div>
                </motion.div>

                {/* Links Columns */}
                {footerLinks.map((column, colIndex) => (
                    <motion.div
                        key={colIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: colIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h4 className="text-white font-bold text-lg mb-4 border-b border-emerald-500 pb-2 inline-block">
                            {column.title}
                        </h4>
                        <ul className="space-y-3">
                            {column.links.map((link, linkIndex) => (
                                <li key={linkIndex}>
                                    <Link 
                                        to={link.path} 
                                        className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center"
                                    >
                                        <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <h4 className="text-white font-bold text-lg mb-4 border-b border-emerald-500 pb-2 inline-block">
                        Contact Us
                    </h4>
                    <ul className="space-y-4">
                        {contactInfo.map((item, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-emerald-400 mt-1">{item.icon}</span>
                                <span className="text-gray-400">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>

            {/* Copyright */}
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-700 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm"
                >
                    <p>
                        © {new Date().getFullYear()} Green Aire Conditioning Systems Co. LLC. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacy" className="hover:text-emerald-400 transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-emerald-400 transition-colors">Terms of Service</Link>
                        <Link to="/sitemap" className="hover:text-emerald-400 transition-colors">Sitemap</Link>
                    </div>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer;