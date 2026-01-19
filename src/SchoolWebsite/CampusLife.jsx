import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CampusLife() {
	const navigate = useNavigate();
	const [isPlaying, setIsPlaying] = useState(false);

	return (
		<>
			<nav className="fixed top-0 z-50 w-full">
				<div className="flex items-center justify-between p-6">
					<button
						onClick={() => navigate("/")}
						className="w-11 h-11 flex items-center justify-center rounded-full glass-btn active:scale-95 transition-all"
					>
						<span className="material-symbols-outlined text-white text-lg">
							arrow_back_ios_new
						</span>
					</button>
					<div className="flex flex-col items-center">
						<span className="text-[9px] text-white/40 font-semibold uppercase tracking-[0.4em] mb-1">
							Wolf Academy
						</span>
						<h1 className="text-white text-xs font-light tracking-[0.25em] uppercase">
							Virtual Tour
						</h1>
					</div>
					<button className="w-11 h-11 flex items-center justify-center rounded-full glass-btn active:scale-95 transition-all">
						<span className="material-symbols-outlined text-white text-lg">
							share
						</span>
					</button>
				</div>
			</nav>
			<main>
				<section className="relative pt-24 px-4 pb-12">
					<div className="max-w-4xl mx-auto">
						<div className="relative aspect-cinematic w-full rounded-2xl overflow-hidden video-glow bg-black group">
							<img
								alt="Cinematic Campus View"
								className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuDziE3gLIAc9jdglQ0cZ74JVJkwkt4uYkUkinA7mnQgkJG_TcNRFRerPozUIQ1sxGlhzD2cX2XbHxoi54PzGzib2bgFRgph0oP-IljEGx3KFh7JJrlTYbZk1zgHoHb-BNPoph_ePSYxbjV2fD6sAa_B7hvpIT4fz-UQaTcM9LY5oDtELGXOJ5x1Ifhub5ASc7TW4_cbZ2tTraivbwGbaNpLj6PNA-mniBICpsFWeKbpMHx3iVAGLyE-5GPnk-pFKLf7OwubkiOSw1s"
							/>
							<div className="absolute inset-0 inner-vignette pointer-events-none"></div>
							{isPlaying && (
								<div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
									<div className="flex justify-end">
										<div className="glass-btn px-3 py-1 rounded-full text-[10px] font-medium tracking-widest uppercase text-white/80">
											4K Live
										</div>
									</div>
									<div className="glass-overlay rounded-xl p-4 flex items-center justify-between">
										<div className="flex items-center gap-6">
											<button
												onClick={() => setIsPlaying(false)}
												className="text-white/90 hover:text-white transition-colors"
											>
												<span className="material-symbols-outlined text-2xl">
													pause
												</span>
											</button>
											<button className="text-white/90 hover:text-white transition-colors">
												<span className="material-symbols-outlined text-2xl">
													volume_up
												</span>
											</button>
											<div className="hidden sm:block text-[10px] font-medium tracking-tighter text-white/60">
												02:45 / 05:00
											</div>
										</div>
										\
										<div className="flex-1 mx-6 h-[2px] bg-white/10 rounded-full relative">
											<div className="absolute top-0 left-0 h-full w-1/2 bg-primary"></div>
										</div>
										<button className="text-white/90 hover:text-white transition-colors">
											<span className="material-symbols-outlined text-2xl">
												fullscreen
											</span>
										</button>
									</div>
								</div>
							)}
							{!isPlaying && (
								<div
									onClick={() => setIsPlaying(true)}
									className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
								>
									<div className="w-16 h-16 rounded-full glass-btn flex items-center justify-center border-white/20">
										<span className="material-symbols-outlined text-white text-3xl ml-1">
											play_arrow
										</span>
									</div>
								</div>
							)}
							{isPlaying && (
								<video
									src="/wolf.mp4"
									autoPlay
									controls
									onEnded={() => setIsPlaying(false)}
									className="absolute inset-0 w-full h-full object-contain rounded-xl bg-black"
								/>
							)}
						</div>
						<div className="mt-8 text-center">
							<h2 className="text-3xl font-light mb-3 tracking-tight text-white/90">
								Experience the Future
							</h2>
							<p className="text-white/40 text-xs font-light tracking-widest uppercase">
								A cinematic journey through our architectural masterpiece
							</p>
						</div>
					</div>
				</section>
				<section className="px-4 pb-40">
					<div className="flex flex-col gap-6 max-w-lg mx-auto">
						<div className="flex items-center justify-between mb-2">
							<h3 className="text-sm font-medium tracking-[0.2em] uppercase text-white/30">
								Campus Hotspots
							</h3>
							<div className="h-[1px] flex-1 bg-white/5 ml-4"></div>
						</div>
						<div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
							<img
								alt="Grand Library"
								className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo_NdvHz8P-NBMpIEWTuorNrrhPfhV6vlhVosdRtpdvy09_CChawSpZAO3ahIJ0kggkFk7rhT1XJpFo4kD4B6-1xQW1rd_OBLd_MhHs_KYg6gzz-vxP9BmgQHCRmQjyHFanmSmDTFfyaYxEZBxSThQXq0T1uigu-kuCTXqg2XBjQ8nDINUeBztzR4kRKXNcb76RsBt2MKDEvQ2_U-cSs2_X2HqoEwbmfUkfqhRA-wZxiNno_1q--Puu9i_zhtz95IX3-2khbpviPU"
							/>
							<div className="absolute inset-0 card-overlay flex flex-col justify-end p-8">
								<span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
									01 — Academic
								</span>
								<h4 className="text-2xl font-light mb-6 tracking-tight">
									Grand Library
								</h4>
								<button className="w-full glass-btn text-white text-xs font-medium py-4 rounded-2xl transition-all flex items-center justify-center gap-3">
									<span className="tracking-widest uppercase">
										Begin Experience
									</span>
									<span className="material-symbols-outlined text-base">
										arrow_forward
									</span>
								</button>
							</div>
						</div>
						<div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
							<img
								alt="Innovation Lab"
								className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1R4ar2r0zTm-kofMh81u5Pgc_vdEsOU9tOJV1J--jEU7p03u3hCILLc-jz3js9JwTWoxqUEqDnwpGEMs83EiU9P5-Jl3cuADqlqJbQZPdDgn7-RHDXhJk8wyFMTE1AZIlJJ_SL3xYzyti4ADrwGlv1xr7F5VT5glftO2yLvAZSKPCXw5w4J40EB04_gKfJKJlVgKJOPINkoxReQYcXb_2UH4XE3AVcPni0DMu0iXXwLpw-8IKZWI0YTlNN_f-hN2LJkJ_Zr-S9yA"
							/>
							<div className="absolute inset-0 card-overlay flex flex-col justify-end p-8">
								<span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
									02 — Technology
								</span>
								<h4 className="text-2xl font-light mb-6 tracking-tight">
									Innovation Lab
								</h4>
								<button className="w-full glass-btn text-white text-xs font-medium py-4 rounded-2xl transition-all flex items-center justify-center gap-3">
									<span className="tracking-widest uppercase">
										Begin Experience
									</span>
									<span className="material-symbols-outlined text-base">
										arrow_forward
									</span>
								</button>
							</div>
						</div>
						<div className="relative aspect-[4/5] rounded-3xl overflow-hidden group">
							<img
								alt="Olympic Sports Center"
								className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXjLpgJYgJwCOOgXEK-5qYAYJBy53zUhf8xL6gRGnmBfMm1IwMIAu7JscyvV-6g6f42Vy2DCoNWZ999cQM1cGEg8N0WNaWdpwH0E_MGmuewbzvkCm6Tb47ChNpEjrL_oS-zE5TvlS0gToKb23px9BhJhoNm0pV2AeW2AHBwCWhtp8o366a77cHevYxc3z7IFgaly85-KfreeaUH_YtfspIY6Y_VfFnyeu-P7jx9AknpjxiDC2qzFY6e6A3kft_3x8XMn-Ba5exp7E"
							/>
							<div className="absolute inset-0 card-overlay flex flex-col justify-end p-8">
								<span className="text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-2">
									03 — Athletics
								</span>
								<h4 className="text-2xl font-light mb-6 tracking-tight">
									Olympic Sports Center
								</h4>
								<button className="w-full glass-btn text-white text-xs font-medium py-4 rounded-2xl transition-all flex items-center justify-center gap-3">
									<span className="tracking-widest uppercase">
										Begin Experience
									</span>
									<span className="material-symbols-outlined text-base">
										arrow_forward
									</span>
								</button>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className="fixed bottom-0 left-0 right-0 z-50 p-6 bg-gradient-to-t from-midnight via-midnight/90 to-transparent">
				<div className="max-w-md mx-auto">
					<button className="w-full bg-primary text-white font-medium py-5 rounded-2xl shadow-[0_15px_30px_rgba(19,127,236,0.3)] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
						<span className="tracking-widest uppercase text-xs font-bold">
							Schedule Private Visit
						</span>
						<span className="material-symbols-outlined font-light">east</span>
					</button>
					<div className="flex justify-center mt-4">
						<div className="w-20 h-1 bg-white/10 rounded-full"></div>
					</div>
				</div>
			</footer>
		</>
	);
}
export default CampusLife;
