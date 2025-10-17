// Optional illustrations: drop files into src/assets with these names
import ServiceQualityImg from '../assets/service-quality.png';
import ServicePriceImg from '../assets/service-price.png';
import ServiceDeliveryImg from '../assets/service-delivery.png';

const features = [
  {
    title: 'Quality Food',
    description: 'Delicious meals from top-rated restaurants, delivered to your door.',
  },
  {
    title: 'Good Price',
    description: 'Affordable meals from top restaurants, delivered to your door.',
  },
  {
    title: 'Fast Delivery',
    description: 'Delicious meals delivered to you in 30 minutes or less.',
  },
];

export default function Services() {
  return (
    <section className="py-20" style={{ backgroundColor: '#f8fafc' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-2">
            Why choose <span style={{ color: '#fb923c' }}>Wingy</span>
          </h2>
          <br />
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all duration-150 bg-white text-[#334155] hover:scale-105 hover:bg-[#fb923c] hover:text-white"
            style={{ border: '1.5px solid #fb923c' }}
            aria-hidden="true"
          >
            Taste the difference
          </span>
        </div>

        <div className="flex justify-center gap-8">
          {features.map((feature, idx) => {
            const imgs = [ServiceQualityImg, ServicePriceImg, ServiceDeliveryImg];
            const Ill = imgs[idx];
            return (
              <div key={feature.title} className="relative card-wrapper" style={{ width: '300px' }}>
                {/* orange offset background */}
                <div
                  className="absolute inset-0 rounded-2xl card-offset"
                  style={{ transform: 'translate(12px, 12px)', backgroundColor: '#ffd7bd', zIndex: 0 }}
                  aria-hidden="true"
                />

                {/* white front card */}
                <div
                  className="relative text-center p-8 rounded-2xl transition-all will-change-transform card-inner"
                  style={{ backgroundColor: '#fff', boxShadow: '0 6px 18px rgba(0,0,0,0.08)', zIndex: 10, border: '1.5px solid #fb923c' }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-48 h-48 rounded-full flex items-center justify-center">
                      {Ill ? (
                        <img src={Ill} alt={feature.title} className="w-48 h-48 object-contain card-img" />
                      ) : null}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4" style={{ color: '#334155' }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed font-semibold" style={{ color: '#64748b' }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
                        
