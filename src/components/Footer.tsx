import {
	Facebook,
	Youtube,
	Instagram,
	Linkedin,
	Mail,
	Phone,
	MapPin,
} from "lucide-react";
import LogoImage from "../assets/logo.png";
import { Link } from "react-router-dom";
import { ChevronUp } from "lucide-react";

export default function Footer() {
	return (
		<>
			<footer className="bg-gray-900 text-gray-300">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
						<div>
							<div className="flex items-center gap-4 mb-6">
								{LogoImage ? (
									<img
										src={LogoImage}
										alt="Wingy logo"
										className="w-10 h-10 object-contain"
									/>
								) : null}
								<h3 className="text-white text-2xl font-bold">Wingy</h3>
							</div>
							<p className="mb-6 leading-relaxed">
								Your favorite restaurants, delivered fast. Join thousands of satisfied
								customers enjoying quality food at their doorstep.
							</p>
							<div className="flex gap-4">
								<a
									href="https://www.facebook.com/wingyfood/"
									className="group bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-lg flex items-center justify-center transition-all"
									aria-label="Facebook"
									target="_blank"
									rel="noopener noreferrer">
									<Facebook
										size={20}
										className="text-white group-hover:text-[#fb923c] transition-colors"
									/>
								</a>
								<a
									href="https://www.youtube.com/@Wingyfood"
									className="group bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-lg flex items-center justify-center transition-all"
									aria-label="YouTube"
									target="_blank"
									rel="noopener noreferrer">
									<Youtube
										size={20}
										className="text-white group-hover:text-[#fb923c] transition-colors"
									/>
								</a>
								<a
									href="https://www.instagram.com/wingy_ma/"
									className="group bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-lg flex items-center justify-center transition-all"
									aria-label="Instagram"
									target="_blank"
									rel="noopener noreferrer">
									<Instagram
										size={20}
										className="text-white group-hover:text-[#fb923c] transition-colors"
									/>
								</a>
								<a
									href="https://www.linkedin.com/company/wingyfood"
									className="group bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-lg flex items-center justify-center transition-all"
									aria-label="LinkedIn"
									target="_blank"
									rel="noopener noreferrer">
									<Linkedin
										size={20}
										className="text-white group-hover:text-[#fb923c] transition-colors"
									/>
								</a>
							</div>
						</div>

						<div>
							<h4 className="text-white text-lg font-semibold mb-6">Services</h4>
							<ul className="space-y-3">
								<li>
									<a href="#" className="hover:text-[#fb923c] transition-colors">
										Groceries
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-[#fb923c] transition-colors">
										Restaurants
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-[#fb923c] transition-colors">
										Dark Kitchens
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-[#fb923c] transition-colors">
										Courier
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-[#fb923c] transition-colors">
										Packages
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="text-white text-lg font-semibold mb-6">Support</h4>
							<ul className="space-y-3">
								<li>
									<a href="#" className="hover:text-[#fb923c] transition-colors">
										About US
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-[#fb923c] transition-colors">
										Safety
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-[#fb923c] transition-colors">
										Contact Us
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-[#fb923c] transition-colors">
										Become a Driver
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-[#fb923c] transition-colors">
										Become a Partner
									</a>
								</li>
							</ul>
						</div>

						<div>
							<h4 className="text-white text-lg font-semibold mb-6">Contact Info</h4>
							<ul className="space-y-4">
								<li className="flex items-start gap-3">
									<MapPin className="text-[#fb923c] flex-shrink-0 mt-1" size={20} />
									<a
										href="https://www.google.com/maps/search/?api=1&query=Safi%2C+Morocco"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-[#fb923c] transition-colors">
										Safi, Morocco
									</a>
								</li>
								<li className="flex items-center gap-3">
									<Phone className="text-[#fb923c] flex-shrink-0" size={20} />
									<a
										href="tel:+1234567890"
										className="hover:text-[#fb923c] transition-colors">
										+212 06 84 19 00 01
									</a>
								</li>
								<li className="flex items-center gap-3">
									<Mail className="text-[#fb923c] flex-shrink-0" size={20} />
									<a
										href="mailto:contact@wingy.ma"
										className="hover:text-[#fb923c] transition-colors">
										contact@wingy.ma
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="border-t border-gray-800 pt-8">
						<div className="flex flex-col md:flex-row justify-between items-center gap-4">
							<p className="text-sm">&copy; 2025 Wingy. All rights reserved.</p>
							<div className="flex flex-wrap justify-center gap-6 text-sm">
								<Link to="/privacy" className="hover:text-[#fb923c] transition-colors">
									Privacy Policy
								</Link>
								<Link to="/terms" className="hover:text-[#fb923c] transition-colors">
									Terms and Conditions
								</Link>
								<a href="/security" className="hover:text-[#fb923c] transition-colors">
									Security
								</a>
								<a href="#" className="hover:text-[#fb923c] transition-colors">
									Accessibility
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
			{/* Scroll to top button */}
			<button
				onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
				aria-label="Scroll to top"
				className="fixed right-6 bottom-8 z-[9999] bg-[#fb923c] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
				<ChevronUp size={20} strokeWidth={2.5} />
			</button>
		</>
	);
}
