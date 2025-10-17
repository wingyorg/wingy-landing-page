import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function About() {
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
          <h1 className="text-4xl sm:text-5xl text-[#334155] font-bold mb-4">About Us</h1>
          <p className="text-xl text-[#334155]">Last updated: October 17, 2025</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Wingy</h2>
          <p className="text-gray-700 leading-relaxed text-lg">Coming Soon</p>
        </div>
      </div>
    </div>
  );
}
