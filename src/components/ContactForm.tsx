import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      {submitted && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
          Thank you for your message! I'll get back to you soon.
        </div>
      )}
      
      {error && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
          {error}
        </div>
      )}
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-800 font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-light-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-rani-pink"
          placeholder="Your Name"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-800 font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-light-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-rani-pink"
          placeholder="your.email@example.com"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-800 font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-light-blue rounded-lg focus:outline-none focus:ring-2 focus:ring-rani-pink resize-none"
          placeholder="Your message here..."
        />
      </div>
      
      <button
        type="submit"
        disabled={submitting}
        className={`w-full py-3 px-6 bg-rani-pink text-white rounded-lg font-medium hover:bg-rani-pink/90 transition-colors duration-300 ${
          submitting ? 'opacity-70 cursor-not-allowed' : 'scale-up'
        }`}
      >
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;