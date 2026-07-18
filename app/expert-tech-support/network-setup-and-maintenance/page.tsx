import React from "react";

// Reuse the ServiceCard component structure from before
const ServiceCard = ({ title, desc, icon }: { title: string; desc: string; icon: string }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex gap-6 hover:shadow-lg transition duration-300">
    <div className="text-4xl">{icon}</div>
    <div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default function NetworkSetup() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Breadcrumb Section */}
      <section className="bg-white border-b border-slate-100 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Network Setup and Maintenance</h1>
          <div className="flex items-center text-sm text-slate-600 gap-2">
            <a href="/" className="hover:text-emerald-600">Home</a>
            <span>&gt;</span>
            <a href="/expert-tech-support" className="hover:text-emerald-600">Expert Tech Support</a>
            <span>&gt;</span>
            <span className="text-emerald-600 font-semibold">Network Setup and Maintenance</span>
          </div>
        </div>
      </section>

      {/* Hero Content */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Network Setup & Configuration Management
          </h2>
          <p className="text-lg font-medium text-slate-800">
            Ensure seamless connectivity and reliable performance with our expert network setup and maintenance services, offering comprehensive IT network support and proactive IT maintenance for your business.
          </p>
          <p className="text-slate-600 leading-relaxed">
            At <strong>Webmatic Solutions LLC</strong>, we understand that a reliable, secure network is the backbone of your business. Our team works hand-in-hand with you to create a network that not only meets your needs but keeps running smoothly day in and day out.
          </p>
        </div>
        <div className="w-full aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <img src="/network-hero.jpg" alt="Network Setup" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Comprehensive Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Whether you need a new network installation or ongoing support for your existing infrastructure, Innometrics Software is dedicated to delivering reliable, secure, and efficient networking solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <ServiceCard title="Network Design & Installation" icon="🛠️" desc="Customized network setup to match your specific requirements, ensuring efficient and reliable connectivity." />
          <ServiceCard title="Security Configuration" icon="🛡️" desc="Implementing robust security measures to protect your network from potential threats, ensuring safe data transmission." />
          <ServiceCard title="Network Monitoring & Maintenance" icon="📊" desc="Continuous monitoring and proactive maintenance to identify and resolve issues before they impact your operations." />
          <ServiceCard title="Upgrades & Optimization" icon="🔄" desc="Enhancing network performance through regular updates, configuration tuning, and optimization." />
          <ServiceCard title="Troubleshooting & Support" icon="⚠️" desc="Prompt identification and resolution of any network issues to minimize downtime." />
        </div>
      </section>
    </main>
  );
}