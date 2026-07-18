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

export default function DeviceOptimization() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Breadcrumb Section */}
      <section className="bg-white border-b border-slate-100 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Device and System Optimization</h1>
          <div className="flex items-center text-sm text-slate-600 gap-2">
            <a href="/" className="hover:text-emerald-600">Home</a>
            <span>&gt;</span>
            <a href="/expert-tech-support" className="hover:text-emerald-600">Expert Tech Support</a>
            <span>&gt;</span>
            <span className="text-emerald-600 font-semibold">Device and System Optimization</span>
          </div>
        </div>
      </section>

      {/* Hero Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Solutions for Software and System Optimization
          </h2>
          <p className="text-lg font-medium text-slate-800">
            Enhance your device and system performance with expert optimization techniques, ensuring improved efficiency, speed, and reliability. Let us help you optimize system performance for smoother operations.
          </p>
          <p className="text-slate-600 leading-relaxed">
            At <strong>Webmatic Solutions LLC</strong>, we specialize in device and system optimization, ensuring your systems run at peak performance. Our expert team uses proven system optimization techniques to enhance efficiency, speed, and overall reliability. Whether you need to optimize device performance or boost system performance across multiple devices, we tailor our solutions to meet your specific needs.
          </p>
        </div>
        <div className="w-full aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <img src="/optimization-hero.jpg" alt="System Optimization" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Comprehensive Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            These optimizations help extend the lifespan of your devices, reduce lag, and ensure smooth, uninterrupted operations for both personal and business use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <ServiceCard title="Performance Tuning" icon="📈" desc="We fine-tune your devices and systems, optimizing memory, CPU usage, and disk space to ensure smooth and faster operations." />
          <ServiceCard title="Software and Firmware Updates" icon="☁️" desc="We ensure all software and firmware are up-to-date, eliminating vulnerabilities and improving functionality." />
          <ServiceCard title="Resource Management" icon="⚙️" desc="We analyze and manage system resources, ensuring balanced workloads and preventing system overloads or crashes." />
          <ServiceCard title="Malware and Bloatware Removal" icon="🛡️" desc="We clean up your systems by identifying and removing unnecessary or malicious software that may slow down performance." />
          <ServiceCard title="Startup and Background Process Optimization" icon="🚀" desc="We streamline your system startup and manage background processes to improve overall boot times and application speed." />
        </div>
      </section>
    </main>
  );
}