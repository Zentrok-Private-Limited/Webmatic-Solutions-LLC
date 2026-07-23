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

export default function CybersecuritySolutions() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Breadcrumb Section */}
      <section className="bg-white border-b border-slate-100 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Cybersecurity Solutions
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
              Cybersecurity Solutions
            </span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Effective Cybersecurity Solutions and Compliance Consulting
          </h2>

          <p className="text-lg font-medium text-slate-800">
            Protect your business from evolving cyber threats with our advanced
            cybersecurity solutions, tailored for businesses of all sizes. From
            threat prevention to compliance, we ensure your security is covered.
          </p>

          <p className="text-slate-600 leading-relaxed">
            Cyber threats are constantly evolving, and protecting your business
            from them requires the right solutions. At{" "}
            <strong>Webmatic Solutions LLC</strong>, we provide comprehensive
            cybersecurity solutions that help safeguard your data, networks, and
            assets. From threat prevention to compliance, we tailor our
            services to meet the unique needs of your business, ensuring robust
            protection at every level. Our expert team delivers cutting-edge
            cybersecurity solutions that help you stay one step ahead of
            cybercriminals. Whether it's advanced threat detection, compliance
            strategies, or cybersecurity awareness training, we offer the
            expertise to strengthen your defenses and keep your business secure
            in an increasingly digital world.
          </p>
        </div>

        <div className="w-full aspect-[4/3] bg-slate-200 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <img
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80"
            alt="Cybersecurity Solutions"
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
            icon="🛡️"
            title="Firewalls & Intrusion Detection Systems (IDS)"
            desc="First-line defense systems that block unauthorized access and monitor network traffic for suspicious activity."
          />

          <ServiceCard
            icon="🦠"
            title="Anti-Malware & Endpoint Security"
            desc="Protect your devices from malware, ransomware, viruses, and other malicious software with advanced endpoint security measures."
          />

          <ServiceCard
            icon="🔐"
            title="Data Encryption"
            desc="Keep your sensitive business data safe with industry-standard encryption protocols, ensuring that even if data is accessed, it remains unreadable to unauthorized users."
          />

          <ServiceCard
            icon="🎓"
            title="Security Awareness Training"
            desc="Equip your staff with the knowledge and skills to identify and avoid potential cyber threats, such as phishing attacks and social engineering."
          />

          <ServiceCard
            icon="🔍"
            title="Regular Vulnerability Assessments & Penetration Testing"
            desc="We conduct routine assessments to identify and mitigate potential vulnerabilities in your network, ensuring that your defenses are always up-to-date."
          />

          <ServiceCard
            icon="🔑"
            title="Multi-Factor Authentication (MFA) & Identity Management"
            desc="Strengthen access controls with multi-factor authentication, ensuring only authorized personnel can access critical systems and data."
          />

          <ServiceCard
            icon="🚨"
            title="Incident Response & Disaster Recovery"
            desc="In the event of a security breach, our incident response team will act quickly to minimize the damage and help your business recover as swiftly as possible."
          />
        </div>
      </section>
    </main>
  );
}