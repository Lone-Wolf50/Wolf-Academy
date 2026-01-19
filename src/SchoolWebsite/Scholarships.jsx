import { useNavigate } from "react-router";

function Scholarships() {
	const navigate = useNavigate();
	return (
		<>
			<div className="sticky top-0 z-50 flex items-center bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm p-4 pb-2 justify-between border-b border-gray-200 dark:border-gray-800">
				<div
					className="text-gray-800 dark:text-white flex size-12 shrink-0 items-center justify-start cursor-pointer"
					onClick={() => navigate("/")}
				>
					<span className="material-symbols-outlined text-[24px]">
						arrow_back_ios
					</span>
				</div>
				<h2 className="text-gray-800 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
					Scholarships
				</h2>
				<div className="flex w-12 items-center justify-end">
					<button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-gray-800 dark:text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
						<span className="material-symbols-outlined">share</span>
					</button>
				</div>
			</div>
			<main className="max-w-md mx-auto min-h-screen pb-24">
				<div className="@container">
					<div className="@[480px]:p-4">
						<div
							className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:rounded-xl items-center justify-center p-6 text-center"
							style={{ backgroundImage: 'linear-gradient(rgba(16, 25, 34, 0.4) 0%, rgba(16, 25, 34, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQhYm6VTzspEEwTIMm2N31zylv_HxbMy85Sm6OmztJD-3R4R_igCzjQbGEx9_jxqTggOWspeXAzI3CKEhk6tdbIMQeiy2dHLCIvAA_LMcRZ8OcuV3K5huPDrIEQLJq-FiW43Kw9KQkJFLxvta6NzH3VxY0T3PnOUpAhgOaPwWGLtQRgixPtQgAzIxYtHM_QwvZ-tnaugyXyZRRzR6cdYUadXkFLeAxBLYbUu9d4thdE_pf2zNWOZVuwGh8nBe_4uMMLbelU34dcRE")' }}
						>
							<div className="flex flex-col gap-3">
								<span className="text-primary text-sm font-bold tracking-widest uppercase">
									Wolf Academy
								</span>
								<h1 className="text-white text-4xl font-black leading-tight tracking-tight @[480px]:text-5xl">
									Investing in Potential
								</h1>
								<p className="text-gray-300 text-base font-normal leading-relaxed max-w-sm mx-auto">
									Empowering the next generation of leaders through merit and
									talent-based financial support.
								</p>
							</div>
							<button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 transition-transform active:scale-95">
								<span className="truncate">Explore Awards</span>
							</button>
						</div>
					</div>
				</div>
				<div className="px-4 pt-8 pb-2">
					<h2 className="text-gray-800 dark:text-white text-2xl font-bold leading-tight tracking-tight">
						Available Scholarships
					</h2>
					<p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
						Discover opportunities tailored to your strengths.
					</p>
				</div>
				<div className="grid grid-cols-1 gap-4 p-4">
					<div className="relative flex flex-col gap-3 p-5 rounded-xl bg-white dark:bg-navy-card border border-gray-100 dark:border-gray-800 shadow-sm transition-all">
						<div className="flex justify-between items-start">
							<div className="bg-primary/10 p-2.5 rounded-lg">
								<span className="material-symbols-outlined text-primary text-2xl">
									school
								</span>
							</div>
							<span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-primary/20">
								Merit
							</span>
						</div>
						<div className="pr-2">
							<h3 className="text-gray-800 dark:text-white text-lg font-bold">
								Academic Excellence
							</h3>
							<p className="text-primary font-semibold text-sm mt-0.5">
								Up to $5,000 | GPA 3.8+
							</p>
							<p className="text-gray-500 dark:text-gray-400 text-xs mt-2 leading-relaxed mb-10">
								For students demonstrating exceptional scholastic achievement
								and a passion for intellectual inquiry.
							</p>
						</div>
						<button className="absolute bottom-4 right-4 flex items-center justify-center gap-1 py-2 px-5 rounded-lg border border-primary text-primary text-sm font-bold transition-all hover:bg-primary hover:text-white active:bg-primary active:text-white active:scale-95">
							Apply{" "}
							<span className="material-symbols-outlined text-base">
								chevron_right
							</span>
						</button>
					</div>
					<div className="relative flex flex-col gap-3 p-5 rounded-xl bg-white dark:bg-navy-card border border-gray-100 dark:border-gray-800 shadow-sm transition-all">
						<div className="flex justify-between items-start">
							<div className="bg-primary/10 p-2.5 rounded-lg">
								<span className="material-symbols-outlined text-primary text-2xl">
									palette
								</span>
							</div>
							<span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-primary/20">
								Talent
							</span>
						</div>
						<div className="pr-2">
							<h3 className="text-gray-800 dark:text-white text-lg font-bold">
								Artistic Achievement
							</h3>
							<p className="text-primary font-semibold text-sm mt-0.5">
								Up to $3,000 | Portfolio
							</p>
							<p className="text-gray-500 dark:text-gray-400 text-xs mt-2 leading-relaxed mb-10">
								Celebrating creative excellence in visual arts, music, dance, or
								theater. Portfolio submission required.
							</p>
						</div>
						<button className="absolute bottom-4 right-4 flex items-center justify-center gap-1 py-2 px-5 rounded-lg border border-primary text-primary text-sm font-bold transition-all hover:bg-primary hover:text-white active:bg-primary active:text-white active:scale-95">
							Apply{" "}
							<span className="material-symbols-outlined text-base">
								chevron_right
							</span>
						</button>
					</div>
					<div className="relative flex flex-col gap-3 p-5 rounded-xl bg-white dark:bg-navy-card border border-gray-100 dark:border-gray-800 shadow-sm transition-all">
						<div className="flex justify-between items-start">
							<div className="bg-primary/10 p-2.5 rounded-lg">
								<span className="material-symbols-outlined text-primary text-2xl">
									biotech
								</span>
							</div>
							<span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-primary/20">
								Project
							</span>
						</div>
						<div className="pr-2">
							<h3 className="text-gray-800 dark:text-white text-lg font-bold">
								STEM Innovation
							</h3>
							<p className="text-primary font-semibold text-sm mt-0.5">
								Up to $4,500 | Project
							</p>
							<p className="text-gray-500 dark:text-gray-400 text-xs mt-2 leading-relaxed mb-10">
								For the next generation of pioneers in technology, science, and
								engineering. Show us your vision.
							</p>
						</div>
						<button className="absolute bottom-4 right-4 flex items-center justify-center gap-1 py-2 px-5 rounded-lg border border-primary text-primary text-sm font-bold transition-all hover:bg-primary hover:text-white active:bg-primary active:text-white active:scale-95">
							Apply{" "}
							<span className="material-symbols-outlined text-base">
								chevron_right
							</span>
						</button>
					</div>
					<div className="relative flex flex-col gap-3 p-5 rounded-xl bg-white dark:bg-navy-card border border-gray-100 dark:border-gray-800 shadow-sm transition-all">
						<div className="flex justify-between items-start">
							<div className="bg-primary/10 p-2.5 rounded-lg">
								<span className="material-symbols-outlined text-primary text-2xl">
									groups
								</span>
							</div>
							<span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider border border-primary/20">
								Service
							</span>
						</div>
						<div className="pr-2">
							<h3 className="text-gray-800 dark:text-white text-lg font-bold">
								Community Leadership
							</h3>
							<p className="text-primary font-semibold text-sm mt-0.5">
								Full Tuition | Service History
							</p>
							<p className="text-gray-500 dark:text-gray-400 text-xs mt-2 leading-relaxed mb-10">
								Awarded to students who have made a significant, positive impact
								through community service and activism.
							</p>
						</div>
						<button className="absolute bottom-4 right-4 flex items-center justify-center gap-1 py-2 px-5 rounded-lg border border-primary text-primary text-sm font-bold transition-all hover:bg-primary hover:text-white active:bg-primary active:text-white active:scale-95">
							Apply{" "}
							<span className="material-symbols-outlined text-base">
								chevron_right
							</span>
						</button>
					</div>
				</div>
				<div className="px-4 pt-10 pb-2">
					<h2 className="text-gray-800 dark:text-white text-2xl font-bold leading-tight tracking-tight">
						How to Apply
					</h2>
					<p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
						Follow these steps for the 2024 cycle.
					</p>
				</div>
				<div className="p-6">
					<div className="relative flex flex-col gap-8 border-l-2 border-primary/30 ml-3 pl-8">
						<div className="relative">
							<div className="absolute -left-[43px] mt-1 bg-primary rounded-full w-5 h-5 border-4 border-background-light dark:border-background-dark"></div>
							<div>
								<p className="text-primary text-xs font-bold uppercase tracking-widest">
									Step 1 — September
								</p>
								<h4 className="text-gray-800 dark:text-white font-bold text-lg">
									Initial Research
								</h4>
								<p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
									Identify which scholarships align with your background and
									achievements.
								</p>
							</div>
						</div>
						<div className="relative">
							<div className="absolute -left-[43px] mt-1 bg-primary rounded-full w-5 h-5 border-4 border-background-light dark:border-background-dark"></div>
							<div>
								<p className="text-primary text-xs font-bold uppercase tracking-widest">
									Step 2 — Oct to Nov
								</p>
								<h4 className="text-gray-800 dark:text-white font-bold text-lg">
									Submission Phase
								</h4>
								<p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
									Upload your transcripts, portfolio, and personal statements
									via the portal.
								</p>
							</div>
						</div>
						<div className="relative">
							<div className="absolute -left-[43px] mt-1 bg-primary/30 rounded-full w-5 h-5 border-4 border-background-light dark:border-background-dark"></div>
							<div>
								<p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
									Step 3 — December
								</p>
								<h4 className="text-gray-800 dark:text-white font-bold text-lg">
									Committee Review
								</h4>
								<p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
									Applications are screened by our faculty and external academic
									partners.
								</p>
							</div>
						</div>
						<div className="relative">
							<div className="absolute -left-[43px] mt-1 bg-primary/30 rounded-full w-5 h-5 border-4 border-background-light dark:border-background-dark"></div>
							<div>
								<p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
									Step 4 — January
								</p>
								<h4 className="text-gray-800 dark:text-white font-bold text-lg">
									Final Results
								</h4>
								<p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
									Award recipients are notified and official ceremonies are
									scheduled.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="p-4 mt-4">
					<div className="bg-primary/5 dark:bg-primary/10 rounded-xl p-6 border border-primary/20 flex flex-col items-center text-center gap-4">
						<span className="material-symbols-outlined text-primary text-5xl">
							picture_as_pdf
						</span>
						<div>
							<h3 className="text-gray-800 dark:text-white text-lg font-bold">
								Need a physical copy?
							</h3>
							<p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
								Download the full guide and offline application form.
							</p>
						</div>
						<button className="w-full flex items-center justify-center gap-2 rounded-xl h-12 bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 transition-transform active:scale-95">
							<span className="material-symbols-outlined">download</span>
							<span>Download Application (PDF)</span>
						</button>
					</div>
				</div>
			</main>
		</>
	);
}

export default Scholarships;
