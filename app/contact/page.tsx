"use client";

import React, { useState } from 'react';
import {  FaPhone, FaRegEnvelope, FaChevronRight,
  FaFacebookF, FaTwitter, FaInstagram, FaLocationDot
} from 'react-icons/fa6';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for reaching out, ${formData.firstName}! We will get back to you shortly.`);
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">
      

      {/* ================= BREADCRUMBS BANNER ================= */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4">
        <div className="bg-gradient-to-r from-emerald-50/40 to-teal-50/40 border border-emerald-100/30 rounded-3xl py-12 px-6 text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">Contact Us</h1>
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500">
            <a href="/" className="hover:text-emerald-600 transition">Home</a>
            <FaChevronRight className="text-slate-400 w-2.5 h-2.5" />
            <span className="text-emerald-600">Contact Us</span>
          </div>
        </div>
      </div>

      {/* ================= CONTACT CONTENT AREA ================= */}
      <main className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column - Contact Details */}
        <div className="lg:col-span-6 space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">Contact Us</h2>
            <h3 className="text-lg font-bold text-slate-800">
              Get in Touch with <span className="text-emerald-600">Webmatic Solutions LLC </span> We Value Your Connection
            </h3>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
              Our dedicated team is committed to providing prompt and effective support to ensure your needs are met. We believe in open communication and are always ready to listen. Reach out to us via phone, email, or live chat, or visit our office during business hours.
            </p>
          </div>

          <div className="space-y-6 pt-4">

            {/* Email Info */}
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition duration-300">
                <FaRegEnvelope className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Email Address</span>
                <span className="text-lg font-extrabold text-slate-900 group-hover:text-emerald-600 transition">billing@webmaticsolutionsllc.com</span>
              </div>
            </div>

            {/* Address Info */}
            <div className="flex items-start gap-4 group">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition duration-300 shrink-0">
                <FaLocationDot className="w-5 h-5" />
              </div>
              <div className="pt-1">
                <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Office Address</span>
                <span className="text-sm font-bold text-slate-700 leading-relaxed block max-w-md group-hover:text-emerald-600 transition">
                  212 N. 2nd St. STE 100, Richmond, KY 40475
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form Container */}
        <div className="lg:col-span-6 bg-white border border-slate-100 rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-100/50">
          <h3 className="text-2xl font-extrabold text-slate-900 mb-6">Get in Touch</h3>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">First Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition text-sm"
                  value={formData.firstName}
                  onChange={e => setFormData({...formData, firstName: e.target.value})}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Last Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition text-sm"
                  value={formData.lastName}
                  onChange={e => setFormData({...formData, lastName: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
              <input 
                type="email" 
                required
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition text-sm"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number</label>
              <input 
                type="tel" 
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition text-sm"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Your Message</label>
              <textarea 
                rows={4}
                required
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition text-sm resize-none"
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-850 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition duration-200 mt-2"
            >
              Get in Touch
            </button>
          </form>
        </div>

      </main>

    </div>
  );
}
