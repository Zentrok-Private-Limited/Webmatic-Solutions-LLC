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

export default function CybersecurityAssistance() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Breadcrumb Section */}
      <section className="bg-white border-b border-slate-100 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Cybersecurity Assistance</h1>
          <div className="flex items-center text-sm text-slate-600 gap-2">
            <a href="/" className="hover:text-emerald-600">Home</a>
            <span>&gt;</span>
            <a href="/expert-tech-support" className="hover:text-emerald-600">Expert Tech Support</a>
            <span>&gt;</span>
            <span className="text-emerald-600 font-semibold">Cybersecurity Assistance</span>
          </div>
        </div>
      </section>

      {/* Hero Content Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Cybersecurity Help Desk: Your Support Hub
          </h2>
          <p className="text-lg font-medium text-slate-800">
            Get expert cybersecurity assistance with tailored support, training, and guidance to protect your business. From help desk services to cybersecurity frameworks, we ensure your security is always top-notch.
          </p>
          <p className="text-slate-600 leading-relaxed">
            At <strong>Webmatic Solutions LLC</strong>, we offer comprehensive cybersecurity assistance to help safeguard your business from evolving threats. Whether you need help desk cybersecurity support, guidance on best practices, or a structured cybersecurity framework, our expert team is here for you. We provide tailored cybersecurity assistance programs and training to empower your team with the knowledge to stay secure.
          </p>
        </div>
        <div className="w-full aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <img src="/cyber-hero.jpg" alt="Cybersecurity Security" className="w-full h-full object-cover" />
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Comprehensive Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            With our cybersecurity solutions, you can focus on your business while we handle your digital security.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <ServiceCard title="Advanced Threat Detection" icon="🐛" desc="Proactively identify and address potential security risks before they become critical." />
          <ServiceCard title="24/7 Monitoring" icon="🕒" desc="Round-the-clock surveillance of your network and systems to detect and mitigate any vulnerabilities." />
          <ServiceCard title="Data Encryption & Protection" icon="🔒" desc="Put robust encryption procedures in place to protect private information from unwanted access." />
          <ServiceCard title="Incident Response & Recovery" icon="🔄" desc="Swift action in the event of a breach, minimizing damage and ensuring fast recovery." />
          <ServiceCard title="Compliance Solutions" icon="📋" desc="Help your company adhere to industry standards and best practices for data security." />
        </div>
      </section>
    </main>
  );
}