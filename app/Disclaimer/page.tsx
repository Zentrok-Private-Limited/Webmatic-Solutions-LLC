import React from "react";

export default function Disclaimer() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Breadcrumb / Header Section */}
      <section className="bg-white border-b border-slate-100 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Disclaimer</h1>
          <div className="flex items-center text-sm text-slate-600 gap-2">
            <a href="/" className="hover:text-emerald-600">Home</a>
            <span>&gt;</span>
            <span className="text-emerald-600 font-semibold">Disclaimer</span>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-100 shadow-sm space-y-8 text-slate-600 leading-relaxed">
          
          {/* Header Note & Important Notice */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Disclaimer</h2>
            <p className="text-sm font-semibold text-slate-500 italic mb-6">Please read this document carefully to understand the limitations of our services and our independent status.</p>
            
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 mb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Important Notice</h3>
              <p className="text-sm">
                The information provided on this site is "as-is." Use of our technical support services implies your acknowledgment of these limitations.
              </p>
            </div>

            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Quick Links</h4>
            <div className="flex flex-wrap gap-2 text-sm text-emerald-600 font-medium">
              <span className="bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">General Disclaimer</span>
              <span className="bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Trademark Notice</span>
              <span className="bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">No Affiliation</span>
              <span className="bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Service Accuracy</span>
              <span className="bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Remote Consent</span>
              <span className="bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Responsibility</span>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* General Disclaimer */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">General Disclaimer</h3>
            <p>
              Information and services provided on this website are for general technical assistance purposes only and are offered without warranties of any kind, either express or implied.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Brand & Trademark Notice */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Brand & Trademark Notice</h3>
            <p>
              All trademarks, logos, and brand names such as HP®, Canon®, Epson®, Brother®, and others belong to their respective owners.
            </p>
            <p className="mt-4">
              Reference to these brands is used strictly for identification purposes and does not imply that the brand owners have endorsed our services.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* No Affiliation Statement */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">No Affiliation Statement</h3>
            <p>
              We are an independent third-party support provider and do not represent any official printer brand unless explicitly stated. We do not claim any direct partnership with original equipment manufacturers (OEMs).
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Service Accuracy Disclaimer */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Service Accuracy Disclaimer</h3>
            <p>
              While we strive to provide accurate and effective solutions, we do not guarantee uninterrupted, error-free, or permanent fixes for all technical issues due to the complex nature of hardware and software environments.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Remote Support Consent */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Remote Support Consent</h3>
            <p>
              By requesting remote assistance, users voluntarily grant our technicians temporary access to their systems solely for troubleshooting and service delivery. Users are encouraged to remain present at their computer during the entire remote session.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Limitation of Responsibility */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Limitation of Responsibility</h3>
            <p className="mb-3">The company shall not be responsible for:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Data loss or corruption during the repair process.</li>
              <li>System issues arising from third-party software or drivers.</li>
              <li>Pre-existing technical problems or hardware failures.</li>
            </ul>
          </div>

          <hr className="border-slate-100" />

          {/* Contact / Company Info Section */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Contact Us</h3>
            <p>
              If you have any questions regarding this Disclaimer, please contact us at:
            </p>
            <div className="mt-4 bg-slate-50 p-4 rounded-xl border border-slate-100 text-slate-700">
              <p className="font-semibold text-slate-900">Webmatic Solutions LLC</p>
              <p>212 N. 2nd St. STE 100,</p>
              <p>Richmond, KY 40475</p>
              <p className="mt-2">
                Email: <a href="mailto:billing@webmaticsolutionsllc.com" className="text-emerald-600 underline">billing@webmaticsolutionsllc.com</a>
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}