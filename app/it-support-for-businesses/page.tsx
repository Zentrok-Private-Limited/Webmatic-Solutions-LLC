import React from "react";
import {  FaPhone, FaRegEnvelope, FaChevronRight,
  FaFacebookF, FaTwitter, FaInstagram, FaLocationDot
} from 'react-icons/fa6';

// Reusable Service Card Component
// Updated Service Card with consistent website colors
const ServiceCard = ({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: string;
}) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
    <div className="w-12 h-12 mb-4 text-3xl">{icon}</div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 mb-6 text-sm leading-relaxed">{desc}</p>
    {/* Updated button to use emerald-600 to match your navbar and brand */}
    <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-emerald-700 transition duration-150 shadow-md">
      Know More
    </button>
  </div>
);

export default function ITSupportForBusiness() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-blue-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-emerald-600">
          IT Support for Businesses
        </h1>
        <div className="flex justify-center items-center gap-2 mt-2 text-slate-600">
          <span className="text-emerald-600">Home</span>{" "}
          <FaChevronRight size={12} /> <span>IT Support for Businesses</span>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          IT Support Services and Solutions for Businesses
        </h2>
        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p>
            In today’s fast-evolving business environment, technology is the
            backbone of success. Whether you’re a growing startup, a mid-sized
            company, or a large enterprise, having a reliable IT support system
            is crucial to ensure seamless operations, enhanced security, and
            sustained growth. At <strong>Webmatic Solutions LLC</strong>, we
            recognize that every business has unique IT requirements, which is
            why we offer customized IT support services designed to align with
            your specific needs and challenges.
          </p>
          <p>
            Our services go beyond basic troubleshooting—we provide
            comprehensive IT support, including network management,
            cybersecurity solutions, cloud integration, software maintenance,
            data backup, and recovery. Whether you need onsite IT support for
            critical system issues or remote IT assistance for seamless
            day-to-day operations, our dedicated team of experts is available
            24/7 to ensure your business stays up and running without
            disruptions.
          </p>
          <p>
            From small businesses seeking cost-effective IT support to large
            organizations requiring enterprise-grade infrastructure management,
            we deliver scalable, proactive, and results-driven solutions. With
            real-time monitoring, predictive analytics, and industry-leading
            security protocols, we help businesses prevent downtime, minimize
            risks, and focus on driving innovation without IT concerns.
          </p>
          <p>
            At Webmatic Solutions LLC, we don’t just provide IT support—we
            become your technology partner, ensuring your IT infrastructure is
            secure, efficient, and ready for the future.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Solutions with a Purpose
          </h2>
          <p className="text-slate-600">
            Leveraging our deep expertise across diverse technologies, we
            deliver solutions that propel growth, optimize efficiency, and
            inspire innovation for lasting impact.
          </p>
        </div>

        <div className="md:col-span-8 grid md:grid-cols-2 gap-6">
          <ServiceCard
            title="Managing IT Services"
            desc="Comprehensive IT management, from monitoring your systems to providing security updates and patch management."
            icon="🛠️"
          />
          <ServiceCard
            title="Network Setup & Management"
            desc="From installing new networks to managing existing infrastructure, we ensure your business has the necessary connectivity."
            icon="🌐"
          />
          <ServiceCard
            title="Data Backup and Disaster Recovery"
            desc="Ensure your critical business data is protected with our reliable backup solutions and quick disaster recovery plans."
            icon="💾"
          />
          <ServiceCard
            title="Cybersecurity Solutions"
            desc="Safeguard your business from cyber threats with our advanced security solutions, including firewalls, anti-malware, encryption, and regular vulnerability assessments."
            icon="🔒"
          />
        </div>
      </section>
    </main>
  );
}
