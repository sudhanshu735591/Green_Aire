"use client"
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../Footer';
import Header from '../Header';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [hoveredField, setHoveredField] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
    };
     const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setIsSubmitting(true);
        setErrors({});

        // FormSubmit.co integration
        const form = e.target;
        form.action = "https://formsubmit.co/ajax/shanuchees@gmail.com";
        form.method = "POST";
        
        // Add hidden fields for FormSubmit
        const formDataWithHoneypot = new FormData(form);
        formDataWithHoneypot.append("_captcha", "false");
        formDataWithHoneypot.append("_template", "table");
        formDataWithHoneypot.append("_subject", `New Contact Form Submission from ${formData.name}`);

        fetch(form.action, {
            method: "POST",
            body: formDataWithHoneypot,
        })
        .then(response => {
            if (!response.ok) throw new Error('Failed to submit form');
            return response.json();
        })
        .then(data => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({ name: '', email: '', message: '' });
        })
        .catch(error => {
            console.error('Error:', error);
            setIsSubmitting(false);
            alert('Failed to send message. Please try again later or email us directly at shanuchees@gmail.com');
        });
    };
    const fieldVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        },
        hover: { scale: 1.02 }
    };

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

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-500">
                            Get in Touch
                        </h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="mt-5 max-w-xl mx-auto text-xl text-gray-600"
                        >
                            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white shadow-2xl rounded-2xl overflow-hidden"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            {/* Contact Form */}
                            <div className="py-10 px-6 sm:p-10 lg:col-span-1">
                                <motion.h2
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-2xl font-bold text-gray-900 mb-6"
                                >
                                    Send us a message
                                </motion.h2>

                                <AnimatePresence>
                                    {submitSuccess ? (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="bg-green-50 border border-green-200 rounded-md p-4 mb-6 overflow-hidden"
                                        >
                                            <div className="flex">
                                                <div className="flex-shrink-0">
                                                    <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div className="ml-3">
                                                    <h3 className="text-sm font-medium text-green-800">Message sent successfully!</h3>
                                                    <div className="mt-2 text-sm text-green-700">
                                                        <p>Thank you for contacting us. We'll get back to you soon.</p>
                                                    </div>
                                                    <div className="mt-4">
                                                        <motion.button
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            onClick={() => setSubmitSuccess(false)}
                                                            className="text-sm font-medium text-green-800 hover:text-green-600"
                                                        >
                                                            Send another message
                                                        </motion.button>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            variants={containerVariants}
                                            initial="hidden"
                                            animate="visible"
                                            onSubmit={handleSubmit}
                                            className="space-y-6"
                                        >
                                            <motion.div
                                                variants={fieldVariants}
                                                onHoverStart={() => setHoveredField('name')}
                                                onHoverEnd={() => setHoveredField(null)}
                                            >
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                    Name
                                                </label>
                                                <div className="mt-1 relative">
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        className={`block w-full px-4 py-3 rounded-lg shadow-sm ${errors.name ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'} border transition-all duration-300`}
                                                    />
                                                    {hoveredField === 'name' && (
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: '100%' }}
                                                            className="absolute bottom-0 left-0 h-0.5 bg-indigo-500"
                                                            transition={{ duration: 0.3 }}
                                                        />
                                                    )}
                                                    {errors.name && (
                                                        <motion.p
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            className="mt-2 text-sm text-red-600"
                                                        >
                                                            {errors.name}
                                                        </motion.p>
                                                    )}
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                variants={fieldVariants}
                                                onHoverStart={() => setHoveredField('email')}
                                                onHoverEnd={() => setHoveredField(null)}
                                            >
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                    Email
                                                </label>
                                                <div className="mt-1 relative">
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        className={`block w-full px-4 py-3 rounded-lg shadow-sm ${errors.email ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'} border transition-all duration-300`}
                                                    />
                                                    {hoveredField === 'email' && (
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: '100%' }}
                                                            className="absolute bottom-0 left-0 h-0.5 bg-indigo-500"
                                                            transition={{ duration: 0.3 }}
                                                        />
                                                    )}
                                                    {errors.email && (
                                                        <motion.p
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            className="mt-2 text-sm text-red-600"
                                                        >
                                                            {errors.email}
                                                        </motion.p>
                                                    )}
                                                </div>
                                            </motion.div>

                                            <motion.div
                                                variants={fieldVariants}
                                                onHoverStart={() => setHoveredField('message')}
                                                onHoverEnd={() => setHoveredField(null)}
                                            >
                                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                                    Message
                                                </label>
                                                <div className="mt-1 relative">
                                                    <textarea
                                                        id="message"
                                                        name="message"
                                                        rows={4}
                                                        value={formData.message}
                                                        onChange={handleChange}
                                                        className={`block w-full px-4 py-3 rounded-lg shadow-sm ${errors.message ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'} border transition-all duration-300`}
                                                    />
                                                    {hoveredField === 'message' && (
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: '100%' }}
                                                            className="absolute bottom-0 left-0 h-0.5 bg-indigo-500"
                                                            transition={{ duration: 0.3 }}
                                                        />
                                                    )}
                                                    {errors.message && (
                                                        <motion.p
                                                            initial={{ opacity: 0, y: -10 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            className="mt-2 text-sm text-red-600"
                                                        >
                                                            {errors.message}
                                                        </motion.p>
                                                    )}
                                                </div>
                                            </motion.div>

                                            <motion.div variants={fieldVariants}>
                                                <motion.button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                                    className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white ${isSubmitting ? 'bg-indigo-400' : 'bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300`}
                                                >
                                                    {isSubmitting ? (
                                                        <>
                                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                            </svg>
                                                            Sending...
                                                        </>
                                                    ) : 'Send Message'}
                                                </motion.button>
                                            </motion.div>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Contact Information */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                                className="bg-gradient-to-br from-indigo-700 to-blue-600 py-10 px-6 sm:p-10 lg:col-span-1"
                            >
                                <h2 className="text-2xl font-bold text-white mb-6">Contact information</h2>

                                <div className="space-y-6">
                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="flex items-start bg-indigo-600/20 p-4 rounded-lg backdrop-blur-sm"
                                    >
                                        <div className="flex-shrink-0">
                                            <svg className="h-6 w-6 text-indigo-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="ml-3">
                                            <h3 className="text-sm font-medium text-indigo-200">Email</h3>
                                            <p className="text-lg text-white">contact@example.com</p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="flex items-start bg-indigo-600/20 p-4 rounded-lg backdrop-blur-sm"
                                    >
                                        <div className="flex-shrink-0">
                                            <svg className="h-6 w-6 text-indigo-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div className="ml-3">
                                            <h3 className="text-sm font-medium text-indigo-200">Phone</h3>
                                            <p className="text-lg text-white">+971 0522125656</p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="flex items-start bg-indigo-600/20 p-4 rounded-lg backdrop-blur-sm"
                                    >
                                        <div className="flex-shrink-0">
                                            <svg className="h-6 w-6 text-indigo-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div className="ml-3">
                                            <h3 className="text-sm font-medium text-indigo-200">Address</h3>
                                            <p className="text-lg text-white">Industrial Area, Dubai Mainland, UAE</p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ x: 5 }}
                                        className="flex items-start bg-indigo-600/20 p-4 rounded-lg backdrop-blur-sm"
                                    >
                                        <div className="flex-shrink-0">
                                            <svg className="h-6 w-6 text-indigo-200" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div className="ml-3">
                                            <h3 className="text-sm font-medium text-indigo-200">Hours</h3>
                                            <p className="text-lg text-white">Monday - Friday</p>
                                            <p className="text-lg text-white">9:00 AM - 5:00 PM PST</p>
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="mt-10">
                                    <h3 className="text-sm font-medium text-indigo-200 mb-3">Follow us</h3>
                                    <div className="flex space-x-4">
                                        {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => (
                                            <motion.a
                                                key={social}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.5 + index * 0.1 }}
                                                whileHover={{ y: -5, scale: 1.1 }}
                                                href="#"
                                                className="text-indigo-200 hover:text-white bg-indigo-600/30 p-2 rounded-full"
                                            >
                                                <span className="sr-only">{social}</span>
                                                {social === 'facebook' && (
                                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                                                    </svg>
                                                )}
                                                {social === 'twitter' && (
                                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                                    </svg>
                                                )}
                                                {social === 'instagram' && (
                                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                                                    </svg>
                                                )}
                                                {social === 'linkedin' && (
                                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                        <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                                                    </svg>
                                                )}
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;