import React from "react";
import {
  FaPhone,
  FaRegEnvelope,
  FaChevronRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLocationDot,
} from "react-icons/fa6";

// Reusable Service Card Component
// Updated Service Card with consistent website colors
const ServiceCard = ({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: string;
}) => (
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

export default function SoftwareDevelopmentServices() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-blue-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-emerald-600">
          Software Development Services
        </h1>
        <div className="flex justify-center items-center gap-2 mt-2 text-slate-600">
          <span className="text-emerald-600">Home</span>{" "}
          <FaChevronRight size={12} />{" "}
          <span>Software Development Services</span>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Mobile Application, Web Application, and Secure Software Development
          Services
        </h2>
        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p>
            At <strong>Webmatic Solutions LLC</strong>, we specialize in
            developing custom, high-performance software solutions that empower
            businesses to stay agile, efficient, and competitive in a rapidly
            evolving digital landscape. Whether you need mobile applications,
            web applications, or enterprise-grade software, our team delivers
            tailored solutions that align perfectly with your business goals and
            operational needs.
          </p>
          <p>
            We offer end-to-end software development services, covering
            everything from initial planning and UI/UX design to secure coding,
            rigorous testing, and deployment. Whether you're a startup looking
            to build an innovative mobile app or an enterprise upgrading legacy
            systems, we ensure seamless development and integration. Our
            expertise spans cloud-based software, API development, AI-driven
            solutions, and secure software architectures, ensuring that every
            application is scalable, user-friendly, and future-proof.
          </p>
          <p>
            Security is at the core of our Software Development Life Cycle
            (SDLC), ensuring that every application we develop follows best
            practices in cybersecurity, data protection, and compliance. Through
            agile methodologies, rapid application development, and continuous
            support, we help businesses streamline processes, enhance
            productivity, and drive digital transformation.
          </p>
          <p>
            At Webmatic Solutions LLC, we do not just develop software—we create
            powerful digital solutions that drive business growth, efficiency,
            and long-term success.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Solutions with a Purpose
          </h2>
          <p className="text-slate-600">
            Leveraging our deep expertise across diverse technologies, we
            deliver solutions that propel growth, optimize efficiency, and
            inspire innovation for lasting impact.
          </p>
        </div>

        <div className="md:col-span-8 grid md:grid-cols-2 gap-6">
          <ServiceCard
            title="Custom Application Development"
            desc="Transform your unique ideas into tailored software solutions with our custom application development services."
            icon="📱"
          />
          <ServiceCard
            title="Mobile App Development"
            desc="Turn your visions into impactful mobile applications through our specialized mobile app development services."
            icon="🚀"
          />
          <ServiceCard
            title="Software Testing & QA"
            desc="Ensure flawless performance and reliability with our comprehensive Software Testing & QA services."
            icon="🔍"
          />
          <ServiceCard
            title="API Development & Integration"
            desc="Seamlessly connect your applications and enhance functionality with our expert API Development & Integration services."
            icon="⚙️"
          />
          <ServiceCard
            title="Web Application Development"
            desc="Elevate your business with our custom web application development services, providing smooth user experiences and powerful functionality."
            icon="🌐"
          />
        </div>
      </section>
    </main>
  );
}
