import icon1 from "../assets/icon1.gif";
import icon2 from "../assets/icon2.gif"; 
import icon3 from "../assets/icon4.gif";
import icon4 from "../assets/icon3.gif";
import icon5 from "../assets/icon5.gif";  // fallback / reuse if additional icons aren't available

const categories = [
  { name: 'Groceries', icon: icon1, color: '#3b82f6' },
  { name: 'Restaurants', icon: icon2, color: '#fb923c' },
   { name: 'Chefs', icon: icon3, color: '#cd44efff' },
  { name: 'Courier', icon: icon4, color: '#10b981' },
  { name: 'Packages', icon: icon5, color: '#ef4444' },
 
];

export default function Categories() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            What We Offer at <span style={{ color: '#fb923c' }}>Wingy</span>
          </h2>  
        </div>
        <div className="flex flex-wrap justify-center gap-14">
          {categories.map((category) => {
            return (
              <div key={category.name} className="flex flex-col items-center gap-4">
                <div className="relative">
                  <div
                    className="w-48 h-48 flex items-center justify-center transform transition-transform hover:scale-105"
                    style={{
                      backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M91,65Q85,80,71.5,88Q58,96,43,92Q28,88,16.5,77Q5,66,8,51Q11,36,19.5,24.5Q28,13,43,9.5Q58,6,70.5,14Q83,22,90,36Q97,50,91,65Z' fill='%23FECC9D'/> <path d='M91,65Q85,80,71.5,88Q58,96,43,92Q28,88,16.5,77Q5,66,8,51Q11,36,19.5,24.5Q28,13,43,9.5Q58,6,70.5,14Q83,22,90,36Q97,50,91,65Z' transform='translate(1.6 -7.3)' stroke='%23a88867' stroke-width='1' fill='none'/></svg>")`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <img src={category.icon} alt={category.name} className="w-38 h-38 object-contain" />
                  </div>

                  <button
                    type="button"
                    className="absolute left-1/2 -bottom-8 transform font-weight: bold -translate-x-1/2 text-sm font-medium px-8 py-2 rounded-full shadow-sm focus:outline-none"
                    style={{
                      border: `2px solid ${category.color}`,
                      color: category.color,
                      backgroundColor: 'transparent',
                      zIndex: 20,
                    }}
                    onMouseEnter={(e) => {
                      const t = e.currentTarget as HTMLElement;
                      t.style.backgroundColor = category.color;
                      t.style.color = '#ffffff';
                      t.style.transform = 'translateX(-50%) scale(1.04)';
                    }}
                    onMouseLeave={(e) => {
                      const t = e.currentTarget as HTMLElement;
                      t.style.backgroundColor = 'transparent';
                      t.style.color = category.color;
                      t.style.transform = 'translateX(-50%) scale(1)';
                    }}
                  >
                    {category.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
