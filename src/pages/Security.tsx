import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Security() {
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
          <h1 className="text-4xl sm:text-5xl text-[#334155] font-bold mb-4">Security at Wingy</h1>
          <p className="text-xl text-[#334155]">Last updated: October 1, 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12">
          <div className="space-y-8 max-h-[75vh] overflow-y-auto pr-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fb923c]" tabIndex={0}>
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Security at Wingy</h2>
              <p className="text-gray-700 leading-relaxed">At Wingy, we prioritize user privacy and security. We understand that secure products are essential to building trust, and we are committed to continuously improving security with our teams.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Hosting</h3>
              <p className="text-gray-700 leading-relaxed">Our data centers are hosted by Amazon Web Services (AWS), which undergoes regular audits and certifications from accreditation bodies worldwide.</p>
              <p className="text-gray-700 leading-relaxed">Our application architecture, database encryption, and access controls are secured, monitored, and audited by our in-house engineers.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Up-To-Date Infrastructure & Vulnerability Reporting</h3>
              <p className="text-gray-700 leading-relaxed">We keep our infrastructure updated with scheduled security maintenance and apply patches immediately when necessary. We also fix application code quickly when vulnerabilities are discovered. We are committed to setting a new standard of trust online and working closely with the security community to identify and address vulnerabilities.</p>
              <p className="text-gray-700 leading-relaxed">If you believe you have discovered a vulnerability in a Wingy product, you can report it through our security program at <a href="mailto:contact@wingy.ma" className="text-[#fb923c]">contact@wingy.ma</a>.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Proactive Monitoring</h3>
              <p className="text-gray-700 leading-relaxed">We use redundant, global monitoring services to track Wingy’s infrastructure 24/7/365. Any errors or abnormalities trigger automatic alerts, and our teams proactively work to resolve any detected issues.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Reliable and Secure Service</h3>
              <p className="text-gray-700 leading-relaxed">We follow globally recognized Information Security Management System (ISMS) standards. Our security measures include:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Data encryption</li>
                <li>Security controls that protect our infrastructure from external attacks and unauthorized access</li>
                <li>Internal policies defining our approach to data protection and employee training</li>
              </ul>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">GDPR Compliance</h3>
              <p className="text-gray-700 leading-relaxed">We respect user privacy rights and understand the importance of safeguarding our customers’ data. Our privacy policy explains how information (including personal data as defined under GDPR) is collected, stored, used, disclosed, and transferred, as well as the choices users have regarding their personal information.</p>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Contact</h3>
              <p className="text-gray-700 leading-relaxed">For security inquiries or to report vulnerabilities: <a href="mailto:contact@wingy.ma" className="text-[#fb923c]">contact@wingy.ma</a></p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
