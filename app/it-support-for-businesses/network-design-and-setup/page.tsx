import React from "react";

// ServiceCard component
const ServiceCard = ({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: string;
}) => (
  <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex gap-6 hover:shadow-lg transition duration-300">
    <div className="text-4xl">{icon}</div>
    <div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default function NetworkDesignAndSetup() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Breadcrumb Section */}
      <section className="bg-white border-b border-slate-100 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Network Design and Setup
          </h1>

          <div className="flex items-center text-sm text-slate-600 gap-2">
            <a href="/" className="hover:text-emerald-600">
              Home
            </a>
            <span>&gt;</span>
            <a
              href="/it-support-for-businesses"
              className="hover:text-emerald-600"
            >
              IT Support for Businesses
            </a>
            <span>&gt;</span>
            <span className="text-emerald-600 font-semibold">
              Network Design and Setup
            </span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Future-Proof Your Network with Expert Design
          </h2>

          <p className="text-lg font-medium text-slate-800">
            Transform your IT infrastructure with expert network design and
            setup services. From planning and architecture to performance
            analysis and implementation, we create robust networks tailored to
            your needs.
          </p>

          <p className="text-slate-600 leading-relaxed">
            At <strong>Webmatic Solutions LLC</strong>, we specialize in
            delivering comprehensive network design and setup services tailored
            to your business needs. Our expert team handles everything from
            initial network planning and design to full implementation and
            management. We focus on understanding your requirements and ensuring
            that the network architecture aligns perfectly with your goals. Our
            services include network performance analysis, security measures,
            and seamless integration to create a reliable, scalable network
            system. With a strong emphasis on network design and management, we
            ensure optimal performance and future-proof solutions. Trust us to
            design and implement the ideal network that powers your business
            success, providing ongoing support every step of the way.
          </p>
        </div>

        <div className="w-full aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80"
            alt="Network Design and Setup"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">
            Our Comprehensive Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <ServiceCard
            icon="📈"
            title="Network Upgrades & Optimization"
            desc="Is your network slowing you down? Our experts assess your current infrastructure and recommend upgrades that enhance performance, reduce downtime, and improve overall efficiency."
          />

          <ServiceCard
            icon="🔒"
            title="Network Security"
            desc="Protect your business from cyber threats with our advanced security protocols, including firewalls, intrusion prevention systems, and encrypted data transmission. We ensure your network remains secure while maintaining high-speed connectivity."
          />

          <ServiceCard
            icon="📶"
            title="Wi-Fi Setup & Management"
            desc="Seamless wireless connectivity is essential for any business today. We provide complete Wi-Fi solutions, from setting up new networks to ensuring secure, reliable, and fast wireless access across your entire organization."
          />

          <ServiceCard
            icon="⚙️"
            title="Remote Network Management"
            desc="Stay ahead of potential issues with our proactive remote network monitoring and management services. Our team monitors your network 24/7 to detect and resolve problems before they impact your operations."
          />

          <ServiceCard
            icon="🛡️"
            title="VPN & Remote Access Solutions"
            desc="With the rise of remote work, secure access to your network from anywhere is crucial. We implement VPN solutions that allow your employees to connect to your network securely from remote locations, maintaining data integrity and security."
          />

          <ServiceCard
            icon="🖧"
            title="Network Design & Installation"
            desc="Every business has unique networking needs. We design and implement tailored network solutions, from small-scale LAN setups to complex, multi-location networks, ensuring your systems are optimized for speed, security, and scalability."
          />
        </div>
      </section>
    </main>
  );
}