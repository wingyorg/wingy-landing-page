import { Clock, Shield, Star, ChevronDown, User, Mail, Menu, X } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import HeroImage from "../assets/hero-illustration.png";
import LogoImage from "../assets/logo.png";

export default function Hero() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [restaurantName, setRestaurantName] = useState("");
	const [email, setEmail] = useState("");
	const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// refs for form and image vibration
	const form = useRef<HTMLFormElement | null>(null);
	const imgRef = useRef<HTMLImageElement | null>(null);
	const vibeTimer = useRef<number | null>(null);

	const openModal = () => {
		setRestaurantName("");
		setEmail("");
		setErrors({});
		setIsModalOpen(true);
	};
	const closeModal = () => setIsModalOpen(false);

	const sendEmail = (e: React.FormEvent) => {
		e.preventDefault();
		if (!form.current) return;
		const serviceId = import.meta.env?.VITE_EMAILJS_SERVICE_ID || "service_fqm8u6d";
		const templateId = import.meta.env?.VITE_EMAILJS_TEMPLATE_ID || "template_12j8q3v";
		const publicKey = import.meta.env?.VITE_EMAILJS_PUBLIC_KEY || "3ttU6qoXYGd9jJp0X";

		emailjs
			.sendForm(serviceId, templateId, form.current, publicKey)
			.then(() => {
				alert("Demo request sent — we will contact you shortly.");
				closeModal();
			})
			.catch(err => {
				console.debug("emailjs error", err);
				alert("Failed to send via EmailJS — opening mail client as fallback.");
				closeModal();
			});
	};

	const scrollToSection = (id: string) => {
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: "smooth" });
	};

	const startVibe = () => {
		if (vibeTimer.current !== null) return;
		vibeTimer.current = window.setInterval(() => {
			if (!imgRef.current) return;
			const x = (Math.random() - 0.5) * 6;
			const y = (Math.random() - 0.5) * 6;
			const r = (Math.random() - 0.5) * 2;
			imgRef.current.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;
		}, 45) as unknown as number;
	};
	const stopVibe = () => {
		if (vibeTimer.current !== null) {
			clearInterval(vibeTimer.current);
			vibeTimer.current = null;
		}
		if (imgRef.current) imgRef.current.style.transform = "";
	};

	useEffect(() => {
		return () => {
			if (vibeTimer.current !== null) {
				clearInterval(vibeTimer.current);
				vibeTimer.current = null;
			}
		};
	}, []);

	return (
		<div className="relative overflow-hidden" style={{ backgroundColor: "#fff" }}>
			<div
				className="absolute inset-0 bg-gradient-to-br from-[#fff7ed] via-[#ffedd5] to-[#fff1e6]"
				style={{
					backgroundImage: "linear-gradient(135deg, #fff7ed 0%, #ffedd5 50%, #fff1e6 100%)",
				}}
			/>

			<nav className="fixed inset-x-0 top-0 z-50">
				<div style={{ maxWidth: 1200, margin: "0 auto" }} className="px-4 sm:px-6 lg:px-8 py-6">
					<div
						className="rounded-full w-full"
						style={{ background: "linear-gradient(90deg, #fff7ed, #fff4ee)", border: "1px solid rgba(251,146,60,0.12)", boxShadow: "0 5px 10px #fb923c5e" }}>
						<div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
							<div className="flex items-center gap-2">
								<Link to="/" className="flex items-center gap-2">
									<div className="w-10 h-10 rounded-lg flex items-center justify-center">
										{LogoImage ? <img src={LogoImage} alt="Logo" className="w-12 h-12 object-contain" /> : null}
									</div>
									<span className="text-2xl font-bold" style={{ color: "#334155" }}>Wingy</span>
								</Link>
							</div>

							<div className="hidden md:flex items-center gap-8 mx-auto">
								<button onClick={() => scrollToSection("services")} className="text-[#334155] hover:text-[#fb923c] transition-colors"><span className="font-poppins font-medium text-lg">Why Wingy</span></button>
								<button onClick={() => scrollToSection("categories")} className="text-[#334155] hover:text-[#fb923c] transition-colors"><span className="font-poppins font-medium text-lg">Services</span></button>
								<button onClick={() => scrollToSection("join")} className="text-[#334155] hover:text-[#fb923c] transition-colors"><span className="font-poppins font-medium text-lg">Join Us</span></button>
								<button onClick={() => scrollToSection("app")} className="text-[#334155] hover:text-[#fb923c] transition-colors"><span className="font-poppins font-medium text-lg">App</span></button>
								<button onClick={() => scrollToSection("faq")} className="text-[#334155] hover:text-[#fb923c] transition-colors"><span className="font-poppins font-medium text-lg">FAQ</span></button>
							</div>

							<div className="flex items-center gap-4">
								<button className="hidden md:inline text-sm font-medium text-gray-700 hover:text-gray-900">Login</button>
								<button onClick={openModal} className="hidden md:inline text-white font-medium rounded-full px-5 py-2" style={{ backgroundColor: "#fb923c" }}>Request a demo</button>
								<button className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900" onClick={() => setIsMenuOpen(v => !v)} aria-label="Toggle menu">{isMenuOpen ? <X size={20} /> : <Menu size={20} />}</button>
							</div>
						</div>
					</div>
				</div>
			</nav>

			{/* spacer so content doesn't sit under the fixed nav. Expand for mobile menu */}
			<div aria-hidden style={{ height: isMenuOpen ? 260 : 80 }} />

			{/* Mobile menu */}
			{isMenuOpen && (
				<div className="md:hidden fixed inset-x-0 top-20 z-40">
					<div className="mx-4 p-4 rounded-xl bg-white shadow-lg border" style={{ borderColor: "#fb923c" }}>
						<div className="flex flex-col gap-3">
							<button onClick={() => { scrollToSection('services'); setIsMenuOpen(false); }} className="text-left font-poppins font-medium text-lg text-[#334155]">Why Wingy</button>
							<button onClick={() => { scrollToSection('categories'); setIsMenuOpen(false); }} className="text-left font-poppins font-medium text-lg text-[#334155]">Services</button>
							<button onClick={() => { scrollToSection('join'); setIsMenuOpen(false); }} className="text-left font-poppins font-medium text-lg text-[#334155]">Join Us</button>
							<button onClick={() => { scrollToSection('app'); setIsMenuOpen(false); }} className="text-left font-poppins font-medium text-lg text-[#334155]">App</button>
							<button onClick={() => { scrollToSection('faq'); setIsMenuOpen(false); }} className="text-left font-poppins font-medium text-lg text-[#334155]">FAQ</button>
							<div className="mt-2 flex gap-2">
								<button className="flex-1 px-4 py-2 rounded-md bg-gray-100 text-gray-700" onClick={() => setIsMenuOpen(false)}>Login</button>
								<button className="flex-1 px-4 py-2 rounded-full bg-[#fb923c] text-white" onClick={() => { openModal(); setIsMenuOpen(false); }}>Request a demo</button>
							</div>
						</div>
					</div>
				</div>
			)}

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div>
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 group cursor-pointer transition-all duration-150 hover:scale-105 hover:bg-[#fb923c] bg-white" style={{ borderColor: "#fb923c", borderWidth: 2 }}>
							<Star size={16} className="text-[#fb923c] group-hover:text-white" />
							<span className="font-semibold text-sm text-[#334155] transition-colors duration-150 group-hover:text-white">Trusted by 10,000+ customers</span>
						</div>

						<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ color: "#334155" }}>
							Quality Food<br />
							<span style={{ color: "#fb923c" }}>Delivered Fast</span>
						</h1>

						<p className="text-xl mb-10 leading-relaxed" style={{ color: "#64748b" }}>
							<span className="font-semibold" style={{ display: 'inline-block', position: 'relative' }}>
								Order from your favorite restaurants and enjoy quality foods delivered right to your doorstep in minutes.
								<svg aria-hidden viewBox="0 0 400 20" preserveAspectRatio="none" style={{ position: 'absolute', left: 0, bottom: -15, width: '90%', height: 16, pointerEvents: 'none' }}>
									<path d="M0,10 C60,0 140,20 200,10 C260,0 340,20 400,10" stroke="#fb923c" strokeWidth={3} fill="none" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</span>
						</p>

						<div className="grid grid-cols-3 gap-6">
							<div className="flex items-start gap-3 pr-4 border-r-2 border-orange-300">
								<div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
									<div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#fb923c' }}>
										<Clock size={16} color="#fff" />
									</div>
								</div>
								<div>
									<p className="font-bold text-lg" style={{ color: '#334155' }}>30 min</p>
									<p className="text-sm" style={{ color: '#000000ff' }}>Fast Delivery</p>
								</div>
							</div>

							<div className="flex items-start gap-3 px-4 border-r-2 border-orange-300">
								<div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
									<div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#fb923c' }}>
										<Shield size={16} color="#fff" />
									</div>
								</div>
								<div>
									<p className="font-bold text-lg" style={{ color: '#334155' }}>100%</p>
									<p className="text-sm" style={{ color: '#000000ff' }}>Safe & Secure</p>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
									<div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#fb923c' }}>
										<Star size={16} color="#fff" />
									</div>
								</div>
								<div>
									<p className="font-bold text-lg" style={{ color: '#334155' }}>500+</p>
									<p className="text-sm" style={{ color: '#000000ff' }}>Restaurants</p>
								</div>
							</div>
						</div>
					</div>

					<div className="relative hidden lg:block">
						<div className="relative">
							<img ref={imgRef} src={HeroImage} alt="Hero illustration" className="w-full rounded-none shadow-none border-0" onMouseEnter={startVibe} onMouseLeave={stopVibe} onFocus={startVibe} onBlur={stopVibe} tabIndex={0} />

							<div className="absolute -bottom-4 -left-6 rounded-2xl shadow-xl p-6 bg-white" style={{ border: '1.5px solid #fb923c' }}>
								<div className="flex items-center gap-4">
									<div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#fb923c' }}>
										<Shield size={20} color="#fff" />
									</div>
									<div>
										<p className="font-bold" style={{ color: '#334155' }}>Safe Delivery</p>
										<p className="text-sm" style={{ color: '#64748b' }}>Contactless & Secure</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="absolute bottom-0 left-0 right-0">
				<div className="overflow-hidden" style={{ borderTopLeftRadius: '43%', borderTopRightRadius: '43%' }}>
					<svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full">
						<path d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 32.5C840 35 960 40 1080 42.5C1200 45 1320 45 1380 45L1440 45V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="#f8fafc" />
					</svg>
				</div>
			</div>

			<button onClick={() => scrollToSection('services')} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce bg-[#fb923c] text-white rounded-full p-3 shadow-lg focus:outline-none focus:ring-4 focus:ring-[#fb923c]/30" aria-label="Scroll down" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
				<ChevronDown size={24} strokeWidth={2.5} />
			</button>

			{/* Modal overlay */}
			{isModalOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center px-4" role="dialog" aria-modal="true" aria-labelledby="demo-modal-title">
					<div className="fixed inset-0 bg-black/40" onClick={closeModal} />
					<div className="relative max-w-md w-full bg-white rounded-2xl shadow-xl p-6 z-10" style={{ border: '1.5px solid #fb923c' }}>
						<h2 id="demo-modal-title" className="text-xl font-semibold mb-4 text-gray-900">
							<span className="inline-flex items-center px-3 py-1 rounded-full bg-[#fb923c] text-white text-sm font-medium">Request a demo</span>
						</h2>

						<form ref={form} onSubmit={sendEmail} className="space-y-3">
							<label className="block mb-3">
								<span className="text-sm font-medium text-gray-700 inline-flex items-center gap-2"><User size={16} className="text-gray-700" /> Restaurant name</span>
								<input type="text" value={restaurantName} name="name" onChange={e => setRestaurantName(e.target.value)} className="mt-1 block w-full rounded-md border border-[#fb923c] shadow-sm placeholder:text-sm px-2" placeholder="e.g. La Bonne Table" />
								{errors.name ? <p className="text-xs text-red-600 mt-1">{errors.name}</p> : null}
							</label>

							<label className="block mb-4">
								<span className="text-sm font-medium text-gray-700 inline-flex items-center gap-2"><Mail size={16} className="text-gray-700" /> Email</span>
								<input type="email" value={email} name="email" onChange={e => setEmail(e.target.value)} className="mt-1 block w-full rounded-md border border-[#fb923c] placeholder:text-sm px-2" placeholder="name@restaurant.com" />
								{errors.email ? <p className="text-xs text-red-600 mt-1">{errors.email}</p> : null}
							</label>

							<div className="flex items-center justify-end gap-3">
								<button onClick={closeModal} type="button" className="px-4 py-2 rounded-md bg-gray-100 text-gray-700">Cancel</button>
								<button type="submit" className="px-4 py-2 rounded-md bg-[#fb923c] text-white">Send</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}
