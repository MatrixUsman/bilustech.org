'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    products: [] as string[],
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      products: checked
        ? [...prev.products, value]
        : prev.products.filter((p) => p !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: '',
          products: [],
        });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        const error = await response.json();
        setSubmitStatus('error');
        setErrorMessage(error.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('An error occurred. Please try again later.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold">Get a Quote</h1>
          <p className="text-xl text-blue-100 mt-4">Professional Low Voltage Solutions for Your Business</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Address</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    2201 Menaul Blvd NE, Ste A<br />
                    Albuquerque, NM 87107<br />
                    USA
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Phone</h3>
                  <a
                    href="tel:+17389666630"
                    className="text-blue-900 dark:text-orange-600 hover:text-orange-600 dark:hover:text-orange-500 font-semibold transition-colors"
                  >
                    (738) 966-6630
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Email</h3>
                  <a
                    href="mailto:ceo@bilustech.com"
                    className="text-blue-900 dark:text-orange-600 hover:text-orange-600 dark:hover:text-orange-500 font-semibold transition-colors"
                  >
                    ceo@bilustech.com
                  </a>
                </div>

                <div className="bg-blue-50 dark:bg-slate-700 p-6 rounded-lg border-l-4 border-orange-600">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Quick Response</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    We typically respond to quote requests within 24 business hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-slate-700 rounded-lg shadow-lg dark:shadow-slate-900 p-8">
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <p className="text-green-800 dark:text-green-300 font-semibold">
                      ✓ Thank you! Your quote request has been received. We'll contact you soon.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <p className="text-red-800 dark:text-red-300 font-semibold">{errorMessage}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-slate-600 dark:text-white dark:placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-slate-600 dark:text-white dark:placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-slate-600 dark:text-white dark:placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-slate-600 dark:text-white dark:placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition"
                      placeholder="Your Company"
                    />
                  </div>

                  {/* Products Interested In */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Products Interested In
                    </label>
                    <div className="space-y-2">
                      {[
                        { id: 'electrical-panels', label: 'Electrical Panels' },
                        { id: 'networking', label: 'Networking Equipment' },
                        { id: 'cctv', label: 'CCTV Systems' },
                      ].map((product) => (
                        <label key={product.id} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            value={product.label}
                            checked={formData.products.includes(product.label)}
                            onChange={handleProductChange}
                            className="w-4 h-4 rounded cursor-pointer accent-orange-600"
                          />
                          <span className="text-gray-700 dark:text-gray-300">{product.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-slate-600 dark:text-white dark:placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition"
                      placeholder="Quote request for..."
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Message/Requirements *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-slate-600 dark:text-white dark:placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent outline-none transition resize-vertical"
                      placeholder="Please describe your requirements, specifications, or any questions..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || submitStatus === 'success'}
                    className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-400 dark:disabled:bg-gray-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Quote Request'}
                  </button>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    * Required fields. We respect your privacy and will only use your information to respond to your quote request.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
