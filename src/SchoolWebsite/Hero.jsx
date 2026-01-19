import { useNavigate } from "react-router";
function Hero() {
const navigate = useNavigate();

	return (
		<>
			<div className="sm:p-4">
				<div
					className="flex min-h-[520px] flex-col gap-6 bg-cover bg-center bg-no-repeat sm:gap-8 sm:rounded-xl items-center justify-center p-6 text-center"
					style={{
						backgroundImage:
							'linear-gradient(rgba(16, 25, 34, 0.7) 0%, rgba(16, 25, 34, 0.85) 100%),  url("https://lh3.googleusercontent.com/aida-public/AB6AXuAU5zrl6iRzPvLdwYGwOol4zXb_5AUozf4uwW8CDz9ful0b57hz4V0CvilT0O-XoFoF1xxqkwJRPJHOuT72aZgXFTpDmFa632uxP52YvBt_3wiMvZKNk0H5PgnNQVnEbvrJ1PIb30Z0e4fGNxnmThJhpAqCiH6gYO0BL5y1UzSPEiFFgjqZOTbORTMjUlxFKlIIxgczVeIfdhaBwMQ8Xca6aKUfvp89lKDoxbGyu3PXbHf-I7VX8QkHgy-J2FFItefkQNRDDqr520E")',
					}}
				>
					<div className="flex flex-col gap-4 max-w-2xl">
						<span className="inline-block self-center px-3 py-1 bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase rounded-full">
							Academic Excellence
						</span>
						<h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-6xl">
							Empowering the Leaders of Tomorrow
						</h1>
						<h2 className="text-slate-300 text-base font-normal leading-relaxed sm:text-lg">
							Wolf Academy provides a world-class education focused on
							innovation, critical thinking, and global citizenship in a
							state-of-the-art environment.
						</h2>
					</div>

					<div className="flex flex-col sm:flex-row gap-4 w-full justify-center px-4">
						<button onClick={() => navigate("/Apply2026")} className="flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold transition-transform active:scale-95">
							<span className="truncate">Apply for 2026</span>
						</button>
						<button onClick={() => navigate("/Campus-Life")} className="flex min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-white/10 text-white text-base font-bold backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
							<span className="truncate">Virtual Tour</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Hero;
