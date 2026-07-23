import React from "react";

export default function RefundAndReturnPolicy() {
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Breadcrumb / Header Section */}
      <section className="bg-white border-b border-slate-100 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Refund & Return Policy</h1>
          <div className="flex items-center text-sm text-slate-600 gap-2">
            <a href="/" className="hover:text-emerald-600">Home</a>
            <span>&gt;</span>
            <span className="text-emerald-600 font-semibold">Refund & Return Policy</span>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-slate-100 shadow-sm space-y-8 text-slate-600 leading-relaxed">
          
          {/* Header Note & Overview */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Refund & Return Policy</h2>
            <p className="text-sm font-semibold text-slate-500 italic mb-6">Your satisfaction is our priority. We ensure a transparent process for cancellations, returns, and refunds under the Consumer Protection Act, 2019.</p>
            
            <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 mb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Overview</h3>
              <p className="text-sm">
                At Webmatic Solutions LLC, customer satisfaction is our top priority. This policy outlines the terms for cancellations and returns in compliance with applicable laws.
              </p>
            </div>

            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Policy Sections</h4>
            <div className="flex flex-wrap gap-2 text-sm text-emerald-600 font-medium">
              <span className="bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Order Cancellation</span>
              <span className="bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Return & Replacement</span>
              <span className="bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Eligibility Criteria</span>
              <span className="bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Non-Returnable Items</span>
              <span className="bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Refund Timeline</span>
              <span className="bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">Shipping & Disputes</span>
            </div>
          </div>

          <hr className="border-slate-100" />

          {/* Order Cancellation Policy */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Order Cancellation Policy</h3>
            
            <p className="font-semibold text-slate-800">Before Shipment:</p>
            <p className="mt-1">
              You may cancel your order before it is shipped by contacting our support team at:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
              <li>billing@webmaticsolutionsllc.com</li>
            </ul>
            <p className="mt-2">or via live chat support.</p>
            <p className="mt-2">
              If the order is cancelled before shipment, you will receive a full refund within 5–7 business days to your original payment method.
            </p>

            <p className="font-semibold text-slate-800 mt-6">After Shipment:</p>
            <p className="mt-1">Once an order is shipped, cancellation is not possible.</p>
            <p className="mt-2">
              You may choose to reject the delivery, in which case the item will be returned to us, and a refund will be initiated after we receive the product in its original condition (see Refund Terms below).
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Return & Replacement Policy */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Return & Replacement Policy</h3>
            
            <p className="font-semibold text-slate-800">Eligibility</p>
            <p className="mt-1">We accept returns and offer replacements only under the following conditions:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>You received a damaged, defective, or incorrect product.</li>
              <li>The product is unopened, unused, and returned in its original packaging with all accessories, manuals, and invoices.</li>
            </ul>

            <p className="font-semibold text-slate-800 mt-6">Timeframe</p>
            <p className="mt-1">You must raise a return request within 7 days of delivery.</p>
            <p className="mt-2">
              To initiate a return or replacement, contact our support team with your Order ID, product photos, and reason for return.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Non-Returnable Items */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Non-Returnable Items</h3>
            <p className="mb-3">The following items are not eligible for return:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Products damaged due to misuse or improper handling</li>
              <li>Software products, downloaded drivers, and licenses.</li>
              <li>Ink/toner cartridges once opened or used</li>
              <li>Customized or special-order items</li>
            </ul>
          </div>

          <hr className="border-slate-100" />

          {/* Non-Refundable Services */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Non-Refundable Services</h3>
            <p>
              Due to the nature of digital and remote technical services, all services rendered are final and non-refundable once work has commenced. This includes, but is not limited to:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Remote printer troubleshooting and diagnostics</li>
              <li>Printer setup and configuration</li>
              <li>Network and wireless printer configuration</li>
              <li>Operating system and device connectivity support</li>
              <li>Technical consultation and support sessions</li>
            </ul>
            <p className="mt-4">
              Once a technician has begun diagnosing, troubleshooting, configuring, or providing technical assistance, the service is considered rendered and is not eligible for a refund, regardless of the outcome, change of mind, or if the service is no longer required.
            </p>

            <p className="font-semibold text-slate-800 mt-6">Cancellation</p>
            <p className="mt-1">
              If you wish to cancel your service before any work has started, please contact us immediately. Cancellation requests received before service begins may be reviewed at our sole discretion.
            </p>

            <p className="font-semibold text-slate-800 mt-6">Chargebacks</p>
            <p className="mt-1">
              If you believe there has been an error with your payment, please contact Webmatic Solutions LLC before initiating a dispute or chargeback. We will make every reasonable effort to resolve billing concerns promptly. Chargebacks filed for services that have already been provided may be contested with supporting service records and documentation.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Refund Policy */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Refund Policy</h3>
            
            <p className="font-semibold text-slate-800">Refund Method</p>
            <p className="mt-1">
              Once your return is approved and the product is received and inspected, the refund will be processed via:
            </p>
            <p className="mt-2 text-sm font-medium text-slate-700">Original mode of payment (Credit/Debit Card, UPI, Net Banking, etc.)</p>
            <p className="mt-2">Refunds are typically processed within 7–10 business days after product inspection.</p>

            <p className="font-semibold text-slate-800 mt-6">Deductions</p>
            <p className="mt-1">
              If any product is returned without original packaging, accessories, or has signs of use, a partial refund or restocking fee may apply.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Shipping for Returns */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Shipping for Returns</h3>
            <p>
              We offer free reverse pickup for eligible return cases.
            </p>
            <p className="mt-4">
              In locations where reverse pickup is not available, customers may need to ship the item to our return center. We will reimburse reasonable shipping charges on verified cases of defective/damaged products.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Dispute Resolution */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Dispute Resolution</h3>
            <p>
              We aim to resolve disputes in accordance with applicable consumer protection laws.
            </p>
          </div>

          <hr className="border-slate-100" />

          {/* Contact / Company Info Section */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Contact Us</h3>
            <p className="mb-4">
              For questions regarding this Refund Policy or your purchase, please contact our customer support team before purchasing any services or click below to start a request.
            </p>
            
            <div className="mb-6">
              <a 
                href="#return-request" 
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm"
              >
                Initiate Return Request
              </a>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 text-slate-700">
              <p className="font-semibold text-slate-900">Webmatic Solutions LLC</p>
              <p>212 N. 2nd St. STE 100,</p>
              <p>Richmond, KY 40475</p>
              <p className="mt-2">
                Email:
              </p>
              <ul className="list-disc pl-5 text-sm mt-1">
                <li><a href="mailto:billing@webmaticsolutionsllc.com" className="text-emerald-600 underline">billing@webmaticsolutionsllc.com</a></li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}