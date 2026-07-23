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

export default function DataBackupAndDisasterRecovery() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Breadcrumb Section */}
      <section className="bg-white border-b border-slate-100 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Data Backup and Disaster Recovery
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
              Data Backup and Disaster Recovery
            </span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Robust Data Backup and Disaster Restoration Services You Can Trust
          </h2>

          <p className="text-lg font-medium text-slate-800">
            Ensure your data is always safe with our reliable data backup and
            disaster recovery solutions. From secure backup systems to full
            restoration and recovery, we protect your business from data loss.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Data loss can be devastating, but with{" "}
            <strong>Webmatic Solutions LLC</strong>, you never have to worry. We
            specialize in reliable data backup and disaster recovery solutions
            that protect your business’s vital information. Our services include
            tailored data storage, robust backup systems, and swift recovery
            solutions designed to minimize downtime and ensure seamless
            restoration. Whether you need to secure your data center or recover
            critical business data, we provide comprehensive solutions to
            safeguard your assets. With our disaster recovery strategies in
            place, you can focus on running your business, knowing your data is
            always protected and easily recoverable when disaster strikes.
          </p>
        </div>

        <div className="w-full aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <img
            src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80"
            alt="Data Backup and Disaster Recovery"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">
            Our Comprehensive Services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <ServiceCard
            icon="💾"
            title="Reliable Data Backup Solutions"
            desc="Our backup services ensure your data is always secure. We utilize state-of-the-art backup technologies to store copies of your business-critical data on highly secure servers, whether on-premises or in the cloud. With regular automated backups, you never have to worry about losing important information."
          />

          <ServiceCard
            icon="🔐"
            title="Data Integrity & Security"
            desc="Preventing unwanted access to your data is of utmost importance. Our backup solutions use end-to-end encryption to ensure that only authorized personnel can access or recover sensitive data. We also perform regular tests to validate the integrity of your backups, ensuring they remain accurate and ready for quick recovery."
          />

          <ServiceCard
            icon="⚡"
            title="Fast Recovery Times"
            desc="Time is of the essence in a disaster situation. We guarantee quick and efficient recovery of your data, allowing you to restore normal operations within hours instead of days. Your business will experience the least amount of inconvenience possible thanks to our efficient recovery procedures."
          />

          <ServiceCard
            icon="☁️"
            title="Cloud-Based Backup"
            desc="We offer cloud backup services, allowing you to store your data securely off-site, reducing the risk of data loss from localized hardware failures. Cloud-based solutions also provide flexibility, enabling access to your critical data from any location."
          />

          <ServiceCard
            icon="🚨"
            title="Disaster Recovery Planning"
            desc="In the event of a disaster—be it a cyberattack, power failure, or natural disaster—our disaster recovery plans help your business bounce back quickly. Our team develops a detailed recovery strategy tailored to your specific operations, ensuring that downtime is minimized, and your business resumes normal activities as soon as possible."
          />

          <ServiceCard
            icon="📊"
            title="Continuous Monitoring & Support"
            desc="Our team constantly monitors your backup and disaster recovery systems to ensure everything is running smoothly. If any issues arise, we proactively address them, preventing data loss before it happens."
          />
        </div>
      </section>
    </main>
  );
}