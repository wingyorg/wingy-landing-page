// illustrations used for join tiles
// use Unsplash images (royalty-free photos) via source URLs
const ServiceQualityImg =
  "https://images.unsplash.com/photo-1659354218430-ac7f0b31e977?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170";
const ServiceDeliveryImg =
  "https://images.unsplash.com/photo-1659353741091-e0274bb50905?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170";

const opportunities = [
  {
    title: "Become a Partner",
    description:
      "Join our network of restaurant partners and grow your business by reaching thousands of customers.",
  },
  {
    title: "Become a Courier",
    description:
      "Deliver food to customers and earn money on your own schedule with flexible working hours.",
  },
];

export default function JoinUs() {
  return (
    <section className="py-20 bg-gray-900 rounded-3xl mx-4 my-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let’s do it together
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Join our growing network of restaurants and delivery partners. We
            provide the platform and support you need to succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {opportunities.map((opportunity) => (
            <div key={opportunity.title} className="text-center">
              <div className="mb-8 flex justify-center">
                <div className="relative">
                  {/* organic orange backplate (no border) */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(251,146,60,0.20), rgba(251,146,60,0.06))",
                      borderRadius: "47% 53% 53% 47% / 65% 46% 54% 35%",
                      filter: "blur(20px) saturate(120%)",
                      boxShadow:
                        "0 28px 68px rgba(251,146,60,0.30), 0 6px 28px rgba(251,146,60,0.20)",
                    }}
                  />

                  {/* main container with same organic shape to hold the illustration (clips the image) */}
                  <div
                    className="relative w-64 h-64 flex items-center justify-center transition-transform duration-300 hover:scale-105 overflow-hidden"
                    style={{
                      borderRadius: "47% 53% 53% 47% / 65% 46% 54% 35%",
                    }}
                  >
                    <img
                      src={
                        opportunity.title === "Become a Partner"
                          ? ServiceQualityImg
                          : ServiceDeliveryImg
                      }
                      alt={opportunity.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      style={{ display: "block" }}
                    />
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {opportunity.title}
              </h3>

              <p className="text-gray-400 leading-relaxed text-base mb-8 max-w-sm mx-auto">
                {opportunity.description}
              </p>

              {opportunity.title === "Become a Courier" ? (
                <button
                  className="bg-white text-gray-400 px-10 py-3 rounded-full font-bold text-base cursor-not-allowed border border-gray-200"
                  disabled
                  aria-disabled="true"
                >
                  Coming soon
                </button>
              ) : (
                <button className="bg-white text-[#334155] px-10 py-3 rounded-full font-bold text-base transition-all hover:shadow-xl active:scale-95 hover:bg-[#fb923c] hover:text-white">
                  Register Now
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
