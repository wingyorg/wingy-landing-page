import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
   {
    question: 'What areas does Wingy currently serve?',
    answer: 'Wingy is initially launching in Safi, with expansion plans to other Moroccan cities in the coming months.',
  },
  {
    question: 'How does the delivery service work?',
    answer: 'Simply browse the menu, place your order, and our delivery partners handle the rest.',
  },
  {
    question: 'What are the delivery fees?',
    answer: 'First order is free delivery for customers. Later, a small dynamic fee (starting at 10 MAD) will apply, ensuring fair earnings for our delivery partners and top service quality.',
  },
  {
    question: 'How long does delivery take?',
    answer: 'Most deliveries arrive within 20-40 minutes, depending on your location and the restaurant\'s preparation time. You can track your order in real-time.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'Currently, Wingy accepts cash on delivery, and soon we’ll integrate online payments and mobile wallets for even more convenience.',
  },
  {
    question: 'What if there\'s an issue with my order?',
    answer: ' Our 24/7 customer support team is always available to help. You can report any issue directly at contact@wingy.ma and we’ll resolve it as quickly as possible.',
  },
  {
    question: 'How can my restaurant become a partner?',
    answer: 'Restaurants can join Wingy easily by Clicking on "Become a Partner" or contacting us  directly. During the launch phase, onboarding is 100% free, with 0% commission — plus technical support and visibility on the app, and more.',
  },
  {
    question: 'Is there a minimum order amount?',
    answer: 'No minimum order is required — you can order whatever you want, whenever you want. At Wingy, flexibility and accessibility are key to our customer experience.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our service
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl overflow-hidden border border-transparent hover:border-gray-200 transition-all duration-300"
              style={{ borderWidth: '1.5px' }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  color="#a5a19dff"
                  size={24}
                  strokeWidth={2.5}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-8 pb-6 font-medium text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our support team is available 24/7 to help you
          </p>
          {/* WhatsApp contact button — replace phone number in href with your support number (no plus sign) */}
          <a
            href="https://wa.me/2120684190001?text=Hello%20Wingy%20Support,%20I%20have%20a%20question"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white border border-[#25D366] text-[#25D366] px-6 py-3 rounded-xl font-semibold transition-all hover:bg-[#25D366] hover:text-white hover:shadow-lg active:scale-95"
            aria-label="Contact Wingy support on WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" className="mr-3" aria-hidden>
              <path d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.373 0 .06 4.95.06 11.07c0 1.95.5 3.87 1.45 5.6L0 24l7.62-2.02A11.95 11.95 0 0 0 12 22.14c6.627 0 11.94-4.95 11.94-11.07 0-2.98-1.16-5.78-3.42-7.59z" fill="#ffffff" opacity="0.0" />
              <path d="M20.52 3.48A11.87 11.87 0 0 0 12 0C5.373 0 .06 4.95.06 11.07c0 1.95.5 3.87 1.45 5.6L0 24l7.62-2.02A11.95 11.95 0 0 0 12 22.14c6.627 0 11.94-4.95 11.94-11.07 0-2.98-1.16-5.78-3.42-7.59z" stroke="#ffffff" strokeWidth="0" fill="#25D366"/>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.15-.198.297-.768.967-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.786-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.672-1.612-.92-2.207-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.074-.793.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.148.198 2.095 3.2 5.076 4.487 0 0 .224.099.403.05.18-.05 1.105-.449 1.26-.888.148-.438.148-.814.103-.888-.044-.074-.198-.099-.396-.198z" fill="#fff"/>
            </svg>
            Contact on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
