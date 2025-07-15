import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import variants from '../utils/variants';

const Price = () => {
  const [activeService, setActiveService] = useState('Content Creation');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [postCount, setPostCount] = useState('');
  const [reelCount, setReelCount] = useState('');

  const services = ['Content Creation', 'Web Development', 'Social Media Marketing', 'Performance Marketing'];

  const webDevPricing = [
    { service: 'Landing Page', price: 2999, description: 'Basic responsive landing page' },
    { service: 'Advanced Landing Page', price: 6999, description: 'With forms, animations & integrations' },
    { service: 'Landing Page with Payment', price: 14999, description: 'Complete payment gateway integration' },
    { service: 'Full Website with Admin Panel', price: 21999, description: 'Complete CMS with admin dashboard' },
    { service: 'E-commerce Website', price: 35999, description: 'Full online store with inventory management' },
    { service: 'Custom Web Application', price: 49999, description: 'Tailored web application for your business' }
  ];

  const performanceMarketingPricing = [
    { service: 'Google Ads Setup & Management', price: 15000, description: 'Monthly campaign management' },
    { service: 'Facebook & Instagram Ads', price: 12000, description: 'Social media advertising campaigns' },
    { service: 'SEO Optimization Package', price: 18000, description: 'Complete SEO audit and optimization' },
    { service: 'PPC Campaign Management', price: 20000, description: 'Multi-platform PPC management' },
    { service: 'Analytics & Reporting', price: 8000, description: 'Monthly performance reports' },
    { service: 'Conversion Rate Optimization', price: 25000, description: 'Landing page optimization for better conversions' }
  ];

  const socialMediaMarketingPricing = [
    { service: 'Social Media Strategy', price: 10000, description: 'Monthly strategy and content planning' },
    { service: 'Instagram Management', price: 15000, description: 'Complete Instagram account management' },
    { service: 'Multi-Platform Management', price: 25000, description: 'Instagram, Facebook, LinkedIn, Twitter' },
    { service: 'Influencer Marketing Campaign', price: 30000, description: 'Influencer outreach and campaign management' },
    { service: 'Social Media Advertising', price: 20000, description: 'Paid social media campaigns' },
    { service: 'Community Management', price: 12000, description: 'Engagement and community building' }
  ];

  const calculateContentPricing = () => {
    const posts = parseInt(postCount) || 0;
    const reels = parseInt(reelCount) || 0;
    
    let postPrice = 0;
    if (posts <= 5) postPrice = posts * 400;
    else if (posts <= 10) postPrice = posts * 300;
    else postPrice = posts * 250;

    let reelPrice = 0;
    if (reels < 5) reelPrice = reels * 2000;
    else if (reels <= 15) reelPrice = reels * 1500;
    else reelPrice = reels * 1200;

    return { postPrice, reelPrice, total: postPrice + reelPrice };
  };

  const contentPricing = calculateContentPricing();

  const handleServiceClick = (service) => {
    setActiveService(service);
    setIsDropdownOpen(false);
  };

  const renderPricingContent = () => {
    switch (activeService) {
      case 'Content Creation':
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Number of Posts per Month
                </label>
                <input
                  type="number"
                  value={postCount}
                  onChange={(e) => setPostCount(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Enter number of posts"
                />
                <p className="text-xs text-gray-500 mt-1">
                  ≤5 posts: ₹400 each | ≤10 posts: ₹300 each | 10 posts: ₹250 each
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Number of Reels per Month
                </label>
                <input
                  type="number"
                  value={reelCount}
                  onChange={(e) => setReelCount(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Enter number of reels"
                />
                <p className="text-xs text-gray-500 mt-1">
                  &lt;5 reels: ₹2000 each | 5-15 reels: ₹1500 each | 15 reels: ₹1200 each
                </p>
              </div>
            </div>
            
            {(postCount || reelCount) && (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}
                variants={variants("bottom", 0.1)}
                className="bg-primary/10 p-4 rounded-lg border border-primary"
              >
                <h4 className="font-semibold text-lg text-secondary mb-3">Pricing Breakdown</h4>
                <div className="space-y-2">
                  {postCount && (
                    <div className="flex justify-between">
                      <span>Posts ({postCount} × {postCount <= 5 ? '₹400' : postCount <= 10 ? '₹300' : '₹250'})</span>
                      <span className="font-semibold">₹{contentPricing.postPrice.toLocaleString()}</span>
                    </div>
                  )}
                  {reelCount && (
                    <div className="flex justify-between">
                      <span>Reels ({reelCount} × {reelCount < 5 ? '₹2000' : reelCount <= 15 ? '₹1500' : '₹1200'})</span>
                      <span className="font-semibold">₹{contentPricing.reelPrice.toLocaleString()}</span>
                    </div>
                  )}
                  <hr className="border-gray-300" />
                  <div className="flex justify-between text-lg font-bold text-black">
                    <span>Total Monthly Cost</span>
                    <span>₹{contentPricing.total.toLocaleString()}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        );

      case 'Web Development':
        return (
          <div className="space-y-4">
            {webDevPricing.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}
                variants={variants("bottom", index * 0.05)}
                className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg border-l-4 border-primary"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-lg text-secondary">{item.service}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-black">₹{item.price.toLocaleString()}</span>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'Social Media Marketing':
        return (
          <div className="space-y-4">
            {socialMediaMarketingPricing.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}
                variants={variants("bottom", index * 0.05)}
                className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg border-l-4 border-primary"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-lg text-secondary">{item.service}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-black">₹{item.price.toLocaleString()}</span>
                  <p className="text-xs text-gray-500">per month</p>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'Performance Marketing':
        return (
          <div className="space-y-4">
            {performanceMarketingPricing.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.1 }}
                variants={variants("bottom", index * 0.05)}
                className="flex justify-between items-center py-3 px-4 bg-gray-50 rounded-lg border-l-4 border-primary"
              >
                <div className="flex-1">
                  <h4 className="font-semibold text-lg text-secondary">{item.service}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-black">₹{item.price.toLocaleString()}</span>
                  <p className="text-xs text-gray-500">per month</p>
                </div>
              </motion.div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="pt-16 sm:pt-24 pb-16 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={variants("bottom", 0.1)}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md">
            <h2 className="text-2xl font-bold">Pricing</h2>
          </div>
          <div className="md:w-2/3 w-full">
            <p className="text-secondary md:w-2/3 text-base sm:text-lg leading-relaxed">
              Transparent pricing for all our services. Choose what works best for your business.
            </p>
          </div>
        </motion.div>

        {/* Desktop Service Tabs */}
        <div className="hidden md:flex justify-center mb-8">
          <div className="flex space-x-8">
            {services.map((service) => (
              <button
                key={service}
                onClick={() => handleServiceClick(service)}
                className={`px-6 py-3 text-lg font-medium transition-all duration-300 ${
                  activeService === service
                    ? 'text-black border-b-2 border-black'
                    : 'text-secondary hover:text-black'
                }`}
              >
                {service}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Service Dropdown */}
        <div className="md:hidden mb-8">
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex justify-between items-center px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-left"
            >
              <span className="font-medium text-secondary">{activeService}</span>
              <ChevronDownIcon className={`h-5 w-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                {services.map((service) => (
                  <button
                    key={service}
                    onClick={() => handleServiceClick(service)}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-50 ${
                      activeService === service ? 'bg-primary/10 text-primary' : 'text-secondary'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Pricing Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={variants("bottom", 0.2)}
          className="max-w-4xl mx-auto"
        >
          {renderPricingContent()}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.1 }}
          variants={variants("bottom", 0.3)}
          className="text-center mt-12"
        >
          <p className="text-secondary mb-4">Need a custom solution? Let's discuss your requirements.</p>
          <a
            href="https://wa.me/918592983978?text=Hi%20Codeware,%20I%20would%20like%20to%20discuss%20pricing%20for%20my%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-primary hover:text-black transition-all duration-300"
          >
            Get Custom Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Price;
