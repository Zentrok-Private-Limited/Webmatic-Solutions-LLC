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

export default function DigitalMarketingServices() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Header Section */}
      <section className="bg-blue-50 py-16 text-center">
        <h1 className="text-4xl font-bold text-emerald-600">
          Digital Marketing Services
        </h1>
        <div className="flex justify-center items-center gap-2 mt-2 text-slate-600">
          <span className="text-emerald-600">Home</span>{" "}
          <FaChevronRight size={12} /> <span>Digital Marketing Services</span>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-5xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Digital Marketing Solutions & Strategies for Lead Generation
        </h2>
        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p>
            Amplify Your Online Presence with Cutting-Edge Digital Marketing
          </p>
          <p>
            In today’s fast-paced digital world, a strong online presence isn’t
            just an advantage—it’s a necessity. At{" "}
            <strong>Webmatic Solutions LLC</strong>, we help businesses stand
            out, engage, and convert by crafting data-driven, results-oriented
            digital marketing strategies. Our goal is to elevate your brand’s
            visibility, strengthen customer connections, and drive measurable
            growth in an increasingly competitive digital landscape.
          </p>
          <p>
            With expertise in SEO, content marketing, social media management,
            PPC advertising, and email marketing, we create tailored solutions
            that resonate with your target audience. Our strategies are designed
            to boost brand awareness, enhance engagement, and generate quality
            leads. By leveraging advanced analytics, AI-driven insights, and the
            latest industry trends, we ensure that every campaign delivers
            maximum ROI.
          </p>
          <p>
            Whether you’re a startup looking to build a strong foundation or an
            established business aiming to scale, our holistic digital marketing
            approach ensures long-term success. From crafting compelling content
            to running high-impact paid campaigns, we cover every aspect of
            brand positioning and customer acquisition.
          </p>
          <p>
            At Webmatic Solutions LLC, we don’t just market your business—we
            build powerful digital experiences that drive engagement, growth,
            and brand loyalty. Let’s take your digital presence to the next
            level with strategies that work.
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
            title="Search Engine Optimization"
            desc="Boost your online visibility with tailored SEO strategies! Innometrics Software optimizes your website for higher rankings, driving traffic and conversions."
            icon="📣"
          />
          <ServiceCard
            title="Social Media Marketing"
            desc="Engage and grow your audience with our dynamic Social Media Marketing strategies that drive brand loyalty and awareness."
            icon="📱"
          />
          <ServiceCard
            title="Pay-Per-Click Advertising (PPC)"
            desc="Maximize your ROI with our targeted Pay-Per-Click Advertising campaigns that deliver instant visibility and qualified leads."
            icon="🎯"
          />
          <ServiceCard
            title="Email Marketing Campaigns"
            desc="Drive conversions and nurture relationships with our personalized Email Marketing Campaigns that speak directly to your audience."
            icon="📧"
          />
          <ServiceCard
            title="Content Marketing"
            desc="Establish your brand authority and engage your audience with compelling Content Marketing that informs, entertains, and inspires."
            icon="✍️"
          />
        </div>
      </section>
    </main>
  );
}
