import React from "react";
import {
  FaPhone,
  FaMapPin,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { FiSend } from "react-icons/fi";

function Footer() {
  return (
    <div>
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
      {/* ================= FOOTER ================= */}
      <footer className="bg-emerald-800 text-white border-t border-emerald-100 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1 space-y-4">
            <h3 className="font-black text-lg text-slate-50 border-b-2 border-emerald-600 inline-block pb-1">
              Our Services
            </h3>
            <ul className="space-y-2 text-xs font-medium text-slate-50">
              <li>
                <a
                  href="/expert-tech-support"
                  className="hover:text-emerald-100"
                >
                  Expert Tech Support
                </a>
              </li>
              <li>
                <a
                  href="/it-support-for-businesses"
                  className="hover:text-emerald-100"
                >
                  IT Support for Businesses
                </a>
              </li>
              <li>
                <a
                  href="/consultancy-and-advisory-services"
                  className="hover:text-emerald-100"
                >
                  Consultancy & Advisory
                </a>
              </li>
              <li>
                <a
                  href="/cybersecurity-services"
                  className="hover:text-emerald-100"
                >
                  Cybersecurity Services
                </a>
              </li>
              <li>
                <a
                  href="/website-design-and-development"
                  className="hover:text-emerald-100"
                >
                  Website Design & Dev
                </a>
              </li>
              <li>
                <a
                  href="/digital-marketing-services"
                  className="hover:text-emerald-100"
                >
                  Digital Marketing
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-2 flex flex-col items-center justify-center text-center space-y-4 border-y md:border-y-0 md:border-x border-slate-200/60 py-6 md:py-0 px-4">
            <img
              src="/logo.png"
              alt="logo"
              className="h-25 w-auto object-contain"
            />
            <p className="text-xs text-slate-200 max-w-sm leading-relaxed">
              Offering 24/7 assistance, we specialize in troubleshooting,
              network setup, cybersecurity, and more, ensuring smooth
              operational metrics.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href="#"
                className="p-2.5 bg-white hover:bg-emerald-600 hover:text-white rounded-full border border-slate-200 text-slate-500 shadow-sm transition"
              >
                <FaFacebookF size={12} />
              </a>
              <a
                href="#"
                className="p-2.5 bg-white hover:bg-emerald-600 hover:text-white rounded-full border border-slate-200 text-slate-500 shadow-sm transition"
              >
                <FaTwitter size={12} />
              </a>
              <a
                href="#"
                className="p-2.5 bg-white hover:bg-emerald-600 hover:text-white rounded-full border border-slate-200 text-slate-500 shadow-sm transition"
              >
                <FaInstagram size={12} />
              </a>
              <a
                href="#"
                className="p-2.5 bg-white hover:bg-emerald-600 hover:text-white rounded-full border border-slate-200 text-slate-500 shadow-sm transition"
              >
                <FaLinkedinIn size={12} />
              </a>
              <a
                href="#"
                className="p-2.5 bg-white hover:bg-emerald-600 hover:text-white rounded-full border border-slate-200 text-slate-500 shadow-sm transition"
              >
                <FaYoutube size={12} />
              </a>
            </div>
          </div>

          <div className="col-span-2 md:col-span-1 space-y-4">
            <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-300 block">
              Technology On Demand
            </span>
            <div className="space-y-3">
              <div className="text-xs">
                <span className="block font-bold text-slate-200">
                  Review On LinkedIn:
                </span>
                <span className="text-amber-500">★★★★☆</span>{" "}
                <span className="text-slate-100 font-medium text-[11px]">
                  (450 reviews)
                </span>
              </div>
              <div className="text-xs">
                <span className="block font-bold text-slate-200">
                  Review On Google:
                </span>
                <span className="text-amber-500">★★★★★</span>{" "}
                <span className="text-slate-100 font-medium text-[11px]">
                  (350 reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Contact Stripe */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6 border-t border-slate-200/80 pt-8 text-xs text-slate-600">
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
              <FaMapPin size={14} />
            </div>
            <div>
              <span className="block text-slate-800 font-medium text-[10px]">
                Address
              </span>
              <span className="font-bold text-slate-800">
                212 N. 2nd St. STE 100, Richmond, KY 40475
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
              <FiSend size={14} />
            </div>
            <div>
              <span className="block text-slate-400 font-medium text-[10px]">
                Say Hello
              </span>
              <span className="font-bold text-emerald-600 underline">
                billing@webmaticsolutionsllc.com
              </span>
            </div>
          </div>
        </div>
        -{/* Legal Info Row */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-slate-200/40 text-[11px] text-slate-100 font-medium">
          <p>© 2026 WEBMATIC SOLUTIONS LLC All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="/Disclaimer" className="hover:text-emerald-300 transition">
              Disclaimer
            </a>
            <a
              href="/TermsandConditions"
              className="hover:text-emerald-300 transition"
            >
              Terms & Conditions
            </a>
            <a
              href="/PrivacyPolicy"
              className="hover:text-emerald-300 transition"
            >
              Privacy Policy
            </a>
            <a
              href="/RefundPolicy"
              className="hover:text-emerald-300 transition"
            >
              Refund Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
