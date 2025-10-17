export default function InstallApp() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
             <h4 className="text-base sm:text-lg font-medium text-gray-700 mb-4" style={{ fontSize: '1.50rem' }}>
              Get started in seconds
            </h4>
            <h2 className="font-bold text-gray-900 mb-6" style={{ fontSize: '3.75rem' }}>
              Install <span style={{ color: '#fb923c' }}>Wingy</span>
            </h2>
            <p className="text-2xl text-gray-600 leading-relaxed mb-8">
             And order food from the best and your favorite restaurants online and get the food delivered to your doorstep fast.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-3 text-white px-8 py-4 rounded-xl font-semibold bg-[#183B56] hover:bg-[#fb923c] transition-colors duration-200 hover:shadow-xl active:scale-95 btn-wizzle">
                <span className="inline-flex w-10 h-10 items-center justify-center text-white" style={{ fontSize: '3.25rem' }}>
                  <i className="fab fa-apple" aria-hidden="true"></i>
                </span>
                <div className="text-left">
                  <div className="text-s opacity-90">Available Soon</div>
                  <div className="text-xl font-bold">In App Store</div>
                </div>
              </button>

              <button className="flex items-center justify-center gap-3 text-white px-8 py-4 rounded-xl font-semibold bg-[#183B56] hover:bg-[#fb923c] transition-colors duration-200 hover:shadow-xl active:scale-95 btn-wizzle">
                <span className="inline-flex w-10 h-10 items-center justify-center text-white" style={{ fontSize: '2.75rem' }}>
                  <i className="fab fa-google-play" aria-hidden="true"></i>
                </span>
                <div className="text-left">
                  <div className="text-s opacity-90">Available Soon</div>
                  <div className="text-xl font-bold">In Google Play</div>
                </div>
              </button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-3xl blur-3xl opacity-20"></div>
              {/* polished illustration card: white padding, organic crop, subtle filter and hover */}
              <div className="relative">
                <div className=" p-2 ">
                  <div className="w-72 h-[480px] overflow-hidden rounded-[47% 53% 53% 47% / 65% 46% 54% 35%]">
                    <img
                      src="/src/assets/phone-illustration.png"
                      alt="Illustration"
                      className="w-full h-full object-cover transition-transform duration-300 ease-out hover:scale-105"
                      style={{ objectPosition: 'center 35%', filter: 'contrast(0.98) saturate(0.95)' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
