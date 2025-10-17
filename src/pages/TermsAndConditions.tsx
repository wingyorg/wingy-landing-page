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
          <h1 className="text-4xl sm:text-5xl text-[#334155] font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl text-[#334155]">Last updated: October 1, 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          {/* Scrollable content area: max height and vertical scroll */}
          <div className="space-y-8 max-h-[65vh] overflow-y-auto pr-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fb923c]" tabIndex={0}>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Terms of Use (GTU) for Wingy</h2>
            <p className="text-gray-700 leading-relaxed">Last updated: 02/03/2025</p>
            <p className="text-gray-700 leading-relaxed mt-4">Wingy is an online marketplace for ordering and delivery platform connecting customers, restaurants, and delivery drivers. By using our services you accept these Terms of Use in full. If you do not agree with these terms, you must stop using the platform immediately.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">2. Definitions</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Services:</strong> The services provided by Wingy via its website, mobile app, APIs, etc., including meal ordering, delivery, restaurant management, and related features.</li>
              <li><strong>User:</strong> Any person accessing and using the platform, whether a customer, restaurant, delivery driver, or administrator.</li>
              <li><strong>Customer:</strong> A user who places an order on the platform to receive a meal at home or work.</li>
              <li><strong>Restaurant:</strong> A partner establishment offering meals through Wingy's platform.</li>
              <li><strong>Delivery Driver:</strong> An individual or independent company responsible for delivering orders placed via Wingy.</li>
              <li><strong>Platform:</strong> The set of applications (website, mobile app) providing Wingy's services.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">3. Services Offered</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>Meal Ordering:</strong> Customers can order meals from a wide selection of partner restaurants via the Wingy platform.</li>
              <li><strong>Delivery:</strong> Orders are delivered to the customer's address by partner drivers.</li>
              <li><strong>Restaurant Management:</strong> Restaurants can create and manage menus, track orders, and receive payments via the platform.</li>
              <li><strong>Payment System:</strong> Customers can pay online using secure payment methods like credit cards, PayPal, or local solutions.</li>
              <li><strong>Order Tracking:</strong> Customers can track the status of their orders and delivery in real time.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">4. Terms of Use</h3>
            <h4 className="font-semibold mt-4">4.1 Account Registration</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
              <li>To access certain services you must create an account. You agree to provide accurate, current information during registration, including your name, email address, phone number, and delivery address.</li>
              <li>You are responsible for account security, including keeping your password confidential.</li>
            </ul>

            <h4 className="font-semibold mt-4">4.2 Using the Services</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
              <li>By accessing and using the platform you agree to comply with all applicable laws and regulations in your country of residence.</li>
              <li>You must use the platform legally, honestly, and responsibly. Abusive, fraudulent, or malicious use may result in suspension or termination of your account.</li>
            </ul>

            <h4 className="font-semibold mt-4">4.3 User Conduct</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
              <li>Users (customers, restaurants, drivers) must interact respectfully. Harassment, abuse, or inappropriate behavior will result in account removal.</li>
              <li>Unauthorized access, automated scripts, or data scraping without permission is prohibited.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">5. User Obligations</h3>
            <h4 className="font-semibold mt-4">5.1 User Responsibility</h4>
            <p className="text-gray-700 leading-relaxed">Users must ensure registration and order information is accurate and up to date. They must keep account credentials confidential.</p>

            <h4 className="font-semibold mt-4">5.2 Customer Obligations</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
              <li>Customers are responsible for ordering, payment, and receipt of meals.</li>
              <li>They must verify the delivery address is correct before completing the order.</li>
              <li>If there is an issue with an order (wrong meal, delayed delivery, etc.), customers should contact Wingy customer support to resolve it.</li>
            </ul>

            <h4 className="font-semibold mt-4">5.3 Restaurant Obligations</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
              <li>Restaurants must ensure meals comply with health and safety standards.</li>
              <li>They are responsible for keeping their menus and prices up to date.</li>
              <li>They must prepare meals in time and ready for dispatch within agreed timeframes.</li>
            </ul>

            <h4 className="font-semibold mt-4">5.4 Driver Obligations</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
              <li>Drivers must deliver meals within the agreed time and in the condition matching the original packaging.</li>
              <li>They must follow safety rules, including road traffic regulations during deliveries.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">6. Pricing and Payment</h3>
            <h4 className="font-semibold mt-4">6.1 Service Pricing</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
              <li><strong>Meal Prices:</strong> Each restaurant sets its own prices. Wingy charges a commission on each order.</li>
              <li><strong>Delivery Fees:</strong> A delivery fee may apply depending on distance between the restaurant and delivery address.</li>
              <li><strong>Commissions:</strong> Wingy charges a commission on transactions processed via the platform; this is disclosed before payment.</li>
            </ul>

            <h4 className="font-semibold mt-4">6.2 Payment Methods</h4>
            <p className="text-gray-700 leading-relaxed">Payments may be made by credit card (Visa, MasterCard, etc.), e-wallets like PayPal, or local online payment solutions.</p>

            <h4 className="font-semibold mt-4">6.3 Cancellations and Refunds</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
              <li><strong>Customer Cancellations:</strong> Customers may cancel orders within a reasonable time before preparation begins. If the order is already in preparation, delivery fees may not be refundable.</li>
              <li><strong>Cancellation by Wingy or Restaurant:</strong> If Wingy or the restaurant cancels an order for reasons outside the customer's control (ingredient shortages, service issues, etc.), a full refund will be issued.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">7. Intellectual Property</h3>
            <p className="text-gray-700 leading-relaxed">The Wingy platform and all its content (logos, images, text, videos, etc.) are protected by copyright and intellectual property rights. You may not use these elements without Wingy's express permission.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">8. Limitation of Liability</h3>
            <p className="text-gray-700 leading-relaxed">Wingy shall not be liable for delays or errors caused by external factors (traffic, weather, etc.), order errors due to incorrect user information, or technical issues beyond Wingy's control.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">9. Privacy and Data Protection</h3>
            <h4 className="font-semibold mt-4">9.1 Collection of Personal Data</h4>
            <p className="text-gray-700 leading-relaxed">Wingy collects personal information (name, address, email, phone number, payment details) necessary to manage orders and deliveries.</p>

            <h4 className="font-semibold mt-4">9.2 Use of Data</h4>
            <p className="text-gray-700 leading-relaxed">Collected information is used to process orders, improve services, and send important notifications. We do not sell or share your data with third parties without your consent.</p>

            <h4 className="font-semibold mt-4">9.3 Data Security</h4>
            <p className="text-gray-700 leading-relaxed">Wingy implements technical and organizational measures to protect the security and confidentiality of users' personal data.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">10. Changes to the Terms</h3>
            <p className="text-gray-700 leading-relaxed">Wingy reserves the right to modify these Terms at any time. Users will be informed of changes via the platform or email. Continued use after changes constitutes acceptance of the new terms.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">11. Termination</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li><strong>User Termination:</strong> Users may terminate their account by contacting Wingy support. Termination does not remove financial obligations related to prior orders.</li>
              <li><strong>Termination by Wingy:</strong> Wingy may suspend or terminate access for users who materially breach these Terms.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">12. Force Majeure</h3>
            <p className="text-gray-700 leading-relaxed">Wingy will not be liable for failures or delays due to force majeure events such as natural disasters, strikes, technical failures, or other events beyond its control.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">13. Governing Law and Jurisdiction</h3>
            <p className="text-gray-700 leading-relaxed">These Terms are governed by Moroccan law. In case of dispute, the courts of Safi, Morocco will have exclusive jurisdiction.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">14. Contact</h3>
            <p className="text-gray-700 leading-relaxed">For questions about these Terms, contact us at:</p>
            <div className="mt-4 p-6 bg-gray-50 rounded-xl">
              <p className="text-gray-700">Email: contact@wingy.ma</p>
              <p className="text-gray-700">Address: Safi, Morocco</p>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">15. Annexes</h3>
            <p className="text-gray-700 leading-relaxed">The following documents supplement these Terms and should be read alongside them:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">16. Final Provisions</h3>
            <p className="text-gray-700 leading-relaxed">These Terms, together with the referenced policies (privacy, cookies, etc.), constitute the entire agreement between Wingy and the user regarding the use of services. If any provision is found invalid, it will be replaced by a valid provision reflecting the original intent. Nothing in these Terms creates a partnership, agency, or employer/employee relationship between Wingy and the user.</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">17. Dispute Resolution</h3>
            <p className="text-gray-700 leading-relaxed">If a dispute arises, please contact customer support to attempt an amicable resolution. If unresolved, the parties may agree to mediation. Failing that, the courts of Safi, Morocco will have exclusive jurisdiction.</p>
            <p className="text-gray-700 mt-4">Last updated: 02/03/2025</p>
          </section>
          </div>
        </div>
      </div>
    </div>
  );
}
