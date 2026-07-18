import React from "react";

const ServiceCard = ({ title, desc, icon }: { title: string; desc: string; icon: string }) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex gap-6 hover:shadow-lg transition duration-300">
    <div className="text-4xl">{icon}</div>
    <div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default function SoftwareTroubleshooting() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* 1. Breadcrumb Section */}
      <section className="bg-white border-b border-slate-100 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Software Troubleshooting</h1>
          <div className="flex items-center text-sm text-slate-600 gap-2">
            <a href="/" className="hover:text-emerald-600">Home</a>
            <span>&gt;</span>
            <a href="/expert-tech-support" className="hover:text-emerald-600">Expert Tech Support</a>
            <span>&gt;</span>
            <span className="text-emerald-600 font-semibold">Software Troubleshooting</span>
          </div>
        </div>
      </section>

      {/* 2. Hero Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Expert Software Troubleshooting: Solving Your Software Issues, from Drivers to Performance
          </h2>
          <p className="text-lg font-medium text-slate-800">
            Get expert software troubleshooting services for all your computer software issues, from device driver troubleshooting to application software problems, including Linux OS and hardware support.
          </p>
          <p className="text-slate-600 leading-relaxed">
            At <strong>Webmatic Solutions LLC</strong>, we understand how frustrating it can be when software issues slow down your systems. Our team is here to help you get back on track by providing practical solutions that keep your systems running smoothly, across a range of operating systems including Linux.
          </p>
        </div>
        <div className="w-full aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <img src="/troubleshoot-hero.jpg" alt="Software Troubleshooting" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* 3. Comprehensive Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Comprehensive Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">With our expert support, you can rely on uninterrupted software performance, improved productivity, and reduced downtime.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <ServiceCard title="Bug Fixing" icon="🐛" desc="Addressing software crashes, glitches, and errors to restore smooth operation." />
          <ServiceCard title="Installation & Configuration" icon="⚙️" desc="Ensuring proper installation and configuration of software for optimal performance." />
          <ServiceCard title="Compatibility Resolution" icon="💻" desc="Troubleshooting software conflicts across platforms, devices, or operating systems." />
          <ServiceCard title="License Management" icon="📄" desc="Assisting with software license activations, renewals, and resolving related issues." />
          <ServiceCard title="Performance Optimization" icon="🚀" desc="Enhancing software efficiency by addressing slow response times, memory issues, and performance bottlenecks." />
        </div>
      </section>
    </main>
  );
}