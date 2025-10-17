import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
<div className="bg-gray-200 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
            to="/"
            className="inline-flex items-center gap-2 text-[#334155] hover:text-black mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-4xl sm:text-5xl text-[#334155] font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-[#334155]">Last updated: October 1, 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          {/* Scrollable content area: max height and vertical scroll */}
          <div className="space-y-8 max-h-[65vh] overflow-y-auto pr-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fb923c]" tabIndex={0}>
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Wingy Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">1. Introduction</p>
              <p className="text-gray-700 leading-relaxed">Welcome to Wingy, a platform connecting restaurants, customers, and delivery personnel. This Privacy Policy explains how we collect, use, and protect your personal data.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2. Data Collected</h3>
              <p className="text-gray-700 leading-relaxed">We collect the following information:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Customers:</strong> Name, phone number, email, address, location, payment methods, order history.</li>
                <li><strong>Restaurants:</strong> Business name, address, contact details, banking information, menu, and availability.</li>
                <li><strong>Delivery Personnel:</strong> Name, phone number, email, location, delivery history, payment details.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3. Use of Data</h3>
              <p className="text-gray-700 leading-relaxed">Your data is used for:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Providing our services (order processing, delivery management)</li>
                <li>Communicating with you (order notifications, customer support)</li>
                <li>Improving our platform (analyzing trends and enhancing user experience)</li>
                <li>Ensuring security and preventing fraud</li>
                <li>Managing payments and secure transactions</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4. Data Sharing & Transfers</h3>
              <p className="text-gray-700 leading-relaxed">We only share your data with:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Partner restaurants to process your orders.</li>
                <li>Delivery personnel for order fulfillment.</li>
                <li>Payment providers for secure transactions.</li>
                <li>Authorities when required by law.</li>
                <li>Technology service providers to enhance our platform.</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5. Data Security & Retention</h3>
              <p className="text-gray-700 leading-relaxed">We implement security measures to protect your information. Your data is retained as long as your account is active and deleted upon request.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6. Your Rights</h3>
              <p className="text-gray-700 leading-relaxed">You have the right to access, modify, or delete your data. You can also opt out of marketing communications.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">7. Cookies & Tracking Technologies</h3>
              <p className="text-gray-700 leading-relaxed">We use cookies to improve your experience. You can disable them in your browser settings.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">8. Policy Changes</h3>
              <p className="text-gray-700 leading-relaxed">We may update this policy at any time. The updated version will be available on our website.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">9. Contact & Complaints</h3>
              <p className="text-gray-700 leading-relaxed">For any inquiries, contact us at: <a href="mailto:contact@wingy.ma" className="text-[#fb923c]">contact@wingy.ma</a></p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
