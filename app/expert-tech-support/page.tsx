import React from 'react';
import {  FaPhone, FaRegEnvelope, FaChevronRight,
  FaFacebookF, FaTwitter, FaInstagram, FaLocationDot
} from 'react-icons/fa6';

// Reusable Service Card Component
// Updated Service Card with consistent website colors
const ServiceCard = ({ title, desc, icon }: { title: string; desc: string; icon: string }) => (
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

export default function ExpertTechSupport() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-blue-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-emerald-600">Expert Tech Support</h1>
        <div className="flex justify-center items-center gap-2 mt-2 text-slate-600">
          <span className='text-emerald-600'>Home</span> <FaChevronRight size={12} /> <span>Expert Tech Support</span>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Local and Global Tech Support: Always Here for You</h2>
        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p>In today’s fast-paced digital landscape, uninterrupted technology is not just a convenience—it’s the backbone of productivity and business success. At <strong>Webmatic Solutions LLC</strong>, we go beyond just fixing problems; we proactively safeguard your systems, ensuring seamless operations at all times.Our expert, 24/7 tech support services are designed to provide businesses of all sizes with the reliability and efficiency needed to stay ahead in an evolving digital world.</p>
          <p>We specialize in preventive maintenance, real-time issue resolution, and system optimization, offering remote and on-site support tailored to your business needs. Whether it's troubleshooting network failures, hardware and software diagnostics, security enhancements, or system upgrades, our team is always prepared to identify and resolve potential issues before they disrupt your operations.</p>
          <p>From small businesses needing agile IT support to large enterprises requiring robust infrastructure maintenance, our solutions are scalable, flexible, and proactive. We integrate the latest AI-powered diagnostics, automated alerts, and predictive analytics to ensure seamless performance and prevent costly downtime. With global tech support coverage, our team is available any time, day or night, ensuring that technology never becomes an obstacle to your business growth.</p>
          <p>With Webmatic Solutions LLC, you’re not just getting a service—you’re gaining a trusted tech partner committed to delivering excellence in IT support, security, and business continuity.</p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Solutions with a Purpose</h2>
          <p className="text-slate-600">Leveraging our deep expertise across diverse technologies, we deliver solutions that propel growth and optimize efficiency.</p>
        </div>
        
        <div className="md:col-span-8 grid md:grid-cols-2 gap-6">
          <ServiceCard title="Software Troubleshooting" desc="Leave software challenges to us. We’ll handle troubleshooting to minimize downtime." icon="💻" />
          <ServiceCard title="Network Setup and Maintenance" desc="Configures and monitors your network to prevent downtime and safeguard against threats." icon="🗄️" />
          <ServiceCard title="Cybersecurity Assistance" desc="Robust protection against cyber threats, including malware, data breaches, and unauthorized access." icon="🛡️" />
          <ServiceCard title="Device and System Optimization" desc="Enhancing system speed and efficiency to free up resources and improve functionality." icon="⚙️" />
        </div>
      </section>
    </main>
  );
}