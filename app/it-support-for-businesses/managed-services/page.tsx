import React from "react";

// ServiceCard component maintains visual consistency across your service pages
const ServiceCard = ({ title, desc, icon }: { title: string; desc: string; icon: string }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex gap-6 hover:shadow-lg transition duration-300">
    <div className="text-4xl">{icon}</div>
    <div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default function ManagedITServices() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Breadcrumb Section */}
      <section className="bg-white border-b border-slate-100 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Managed IT Services</h1>
          <div className="flex items-center text-sm text-slate-600 gap-2">
            <a href="/" className="hover:text-emerald-600">Home</a>
            <span>&gt;</span>
            <a href="/it-support-for-businesses" className="hover:text-emerald-600">IT Support for Businesses</a>
            <span>&gt;</span>
            <span className="text-emerald-600 font-semibold">Managed IT Services</span>
          </div>
        </div>
      </section>

      {/* Hero Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            IT Services and Support Management
          </h2>
          <p className="text-lg font-medium text-slate-800">
            Unlock seamless performance and security with our top-tier managed IT services. From small business solutions to full-scale IT infrastructure management, we provide expert MSP support tailored to your needs.
          </p>
          <p className="text-slate-600 leading-relaxed">
            At <strong>Webmatic Solutions LLC</strong>, we offer comprehensive managed IT services designed to optimize and secure your IT infrastructure. Whether you're a small business or a large enterprise, our managed IT solutions provide tailored support to meet your specific needs. From proactive system monitoring to regular updates, we ensure your technology runs smoothly and securely. Our team specializes in providing managed IT support, helping you avoid costly downtime and streamline operations. With our white-label MSP Solutions, you can focus on growing your business while we handle the technical complexities. Experience the advantages of managed IT services and enjoy peace of mind knowing your IT systems are in expert hands.
          </p>
        </div>
        <div className="w-full aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800" alt="IT Support Team" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Comprehensive Services</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <ServiceCard title="System Monitoring & Maintenance" icon="⚠️" desc="We proactively monitor your IT systems 24/7 to detect issues before they disrupt your operations. Regular maintenance ensures that your software and hardware are running at peak performance." />
          <ServiceCard title="Security Updates & Patches" icon="🛡️" desc="We provide regular security updates and patch management to protect your systems from vulnerabilities. Keeping your software and applications up-to-date is critical for minimizing the risk of cyber threats." />
          <ServiceCard title="Proactive Problem Resolution" icon="🔄" desc="Our expert team identifies potential issues early and resolves them before they impact your business. Whether it's a server issue, a software bug, or a network problem, we'll fix it promptly." />
          <ServiceCard title="Centralized IT Management" icon="💻" desc="With centralized management, all your IT assets—from servers to networks—are managed and maintained under one roof, ensuring consistency, security, and streamlined performance across all systems." />
          <ServiceCard title="24/7 Support" icon="🕒" desc="Our committed support staff makes sure you get help whenever you need it by being available 24/7. We offer remote support to resolve technical problems swiftly and minimize any operational hiccups." />
        </div>
      </section>
    </main>
  );
}