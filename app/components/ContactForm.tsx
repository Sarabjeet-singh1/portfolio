'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../env';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          name: formData.name,
          email: formData.email,
          message: `
            Name: ${formData.name}
            Email: ${formData.email}
            
            Message:
            ${formData.message}
          `,
        },
        emailjsConfig.publicKey
      );
      setMessageSent(true);
      setFormData({ name: '', email: '', message: '' });
      setFieldErrors({});
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Error sending email:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when typing
    setFieldErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          {messageSent ? (
            <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg text-center">
              <div className="flex items-center justify-center mb-4">
                <CheckCircleIcon className="w-12 h-12 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-green-600 dark:text-green-400">
                Thank you for reaching out! I'll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg text-red-700 dark:text-red-300">
                  {error}
                </div>
              )}
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    fieldErrors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                  placeholder="Enter your name"
                />
                {fieldErrors.name && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">{fieldErrors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    fieldErrors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                  placeholder="Enter your email"
                />
                {fieldErrors.email && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">{fieldErrors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    fieldErrors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  required
                  placeholder="Enter your message"
                />
                {fieldErrors.message && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">{fieldErrors.message}</p>
                )}
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          )}
        </motion.div>

        <p className="text-center mt-8 text-gray-600 dark:text-gray-400">
          Let's create something amazing together!
        </p>
      </div>
    </section>
  );
};

export default ContactForm;
