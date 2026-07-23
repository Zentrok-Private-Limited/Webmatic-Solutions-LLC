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

export default function CloudServicesAndVirtualization() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Breadcrumb Section */}
      <section className="bg-white border-b border-slate-100 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Cloud Services and Virtualization
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
              Cloud Services and Virtualization
            </span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Virtual Cloud Storage and Recovery Services
          </h2>

          <p className="text-lg font-medium text-slate-800">
            Empower your business with top-tier cloud-based backup and recovery,
            along with cutting-edge cloud storage and virtual machines
            solutions that ensure seamless data protection and business
            continuity.
          </p>

          <p className="text-slate-600 leading-relaxed">
            In today's digital landscape, ensuring the safety and accessibility
            of your data is more important than ever. With our advanced cloud
            services and virtualization solutions, you can enjoy unmatched data
            security, scalability, and ease of access. Our cloud backup and
            recovery services are designed to protect your business from
            unexpected disruptions, providing rapid data recovery when you need
            it most. Whether you need virtual cloud storage or a virtual
            machine solution, we offer flexible, efficient options tailored to
            your unique requirements. Leverage the full potential of
            cloud-based virtual networks and systems for streamlined operations
            and peace of mind. Experience the future of business continuity with
            Webmatic Solutions LLC cloud services and virtualization.
          </p>
        </div>

        <div className="w-full aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80"
            alt="Cloud Services and Virtualization"
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
            icon="☁️"
            title="Cloud Infrastructure"
            desc="Our secure, scalable cloud infrastructure gives your business the flexibility to expand or reduce capacity as needed. Whether you're looking to migrate existing systems to the cloud or build a hybrid solution, we provide the support you need for a smooth transition."
          />

          <ServiceCard
            icon="🖥️"
            title="Virtualization Services"
            desc="Reduce the physical footprint of your data center by virtualizing your IT environment. We help businesses optimize their hardware by running multiple virtual systems on a single server, improving performance while cutting costs."
          />

          <ServiceCard
            icon="💾"
            title="Data Backup & Disaster Recovery"
            desc="Protect your critical business data with automated backups and robust disaster recovery plans. Our cloud backup services ensure that your data is safe, easily recoverable, and secure from cyber threats or hardware failure."
          />

          <ServiceCard
            icon="☁️"
            title="Cloud Migration"
            desc="Whether you're transitioning from on-premise infrastructure or moving from one cloud platform to another, our experts handle the process end-to-end. We ensure seamless integration with minimal disruption to your operations."
          />

          <ServiceCard
            icon="⚙️"
            title="Software as a Service (SaaS)"
            desc="Leverage the power of cloud-based applications to enhance productivity. From collaboration tools to industry-specific software, we help your team work more efficiently with access to the latest technology."
          />

          <ServiceCard
            icon="📈"
            title="Scalability & Flexibility"
            desc="With our cloud solutions, your IT infrastructure can grow alongside your business. Scale up or down as needed, without the cost or hassle of maintaining physical hardware."
          />
        </div>
      </section>
    </main>
  );
}