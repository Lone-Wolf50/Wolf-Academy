import { useNavigate } from "react-router";

function Admission() {
	const navigate = useNavigate();
	return (
		<>
			<nav className="sticky top-0 z-50 flex items-center bg-midnight/80 backdrop-blur-md px-4 py-4 justify-between border-b border-white/5">
				<div onClick={() => navigate("/")} className="text-white flex size-10 shrink-0 items-center justify-center cursor-pointer">
					<span className="material-symbols-outlined">arrow_back_ios</span>
				</div>
				<div className="flex items-center gap-2">
					<div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_#137fec]"></div>
					<h2 className="text-white text-sm font-bold tracking-[0.1em] uppercase">
						Wolf Academy
					</h2>
				</div>
				<div className="flex w-10 items-center justify-end">
					<button className="text-white">
						<span className="material-symbols-outlined">more_horiz</span>
					</button>
				</div>
			</nav>
			<main className="pb-12">
				<div className="relative px-4 pt-10 pb-16 overflow-hidden">
					<div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10"></div>
					<div className="relative z-10">
						<span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
							Admissions 2024
						</span>
						<h1 className="text-white text-4xl font-extrabold leading-[1.1] tracking-tight glow-text mb-6">
							The Path to <br />
							Excellence <br />
							<span className="text-primary/90">Starts Here</span>
						</h1>
						<p className="text-gray-400 text-base leading-relaxed max-w-[280px]">
							Join a community dedicated to shaping the leaders of tomorrow
							through rigorous academics and character.
						</p>
					</div>
				</div>
				<section className="px-4 mb-14">
					<h2 className="text-white text-xl font-bold mb-4 px-1">
						Tuition &amp; Fees
					</h2>
					<div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
						<div className="overflow-x-auto">
							<table className="w-full text-left border-collapse">
								<thead>
									<tr className="bg-primary/20 border-b border-primary/40">
										<th className="py-5 px-5 text-primary text-[10px] font-black uppercase tracking-widest">
											Grade Level
										</th>
										<th className="py-5 px-5 text-primary text-[10px] font-black uppercase tracking-widest">
											Annual Fees
										</th>
										<th className="py-5 px-5 text-primary text-[10px] font-black uppercase tracking-widest">
											Entry Fees
										</th>
									</tr>
								</thead>
								<tbody className="bg-dark-navy/40">
									<tr className="border-b border-white/5">
										<td className="py-5 px-5 text-sm font-medium text-white">
											Primary
										</td>
										<td className="py-5 px-5 text-sm text-gray-200 font-bold">
											$5,000
										</td>
										<td className="py-5 px-5 text-sm text-gray-400 font-medium">
											$500
										</td>
									</tr>
									<tr className="border-b border-white/5">
										<td className="py-5 px-5 text-sm font-medium text-white">
											Secondary
										</td>
										<td className="py-5 px-5 text-sm text-gray-200 font-bold">
											$7,500
										</td>
										<td className="py-5 px-5 text-sm text-gray-400 font-medium">
											$750
										</td>
									</tr>
									<tr>
										<td className="py-5 px-5 text-sm font-medium text-white">
											Higher Ed
										</td>
										<td className="py-5 px-5 text-sm text-gray-200 font-bold">
											$10,000
										</td>
										<td className="py-5 px-5 text-sm text-gray-400 font-medium">
											$1,000
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<p className="mt-3 px-2 text-[10px] text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
						<span className="material-symbols-outlined text-[12px]">info</span>
						Prices listed in USD per academic year
					</p>
				</section>
				<section className="px-4 mb-14">
					<div className="flex justify-between items-end mb-6 px-1">
						<div>
							<h2 className="text-white text-xl font-bold">Scholarships</h2>
							<p className="text-gray-500 text-xs mt-1">
								Interactive Bento Grid Explorer
							</p>
						</div>
					</div>
					<div className="grid grid-cols-2 grid-rows-2 gap-4 h-[440px]">
						<div className="col-span-2 row-span-1 bento-gradient-1 rounded-[2rem] p-6 relative overflow-hidden group border border-white/10 active:scale-[0.98] transition-transform">
							<span className="material-symbols-outlined absolute -right-6 -bottom-6 text-[160px] text-white/10 rotate-12 select-none transition-transform group-hover:scale-110">
								workspace_premium
							</span>
							<div className="relative z-10 flex flex-col h-full justify-between">
								<div>
									<span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 inline-block">
										100% Grant
									</span>
									<h3 className="text-3xl font-black leading-tight mb-2">
										Global <br />
										Leadership
									</h3>
								</div>
								<div className="flex items-center justify-between">
									<p className="text-white/80 text-sm font-medium">
										Merit Excellence
									</p>
									<button className="opacity-0 group-hover:opacity-100 group-active:opacity-100 bg-white text-primary text-xs font-bold px-8 py-3 rounded-full transition-all transform translate-y-4 group-hover:translate-y-0 shadow-2xl">
										Apply Now
									</button>
								</div>
							</div>
						</div>
						<div className="col-span-1 row-span-1 bento-gradient-2 rounded-[2rem] p-5 relative overflow-hidden group border border-white/10 active:scale-[0.98] transition-transform">
							<span className="material-symbols-outlined absolute -right-4 -top-4 text-8xl text-white/5 select-none -rotate-12 group-hover:rotate-0 transition-transform">
								military_tech
							</span>
							<div className="relative z-10 flex flex-col h-full justify-between">
								<h3 className="text-lg font-bold leading-tight">
									Academic
									<br />
									Distinction
								</h3>
								<div className="flex flex-col gap-3 items-start">
									<p className="text-white/70 text-[10px] uppercase font-bold tracking-wider">
										Up to 50% Off
									</p>
									<button className="opacity-0 group-hover:opacity-100 group-active:opacity-100 bg-white text-primary text-[10px] font-bold px-4 py-2 rounded-full transition-all shadow-lg">
										Apply
									</button>
								</div>
							</div>
						</div>
						<div className="col-span-1 row-span-1 bento-gradient-3 rounded-[2rem] p-5 relative overflow-hidden group border border-white/10 active:scale-[0.98] transition-transform">
							<span className="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl text-white/5 select-none group-hover:scale-125 transition-transform">
								public
							</span>
							<div className="relative z-10 flex flex-col h-full justify-between">
								<h3 className="text-lg font-bold leading-tight">
									Diversity
									<br />
									Initiative
								</h3>
								<div className="flex flex-col gap-3 items-start">
									<p className="text-white/70 text-[10px] uppercase font-bold tracking-wider">
										Social Impact
									</p>
									<button className="opacity-0 group-hover:opacity-100 group-active:opacity-100 bg-white text-primary text-[10px] font-bold px-4 py-2 rounded-full transition-all shadow-lg">
										Apply
									</button>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="px-4 mb-14">
					<h2 className="text-white text-xl font-bold mb-8 px-1">
						Admission Policy
					</h2>
					<div className="relative pl-10 space-y-6">
						<div className="absolute left-[19px] top-2 bottom-2 w-0.5 policy-track rounded-full"></div>
						<div className="relative">
							<div className="absolute -left-[35px] top-2 size-8 rounded-full bg-midnight border-2 border-primary flex items-center justify-center shadow-[0_0_15px_#137fec] z-10">
								<span className="text-primary text-xs font-black">01</span>
							</div>
							<div className="glass-card neo-glow-card rounded-2xl p-5 border border-primary/20 transition-all hover:bg-white/5">
								<h4 className="text-white font-bold text-base mb-1">
									Merit-Based Entry
								</h4>
								<p className="text-gray-400 text-xs leading-relaxed">
									Focusing on academic excellence and future leadership
									potential.
								</p>
							</div>
						</div>
						<div className="relative">
							<div className="absolute -left-[35px] top-2 size-8 rounded-full bg-midnight border-2 border-primary flex items-center justify-center shadow-[0_0_15px_#137fec] z-10">
								<span className="text-primary text-xs font-black">02</span>
							</div>
							<div className="glass-card neo-glow-card rounded-2xl p-5 border border-primary/20 transition-all hover:bg-white/5">
								<h4 className="text-white font-bold text-base mb-1">
									Inclusivity First
								</h4>
								<p className="text-gray-400 text-xs leading-relaxed">
									Welcoming diverse backgrounds to foster a rich global
									perspective.
								</p>
							</div>
						</div>
						<div className="relative">
							<div className="absolute -left-[35px] top-2 size-8 rounded-full bg-midnight border-2 border-primary flex items-center justify-center shadow-[0_0_15px_#137fec] z-10">
								<span className="text-primary text-xs font-black">03</span>
							</div>
							<div className="glass-card neo-glow-card rounded-2xl p-5 border border-primary/20 transition-all hover:bg-white/5">
								<h4 className="text-white font-bold text-base mb-1">
									Late Applications
								</h4>
								<p className="text-gray-400 text-xs leading-relaxed">
									Subject to availability with specific supplemental processing
									guidelines.
								</p>
							</div>
						</div>
					</div>
					<a
						className="mt-8 mx-auto w-fit flex items-center gap-2 text-primary font-bold text-sm bg-primary/10 px-6 py-4 rounded-full border border-primary/20 hover:bg-primary/20 transition-all"
						href="#"
					>
						Detailed Documentation
						<span className="material-symbols-outlined text-sm">open_in_new</span>
					</a>
				</section>
				<section className="px-4">
					<h2 className="text-white text-xl font-bold mb-8 px-1">
						Admission Timeline
					</h2>
					<div className="relative pl-8 space-y-10">
						<div className="absolute left-[11px] top-2 bottom-2 w-[2px] timeline-line rounded-full"></div>
						<div className="relative">
							<div className="absolute -left-[27px] top-1.5 size-[12px] rounded-full bg-primary shadow-[0_0_12px_#137fec] border-2 border-midnight"></div>
							<div>
								<p className="text-primary text-[10px] font-bold uppercase tracking-wider mb-1">
									Step 01
								</p>
								<p className="text-white font-bold mb-1">Online Inquiry</p>
								<p className="text-gray-500 text-xs">
									Submit initial interest form for the academic year.
								</p>
							</div>
						</div>
						<div className="relative">
							<div className="absolute -left-[27px] top-1.5 size-[12px] rounded-full bg-primary shadow-[0_0_12px_#137fec] border-2 border-midnight"></div>
							<div>
								<p className="text-primary text-[10px] font-bold uppercase tracking-wider mb-1">
									Step 02
								</p>
								<p className="text-white font-bold mb-1">
									Campus Tour &amp; Interview
								</p>
								<p className="text-gray-500 text-xs">
									Schedule a private tour and meet with our admissions dean.
								</p>
							</div>
						</div>
						<div className="relative">
							<div className="absolute -left-[27px] top-1.5 size-[12px] rounded-full bg-white/20 border-2 border-midnight"></div>
							<div>
								<p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-1">
									Step 03
								</p>
								<p className="text-gray-400 font-bold mb-1">Entrance Assessment</p>
								<p className="text-gray-600 text-xs">
									Comprehensive evaluation of potential and aptitude.
								</p>
							</div>
						</div>
					</div>
					<div className="mt-8 mb-12">
						<button onClick={() => navigate("/Personal-Registration")} className="w-full bg-primary hover:bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-[0_8px_30px_rgba(19,127,236,0.5)] transition-all active:scale-[0.98] flex items-center justify-center gap-2 border border-white/10">
							Start Application
							<span className="material-symbols-outlined">rocket_launch</span>
						</button>
					</div>
				</section>
			</main>
			<div className="h-[48px] safe-area-bottom"></div>
		</>
	);
}

export default Admission;
