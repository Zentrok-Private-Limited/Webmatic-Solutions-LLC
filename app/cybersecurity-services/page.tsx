import React from "react";
import {
  FaPhone,
  FaRegEnvelope,
  FaChevronRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLocationDot,
} from "react-icons/fa6";

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

export default function CybersecurityServices() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-blue-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-emerald-600">
          Cybersecurity Services
        </h1>
        <div className="flex justify-center items-center gap-2 mt-2 text-slate-600">
          <span className="text-emerald-600">Home</span>{" "}
          <FaChevronRight size={12} /> <span>Cybersecurity Services</span>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Cybersecurity Services for Your Business
        </h2>
        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p>
            In today’s digital-first world, cyber threats are constantly
            evolving, making proactive cybersecurity strategies more critical
            than ever. At <strong>Webmatic Solutions LLC</strong>, we provide
            comprehensive cybersecurity services designed to safeguard digital
            assets, systems, and sensitive data against unauthorized access,
            breaches, and emerging cyber risks. Our approach integrates advanced
            security solutions, real-time monitoring, and threat intelligence to
            ensure the highest levels of confidentiality, integrity, and
            availability for your business.
          </p>
          <p>
            Our managed cybersecurity services offer round-the-clock protection,
            enabling businesses to focus on growth while we handle the
            complexities of cybersecurity. From risk assessments and
            vulnerability testing to security framework implementation and
            compliance consulting, we equip organizations with tailored security
            solutions that meet industry standards and regulatory requirements.
          </p>
          <p>
            With cutting-edge security tools, AI-driven threat detection, and
            experienced cybersecurity consultants, we proactively identify,
            mitigate, and respond to cyber threats before they impact
            operations. Whether you need network security, endpoint protection,
            cloud security, or incident response solutions, our team ensures a
            robust and resilient defense against cyber risks.
          </p>
          <p>
            At Webmatic Solutions LLC, we do not just protect businesses—we
            empower them with secure, future-ready cybersecurity solutions,
            ensuring uninterrupted operations and peace of mind in an
            ever-evolving threat landscape.
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
            title="Vulnerability & Penetration Testing"
            desc="Our Vulnerability and Penetration Testing services identify and address security weaknesses, ensuring your systems are resilient against real-world cyber threats."
            icon="🛡️"
          />
          <ServiceCard
            title="Firewall Setup and Management"
            desc="Webmatic Solutions LLC provides expert Firewall Set-Up & Management services, ensuring robust protection against unauthorized access and cyber threats to keep your network secure."
            icon="🔥"
          />
          <ServiceCard
            title="Incident Response and Management"
            desc="Webmatic Solutions LLC provides swift, expert Incident Response and Management services to contain threats, minimize damage, and ensure rapid recovery from cyber-attacks."
            icon="🔒"
          />
          <ServiceCard
            title="Compliance Consulting"
            desc="Webmatic Solutions LLC provides expert Compliance Consulting, ensuring your business meets regulatory standards with tailored, risk-reducing solutions."
            icon="📋"
          />
        </div>
      </section>
    </main>
  );
}
