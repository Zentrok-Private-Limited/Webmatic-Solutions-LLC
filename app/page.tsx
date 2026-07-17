// app/page.tsx
"use client";

import React, { useState } from "react";
import {
  FaChevronDown,
  FaPhone,
  FaRegEnvelope,
  FaMapPin,
  FaRegMessage,
  FaShieldHalved,
  FaLaptop,
  FaCode,
  FaChartLine,
  FaGears,
  FaUsers,
  FaChevronLeft,
  FaChevronRight,
  FaPlus,
  FaMinus,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { FiSend } from "react-icons/fi";

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased">
      {/* ================= HERO SECTION 1 ================= */}
      <section className="relative bg-gradient-to-b from-emerald-50/40 via-white to-transparent px-6 py-16 md:py-16 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-xl md:text-2xl lg:text-3xl font-black text-slate-900 leading-tight">
            A one-stop solution for <br />
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl bg-clip-text font-black text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
            IT Services, Support, and Consulting
          </h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl">
            Committed to excellence, we offer expert technical and operational
            support, delivering tailored, best-in-class solutions. Our dedicated
            team ensures seamless service, proactive troubleshooting, and
            round-the-clock assistance—keeping your business secure, efficient,
            and always connected.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-[10px] font-bold text-slate-600"
                >
                  U{i}
                </div>
              ))}
            </div>
            <p className="text-xs font-semibold text-amber-600">
              Trusted by 1M+ people around the globe
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-medium px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5">
              Let&apos;s Talk
            </button>
            <button className="border border-slate-300 text-slate-700 font-medium px-6 py-3 rounded-lg hover:bg-slate-50 transition">
              Contact Us
            </button>
          </div>
        </div>

        <div className="relative justify-self-center lg:justify-self-end">
          {/* The decorative background shadow */}
          <div className="absolute inset-0 bg-emerald-600/10 rounded-2xl transform translate-x-3 translate-y-3 -z-10"></div>

          {/* Right Column: Image */}
          <div className="relative w-full max-w-lg mx-auto md:mx-0">
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-emerald-600/10 rounded-2xl rotate-3 scale-[1.02] -z-10"></div>

            {/* Image Container with Aspect Ratio */}
            <div className="relative w-full aspect-[4/3] rounded-2xl border-4 border-white shadow-2xl overflow-hidden">
              <img
                src="/hero.jpg"
                alt="Webmatic Solutions Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= HERO SECTION 2 (Stats Banner) ================= */}
      <section className="bg-gradient-to-r from-teal-900 to-emerald-950 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase font-bold tracking-widest text-emerald-300">
              Technology on Demand
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Innovative Tech Solutions, IT Services, and Consulting - 24/7 IT
              Support for Seamless Operations.
            </h2>
            <p className="text-emerald-100 text-sm md:text-base leading-relaxed opacity-90">
              We provide 24/7 support with experts in network configuration,
              cybersecurity, troubleshooting, and other areas. Our solutions are
              expertly designed to minimize downtime and maximize efficiency.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-white text-slate-900 rounded-xl p-6 shadow-md min-w-[140px] text-center flex-1">
                <span className="block text-3xl font-black text-emerald-600">
                  1M+
                </span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Queries Resolved
                </span>
              </div>
              <div className="bg-white text-slate-900 rounded-xl p-6 shadow-md min-w-[140px] text-center flex-1">
                <span className="block text-3xl font-black text-teal-600">
                  50K+
                </span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Happy Clients
                </span>
              </div>
            </div>

            <button className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-medium px-6 py-3 rounded-lg transition mt-4">
              <FaPhone size={12} /> Call Us
            </button>
          </div>

          <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
            <div className="w-full h-64 md:h-96 bg-slate-800/50 rounded-xl flex items-center justify-center text-slate-400">
              <img src="/group.jpg" alt="" className="rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: EXPERTISE ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-black text-center text-slate-900 mb-14">
          Explore Our Expertise & Featured Solutions
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Expert Tech Support",
              icon: <FaGears />,
              desc: "Experience unparalleled reliability with our expert tech support, ensuring your systems run smoothly.",
            },
            {
              title: "IT Support for Businesses",
              icon: <FaLaptop />,
              desc: "Reliable IT support solutions that keep your business running smoothly, minimize downtime, and boost efficiency.",
            },
            {
              title: "IT Consultancy & Advisory",
              icon: <FaUsers />,
              desc: "Expert consultancy and advisory services to guide businesses in making informed, strategic technology choices.",
            },
            {
              title: "Cybersecurity Services",
              icon: <FaShieldHalved />,
              desc: "Protect your business with advanced cybersecurity solutions, threat detection, and defense against attacks.",
            },
            {
              title: "Digital Marketing",
              icon: <FaChartLine />,
              desc: "Elevate your brand's online presence with tailored digital marketing strategies that drive high conversions.",
            },
            {
              title: "Website Design & Development",
              icon: <FaCode />,
              desc: "Building aesthetically beautiful and highly useful websites that increase interaction and produce outcomes.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-100 rounded-xl p-6 shadow-sm hover:shadow-md transition flex gap-4 items-start group"
            >
              <div className="p-3 bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white rounded-lg transition duration-300 shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 4: HOW WE SERVE ================= */}
      <section className="bg-slate-50 border-y border-slate-100 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-4 mb-14">
          <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">
            How We Serve
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            In just 3 Simple Steps
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Reach Us",
              desc: "We're here to help you around the clock.",
              img: "/support1.jpg",
            },
            {
              step: "02",
              title: "Share Your Concern",
              desc: "Bring your grievances here for immediate assistance.",
              img: "/support2.jpg",
            },
            {
              step: "03",
              title: "Get Your Problem Resolved",
              desc: "Fast resolution of your problems with expert live help.",
              img: "/support3.jpg",
            },
          ].map((s, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-100 rounded-2xl p-6 text-center shadow-sm space-y-4 hover:-translate-y-1 transition duration-300"
            >
              <div className="w-full h-40 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                <img src={s.img} alt="" />
              </div>
              <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-600 font-bold text-xs rounded-full">
                Step {s.step}
              </div>
              <h3 className="font-bold text-lg text-slate-900">{s.title}</h3>
              <p className="text-xs text-slate-500 max-w-[200px] mx-auto">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 5: IMMEDIATE ASSISTANCE CTA ================= */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-teal-900 to-emerald-950 border border-emerald-100 rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center relative overflow-hidden">
          <div className="space-y-4 z-10">
            <h2 className="text-2xl md:text-3xl font-black text-emerald-50">
              Need Immediate Assistance?
            </h2>
            <p className="text-sm text-slate-50 leading-relaxed">
              Use our live chat feature to get instantaneous IT assistance from
              a top support specialist. We&apos;ll keep you on track with
              everything from helpdesk to IT services and consulting.
            </p>
            <button className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-medium px-6 py-3 rounded-lg shadow-md inline-flex items-center gap-2">
              <FaRegMessage size={14} /> Let&apos;s Talk
            </button>
          </div>
          <div className="relative justify-self-center z-10">
            <div className="w-100 h-70 bg-white/80 rounded-xl shadow-lg border border-slate-200/50 flex items-center justify-center text-slate-400">
              <img src="/customer_support.jpg" alt="" />
            </div>
          </div>
          <div className="absolute right-[-20px] bottom-[-20px] text-emerald-100 opacity-20 transform scale-[3] pointer-events-none">
            <FaPhone size={120} />
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: TESTIMONIALS ================= */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900">
            Our Beaming Faces
          </h2>
          <p className="text-emerald-600 font-medium text-sm">
            What they think about Innometrics Software
          </p>
        </div>

        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <button className="p-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 shrink-0 shadow-sm">
            <FaChevronLeft size={16} />
          </button>

          <div className="grid md:grid-cols-3 gap-6 w-full">
            {[
              {
                name: "Sarah Mitchell",
                location: "Illinois",
                text: "Their IT helpdesk was able to resolve my technical issue within hours. I can't believe how fast and easy it was to get the assistance needed.",
              },
              {
                name: "David Johnson",
                location: "Ohio",
                text: "I've never experienced better IT support. Innometrics Software Pvt. Ltd. provided excellent advice on improving my company's data architecture.",
              },
              {
                name: "John Peterson",
                location: "New York",
                text: "Innometrics Software service saved me when my computer crashed right before a major client pitch. Their 24/7 support is a lifesaver.",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4"
              >
                <p className="text-xs italic text-slate-600 leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[11px] text-slate-400 font-medium">
                      {t.location}
                    </span>
                    <span className="text-amber-500 text-xs font-bold">
                      ★★★★★
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="p-2 rounded-full border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 shrink-0 shadow-sm">
            <FaChevronRight size={16} />
          </button>
        </div>
      </section>

      {/* ================= SECTION 7: FAQS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-2 space-y-4">
          <span className="text-sm font-bold text-emerald-600 uppercase tracking-widest">
            FAQs
          </span>
          <h2 className="text-3xl font-black text-slate-900 leading-tight">
            Answers to Your Most Common Questions About IT Services
          </h2>
          <div className="text-slate-400/50 text-8xl font-black select-none pointer-events-none hidden md:block">
            FAQS
          </div>
        </div>

        <div className="md:col-span-3 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm divide-y divide-slate-100">
          {[
            "What is the difference between IT service and IT support?",
            "What kind of IT Support Services are needed for Businesses?",
            "What are the examples of Support Services?",
            "What kind of services do IT Support Services have?",
            "How do I avail of IT Support Services?",
            "What does an advisory consultant do?",
          ].map((q, idx) => (
            <div key={idx} className="py-4 first:pt-0 last:pb-0">
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between text-left font-semibold text-slate-800 hover:text-emerald-600 transition gap-4 text-sm md:text-base"
              >
                <span>{q}</span>
                {openFaq === idx ? (
                  <FaMinus size={14} className="text-emerald-600 shrink-0" />
                ) : (
                  <FaPlus size={14} className="text-slate-400 shrink-0" />
                )}
              </button>
              {openFaq === idx && (
                <p className="mt-3 text-xs text-slate-500 leading-relaxed transition-all">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo. Our structural solutions match business criteria
                  seamlessly.
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
