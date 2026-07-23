// app/about/page.tsx
"use client";

import React from "react";
import { 
  FaChevronRight, 
  FaPhone, 
  FaRegThumbsUp, 
  FaRegClock,
  FaFacebookF,
  FaHeartPulse,
  FaBuildingColumns,
} from "react-icons/fa6";
import { Lightbulb, Users2, ShieldCheck, BarChart3, Store } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaHeartbeat, FaChartPie, FaStore, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 font-sans antialiased">
      
      {/* ================= BREADCRUMB HEADER ================= */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-50/60 to-teal-50/40 rounded-3xl p-10 text-center border border-emerald-100/40 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">About Us</h1>
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wide uppercase">
            <span className="text-emerald-600 hover:underline cursor-pointer">Home</span>
            <FaChevronRight size={10} className="text-slate-400" />
            <span className="text-slate-500">About Us</span>
          </div>
        </div>
      </section>

      {/* ================= COMPANY PROFILE SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Images Overlay Pattern */}
        <div className="lg:col-span-5 relative flex flex-col justify-center items-center h-[500px]">
          {/* Decorative Dotted Pattern background */}
          <div className="absolute top-16 right-4 w-40 h-40 opacity-20 pointer-events-none bg-[radial-gradient(#059669_1.5px,transparent_1.5px)] [background-size:12px_12px]"></div>
          <div className="absolute bottom-4 left-4 w-40 h-40 opacity-20 pointer-events-none bg-[radial-gradient(#059669_1.5px,transparent_1.5px)] [background-size:12px_12px]"></div>
          
          {/* Upper Image with curved border */}
          <div className="absolute top-0 left-6 w-[75%] aspect-[4/3] bg-slate-200 rounded-t-[60px] rounded-bl-[60px] overflow-hidden border-4 border-white shadow-xl z-10">
            <img 
              src="/about1.png" 
              alt="Corporate Team Meeting" 
              className="w-full h-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80' }}
            />
          </div>

          {/* Lower Image nested layout */}
          <div className="absolute bottom-6 right-6 w-[65%] aspect-[1/1] bg-slate-200 rounded-b-[60px] rounded-tl-[60px] overflow-hidden border-8 border-white shadow-2xl z-20">
            <img 
              src="/about2.png" 
              alt="Developer analyzing systems" 
              className="w-full h-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80' }}
            />
          </div>
        </div>

        {/* Right Column: Copy text */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Webmatic Solutions LLC
          </h2>
          <p className="text-emerald-600 font-bold text-sm uppercase tracking-wider">
            Company Profile
          </p>
          <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
            <p>
              <strong className="text-slate-900 font-bold">Webmatic Solutions LLC</strong> was founded in 2023 with a clear vision to be a leader in delivering perfect, professional, and responsible technology solutions. We aim to provide exceptional services that evolve with the needs of our clients, enabling them to stay ahead in the rapidly changing tech landscape. Our commitment is to offer innovative and transformational tech services that go beyond the ordinary, ensuring the highest level of customer satisfaction.
            </p>
            <p>
              With a dedicated focus on both individuals and businesses, Innometrics Software strives to provide round-the-clock support, ensuring that clients can rely on us 24 hours a day, 7 days a week, and 365 days a year. Whether it&apos;s troubleshooting software issues, setting up secure networks, or addressing complex cybersecurity challenges, we are here to deliver comprehensive and timely solutions. Our mission is simple: keep systems running smoothly, minimize downtime, and maximize efficiency, allowing clients to focus on what matters most—growing their businesses and achieving their goals.
            </p>
          </div>
        </div>
      </section>

      {/* ================= VISION, MISSION & METRICS BANNER ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-12 gap-12 items-start">
        {/* Left 8 Columns: Vision & Mission Statements */}
        <div className="lg:col-span-8 space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-black text-slate-900">Our Vision</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Our vision at <strong className="text-slate-900 font-semibold">Webmatic Solutions LLC </strong> is to set the benchmark for perfection, professionalism, and responsibility in the technology services industry. We aspire to build strong, lasting relationships with our clients by providing consistently exceptional service. By staying at the forefront of technological advancements, we aim to deliver innovative solutions that anticipate and meet our clients&apos; future needs. We believe in providing a seamless experience, ensuring that every interaction with our team leaves a positive and lasting impact.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-black text-slate-900">Our Mission</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Our mission is to empower individuals and businesses by delivering high-quality, reliable, and innovative technical solutions. Through a customer-centric approach, we aim to ensure that every client experiences seamless technology support, enabling them to achieve their objectives with minimal disruption. We are dedicated to improving operational efficiency, security, and performance for our clients by providing timely solutions and expert guidance.
            </p>
          </div>
        </div>

        {/* Right 4 Columns: Live Stat Counters */}
        <div className="lg:col-span-4 bg-white border border-slate-100 rounded-3xl p-8 shadow-sm space-y-8">
          {/* Stat Item 1 */}
          <div className="flex items-center gap-5">
            <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl shrink-0">
              <FaPhone size={24} />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-slate-900">2M</span>
                <span className="text-emerald-600 font-bold text-lg">Calls</span>
              </div>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">We Have Answered</p>
            </div>
          </div>
          <hr className="border-slate-100" />

          {/* Stat Item 2 */}
          <div className="flex items-center gap-5">
            <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl shrink-0">
              <FaRegThumbsUp size={24} />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-slate-900">90</span>
                <span className="text-emerald-600 font-bold text-xl">%</span>
              </div>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Customer Satisfaction</p>
            </div>
          </div>
          <hr className="border-slate-100" />

          {/* Stat Item 3 */}
          <div className="flex items-center gap-5">
            <div className="p-4 bg-emerald-50 text-emerald-600 rounded-2xl shrink-0">
              <FaRegClock size={24} />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-slate-900">30</span>
                <span className="text-emerald-600 font-bold text-lg">Seconds</span>
              </div>
              <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Average Answer Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES SECTION ================= */}
      <section className="bg-slate-100/60 border-y border-slate-200/40 py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-14">
          <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900">
            Core Values
          </h2>

          {/* Row 1: Two Columns wide */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Customer Centricity */}
            <div className="bg-white border border-slate-200/40 rounded-3xl p-8 shadow-sm space-y-4 hover:shadow-md transition">
              <div className="w-12 h-12 text-slate-800 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center">
                <Users2 size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-emerald-600">Customer-Centricity</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                We place our customers at the core of everything we do. Our services are tailored to meet the specific needs of each client, ensuring maximum satisfaction and value.
              </p>
            </div>

            {/* Innovation */}
            <div className="bg-white border border-slate-200/40 rounded-3xl p-8 shadow-sm space-y-4 hover:shadow-md transition">
              <div className="w-12 h-12 text-slate-800 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center">
                <Lightbulb size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-emerald-600">Innovation</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                We are always looking for fresh and innovative approaches to challenges. By embracing the latest technological advancements, we aim to provide innovative solutions that help our clients stay ahead in their industries.
              </p>
            </div>
          </div>

          {/* Row 2: Three Columns wide */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Professionalism */}
            <div className="bg-white border border-slate-200/40 rounded-3xl p-8 shadow-sm space-y-4 hover:shadow-md transition">
              <div className="w-12 h-12 text-slate-800 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center">
                <ShieldCheck size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-emerald-600">Professionalism</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Every interaction with our clients reflects our commitment to professionalism. From communication to service delivery, we maintain the highest standards of quality and integrity.
              </p>
            </div>

            {/* Responsibility */}
            <div className="bg-white border border-slate-200/40 rounded-3xl p-8 shadow-sm space-y-4 hover:shadow-md transition">
              <div className="w-12 h-12 text-slate-800 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center">
                <Users2 size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-emerald-600">Responsibility</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                We take full responsibility for our services and their impact on our clients&apos; operations. Our team is dedicated to providing reliable, accurate, and timely support to ensure that technology works seamlessly for our customers.
              </p>
            </div>

            {/* Continuous Improvement */}
            <div className="bg-white border border-slate-200/40 rounded-3xl p-8 shadow-sm space-y-4 hover:shadow-md transition">
              <div className="w-12 h-12 text-slate-800 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center">
                <BarChart3 size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-emerald-600">Continuous Improvement</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                We believe in constantly improving our skills, services, and processes. By fostering a culture of learning and growth, we stay updated with the latest technology trends and advancements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMMITMENT TO INNOVATION ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Graphic Overlays */}
        <div className="lg:col-span-5 relative flex flex-col justify-center items-center h-[460px] order-last lg:order-first">
          <div className="absolute top-4 left-4 w-32 h-32 opacity-20 bg-[radial-gradient(#059669_1.5px,transparent_1.5px)] [background-size:12px_12px]"></div>
          <div className="absolute bottom-4 right-4 w-32 h-32 opacity-20 bg-[radial-gradient(#059669_1.5px,transparent_1.5px)] [background-size:12px_12px]"></div>
          
          <div className="absolute top-0 right-4 w-[75%] aspect-[4/5] bg-slate-200 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
            <img 
              src="/about3.png" 
              alt="Engineers planning innovation blueprints" 
              className="w-full h-full object-cover"
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=600&q=80' }}
            />
          </div>
          
        </div>

        {/* Right Column: Content Box */}
        <div className="lg:col-span-7 p-10 md:p-12 rounded-[2rem] border-[3px] border-dashed border-slate-300 bg-white relative">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Our Commitment to Innovation</h2>
              <p className="text-slate-800 font-semibold mt-1">Webmatic Solutions LLC </p>
            </div>

            <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
              <p>
                At <strong className="text-slate-900 font-semibold">Webmatic Solutions LLC </strong>, innovation is the foundation of everything we do. We believe that technology should not only solve present-day challenges but also anticipate future needs. Our commitment to continuous improvement drives us to explore new possibilities, enhance digital solutions, and adopt cutting-edge technologies. Whether it&apos;s AI-powered automation, advanced cybersecurity protocols, or cloud computing advancements, we constantly evolve to offer our clients the best-in-class IT solutions. By investing in research, development, and industry collaborations, we ensure that our services remain at the forefront of the digital revolution.
              </p>
              <p>
                To stay ahead in an ever-changing technological landscape, we embrace a culture of adaptability and learning. Our team of experts continuously refines methodologies, optimizes processes, and integrates emerging technologies to deliver efficient, scalable, and future-proof solutions. From enterprise IT infrastructure to custom software development, we ensure that businesses thrive in a digitally connected world. As part of ourNormally I can help with things like this, but I don't seem to have access to that content. You can try again or ask me for something else.
                </p>
            </div>
            </div>
            </div>
    </section>
    
  <section className="py-16 px-6 bg-slate-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">Vertical Expertise</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { icon: <FaHeartbeat className="text-emerald-600" />, title: "Healthcare", desc: "Specialized technology solutions..." },
          { icon: <FaChartPie className="text-emerald-600" />, title: "Finance", desc: "Cybersecurity and IT management..." },
          { icon: <FaStore className="text-emerald-600" />, title: "Retail", desc: "Setting up secure networks..." },
          { icon: <FaGraduationCap className="text-emerald-600" />, title: "Education", desc: "IT infrastructure management..." },
          { icon: <FaBriefcase className="text-emerald-600" />, title: "Small and Medium Enterprises (SMEs)", desc: "End-to-end IT support..." }
        ].map((item, i) => (
          <div key={i} className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
            <div className="text-2xl pt-1">{item.icon}</div>
            <div>
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-slate-600 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
    </div>
  )}