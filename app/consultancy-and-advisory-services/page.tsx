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

export default function ConsultancyandAdvisoryServices() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-blue-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-emerald-600">
          Consultancy and Advisory Services
        </h1>
        <div className="flex justify-center items-center gap-2 mt-2 text-slate-600">
          <span className="text-emerald-600">Home</span>{" "}
          <FaChevronRight size={12} />{" "}
          <span>Consultancy and Advisory Services</span>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Strategic IT Consulting & Advisory: Driving Business Success
        </h2>
        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p>
            At <strong>Webmatic Solutions LLC</strong>, we believe that the
            right technology strategy is the key to business growth. However,
            with rapidly evolving digital landscapes, choosing the best IT
            solutions can be overwhelming. Our IT consulting and advisory
            services provide expert guidance to help businesses navigate these
            complexities, ensuring seamless technology adoption and optimized
            performance. Whether you're a startup laying the foundation for
            scalable IT infrastructure or an enterprise seeking modernization,
            we tailor strategies that align with your business objectives.
          </p>
          <p>
            Our approach goes beyond conventional consulting. We analyze your
            existing IT framework, identify gaps, and develop actionable
            strategies that enhance efficiency, security, and scalability. From
            cloud integration and cybersecurity solutions to digital
            transformation and risk management, we ensure businesses stay
            competitive and future-ready.
          </p>
          <p>
            By leveraging cutting-edge insights, industry best practices, and
            AI-driven analytics, we help businesses optimize processes, minimize
            risks, and drive sustainable growth. Our goal is to equip
            organizations with the tools and strategies needed to stay ahead in
            a technology-driven world.
          </p>
          <p>
            At Webmatic Solutions LLC, we don’t just provide recommendations—we
            work as your trusted technology partner, ensuring that every IT
            decision you make is strategic, impactful, and aligned with
            long-term success.
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
            title="Technology Assessment and Planning"
            desc="We offer expert technology assessments and strategic plans to optimize your IT infrastructure, aligning it with your business goals for long-term success."
            icon="📋"
          />
          <ServiceCard
            title="Digital Transformation Consulting"
            desc="We streamline your digital transformation with cutting-edge tools for seamless integration and enhanced efficiency."
            icon="🚀"
          />
          <ServiceCard
            title="Software Solutions"
            desc="We deliver tailored, scalable software solutions that enhance productivity and drive growth."
            icon="💻"
          />
          <ServiceCard
            title="Customized IT Solutions"
            desc="We provide customized IT solutions that enhance efficiency, scalability, and performance, tailored to meet your unique requirements."
            icon="⚙️"
          />
        </div>
      </section>
    </main>
  );
}
