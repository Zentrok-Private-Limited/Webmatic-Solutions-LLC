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

export default function WebsiteDesignDevelopment() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-blue-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-emerald-600">
          Website Design & Development
        </h1>
        <div className="flex justify-center items-center gap-2 mt-2 text-slate-600">
          <span className="text-emerald-600">Home</span>{" "}
          <FaChevronRight size={12} /> <span>Website Design & Development</span>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Comprehensive Website Design and Development Services
        </h2>
        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p>
            In the digital age, a website is more than just an online
            presence—it’s the foundation of your brand’s identity, customer
            engagement, and business growth. At{" "}
            <strong>Webmatic Solutions LLC</strong>, In the digital age, a
            website is more than just an online presence—it’s the foundation of
            your brand’s identity, customer engagement, and business growth.
          </p>
          <p>
            Our website design services focus on capturing your brand’s essence,
            delivering a user-centric experience, and ensuring compatibility
            across all devices. From UI/UX enhancements and intuitive navigation
            to custom graphics and branding, we create websites that leave a
            lasting impression. Additionally, our SEO-friendly development
            practices ensure your site ranks higher in search engines, boosting
            visibility and conversions.
          </p>
          <p>
            Beyond design, we specialize in robust web development solutions,
            including CMS integration, secure payment gateways, and performance
            optimization. Whether you need ongoing maintenance, feature
            enhancements, or technical support, we provide end-to-end website
            development services that evolve with your business.
          </p>
          <p>
            At Webmatic Solutions LLC, we don’t just build websites—we create
            digital experiences that elevate brands, engage audiences, and drive
            sustainable growth. Let’s bring your vision to life with
            cutting-edge web design and development solutions.
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
            title="Responsive Web Design"
            desc="Create stunning websites that adapt seamlessly to any device, ensuring an optimal user experience everywhere."
            icon="📱"
          />
          <ServiceCard
            title="E-commerce Website Development"
            desc="Empower your business with our custom e-commerce website development that drives sales and enhances customer experience."
            icon="🛒"
          />
          <ServiceCard
            title="Content Management Systems (CMS)"
            desc="Empower your business with our intuitive Content Management Systems (CMS) for effortless content updates and management."
            icon="🖥️"
          />
          <ServiceCard
            title="SEO-Friendly Website Design"
            desc="Create stunning websites that attract traffic and rank higher with our SEO-friendly design solutions."
            icon="📈"
          />
          <ServiceCard
            title="Website Maintenance & Support"
            desc="Ensure your website runs smoothly and stays updated with our reliable maintenance and support services."
            icon="🛠️"
          />
        </div>
      </section>

      {/* ================= SOCIAL HUB BANNER ================= */}
      <section className="bg-slate-50 border-t border-slate-100 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Join Into Our Hub
          </h2>
          <p className="text-emerald-600 font-semibold text-sm">
            What they think about Webmatic Solutions LLC
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {/* Facebook Hub */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 flex items-center gap-5">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-xl shrink-0">
              <FaFacebookF className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-950 text-base">
                Facebook
              </h4>
              <span className="text-[11px] text-slate-400 font-medium">
                Open Source & Commit Code
              </span>
            </div>
          </div>

          {/* Twitter Hub */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 flex items-center gap-5">
            <div className="w-14 h-14 bg-sky-50 text-sky-500 rounded-full flex items-center justify-center text-xl shrink-0">
              <FaTwitter className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-950 text-base">
                Twitter
              </h4>
              <span className="text-[11px] text-slate-400 font-medium">
                Latest News & Update
              </span>
            </div>
          </div>

          {/* Instagram Hub */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition duration-300 flex items-center gap-5">
            <div className="w-14 h-14 bg-pink-50 text-pink-500 rounded-full flex items-center justify-center text-xl shrink-0">
              <FaInstagram className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-extrabold text-slate-950 text-base">
                Instagram
              </h4>
              <span className="text-[11px] text-slate-400 font-medium">
                Channel for Community
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
