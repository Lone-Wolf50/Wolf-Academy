import { useNavigate } from "react-router";
import { useState } from "react";

function Apply2026() {

const DOCUMENTATION_DATA = [
    {
        id: "doc-1",
        icon: "description",
        title: "2-Year Academic Transcripts",
        content: "Official scanned copies of your last two years of secondary education, including marks and final grading scale explanations."
    },
    {
        id: "doc-2",
        icon: "badge",
        title: "Passport or Identity Document",
        content: "A high-resolution color scan of your valid passport bio-data page or government-issued identification card."
    },
    {
        id: "doc-3",
        icon: "history_edu",
        title: "Two Recommendation Letters",
        content: "Confidential letters from academic mentors or professional supervisors highlighting your potential and character."
    },
    {
        id: "doc-4",
        icon: "add_a_photo",
        title: "Color Photograph (Digital)",
        content: "A recent passport-style color photo with a neutral background, minimum 600x600 pixels in JPEG format."
    },
    {
        id: "doc-5",
        icon: "home_pin",
        title: "Proof of Residence",
        content: "Utility bill or residency certificate issued within the last 3 months showing your full name and current address."
    },
    {
        id: "doc-6",
        icon: "article",
        title: "Statement of Purpose",
        content: "A 500-word essay detailing your academic goals, research interests, and why you chose Wolf Academy."
    }
];
// This stores the ID of whichever item is currently open
const [openId, setOpenId] = useState(null);

const toggleAccordion = (id) => {
    // If you click the one that's already open, close it (set to null)
    // Otherwise, open the new one
    setOpenId(openId === id ? null : id);
};

	const navigate = useNavigate();
	return (
		<>
			<nav className="sticky top-0 z-50 w-full bg-background-dark/80 backdrop-blur-md border-b border-white/10">
				<div className="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
					<div className="flex items-center gap-4">
						<button
							onClick={() => navigate("/")}
							className="flex items-center justify-center size-10 rounded-full hover:bg-white/10 transition-colors"
						>
							<span className="material-symbols-outlined text-white">
								arrow_back
							</span>
						</button>
						<div className="flex items-center gap-2">
							<div className="text-primary flex size-8 shrink-0 items-center justify-center bg-primary/10 rounded-lg">
								<span className="material-symbols-outlined text-xl">
									school
								</span>
							</div>
							<h2 className="text-white text-base font-bold tracking-tight">
								Wolf Academy
							</h2>
						</div>
					</div>
					<button className="bg-white/5 text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/10">
						Menu
					</button>
				</div>
			</nav>
			<main className="max-w-screen-xl mx-auto px-5 py-12">
				<header className="text-center mb-20">
					<span className="inline-block px-4 py-1.5 bg-primary/10 border border-primary/20 text-primary text-[10px] font-extrabold tracking-[0.2em] uppercase rounded-full mb-6">
						Admissions Open 2026
					</span>
					<h1 className="text-5xl font-black mb-8 tracking-tighter leading-[1.1] neon-glow">
						JOIN OUR <br />
						<span className="text-primary">2026</span> COHORT
					</h1>
					<p className="text-slate-400 text-base max-w-lg mx-auto leading-relaxed font-light">
						Embark on a journey of excellence. Our elite application process for
						the upcoming academic year is now live for global candidates.
					</p>
					<div className="mt-10 flex flex-col items-center gap-4">
						<div className="glass-card flex items-center gap-6 p-4 rounded-2xl w-full max-w-xs justify-center">
							<div className="flex flex-col items-center border-r border-white/10 pr-6">
								<span className="text-[10px] uppercase text-slate-500 font-bold tracking-widest mb-1">
									Opens
								</span>
								<span className="font-bold text-sm">SEPT 01</span>
							</div>
							<div className="flex flex-col items-center pl-2">
								<span className="text-[10px] uppercase text-slate-500 font-bold tracking-widest mb-1">
									Deadline
								</span>
								<span className="font-bold text-primary text-sm">DEC 15</span>
							</div>
						</div>
					</div>
				</header>
				<section className="mb-24 relative">
					<div className="flex items-center justify-center gap-3 mb-16">
						<h2 className="text-3xl font-black tracking-tight uppercase italic text-white/90">
							The Process
						</h2>
					</div>
					<div className="relative max-w-md mx-auto">
						<div className="absolute left-6 top-4 bottom-4 w-[2px] timeline-track opacity-50"></div>
						<div className="relative pl-16 mb-12 group">
							<div className="absolute left-[21px] top-6 w-1.5 h-1.5 rounded-full bg-primary ring-4 ring-primary/20 z-10"></div>
							<div className="glass-card p-6 rounded-2xl">
								<span className="text-primary text-[10px] font-black tracking-[0.2em] uppercase mb-2 block">
									Phase 01
								</span>
								<h3 className="text-xl font-bold mb-2">Initial Review</h3>
								<p className="text-slate-400 text-sm leading-relaxed font-light">
									Holistic assessment of your digital portfolio and academic
									records.
								</p>
							</div>
						</div>
						<div className="relative pl-16 mb-12">
							<div className="absolute left-[21px] top-6 w-1.5 h-1.5 rounded-full bg-primary ring-4 ring-primary/20 z-10"></div>
							<div className="glass-card p-6 rounded-2xl">
								<span className="text-primary text-[10px] font-black tracking-[0.2em] uppercase mb-2 block">
									Phase 02
								</span>
								<h3 className="text-xl font-bold mb-2">Assessment</h3>
								<p className="text-slate-400 text-sm leading-relaxed font-light">
									Engage in departmental interviews and collaborative aptitude
									evaluations.
								</p>
							</div>
						</div>
						<div className="relative pl-16">
							<div className="absolute left-[21px] top-6 w-1.5 h-1.5 rounded-full bg-primary ring-4 ring-primary/20 z-10"></div>
							<div className="glass-card p-6 rounded-2xl border-primary/20 shadow-lg shadow-primary/5">
								<span className="text-primary text-[10px] font-black tracking-[0.2em] uppercase mb-2 block">
									Phase 03
								</span>
								<h3 className="text-xl font-bold mb-2">Final Decision</h3>
								<p className="text-slate-400 text-sm leading-relaxed font-light">
									Notification of admission and dispatch of official enrollment
									packages.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="mb-24">
    <div className="text-center mb-10">
        <h2 className="text-2xl font-bold tracking-tight mb-2 uppercase">
            Documentation
        </h2>
        <p className="text-slate-500 text-sm">
            Essential items for your digital submission
        </p>
    </div>

    <div className="flex flex-col gap-3 max-w-2xl mx-auto">
        {DOCUMENTATION_DATA.map((doc) => {
            const isOpen = openId === doc.id;

            return (
                <div key={doc.id} className="accordion-item relative overflow-hidden">
                    {/* Input removed as we are using React State now */}
                    
                    <div
                        onClick={() => toggleAccordion(doc.id)}
                        className={`accordion-row relative flex items-center justify-between p-5 bg-navy-card rounded-xl border-l-2 transition-all cursor-pointer hover:bg-white/5 active:scale-[0.99] ${
                            isOpen ? 'border-primary' : 'border-transparent'
                        }`}
                    >
                        <div className="flex items-center gap-4">
                            <span className="material-symbols-outlined text-primary text-xl">
                                {doc.icon}
                            </span>
                            <span className="text-sm font-semibold text-slate-200">
                                {doc.title}
                            </span>
                        </div>
                        {/* Rotating the chevron based on state */}
                        <span className={`material-symbols-outlined chevron transition-transform text-slate-500 ${
                            isOpen ? 'rotate-180' : 'rotate-0'
                        }`}>
                            expand_more
                        </span>
                    </div>

                    {/* Content height controlled by isOpen state */}
                    <div className={`accordion-content overflow-hidden transition-all duration-300 ease-in-out bg-navy-card rounded-b-xl ${
                        isOpen ? 'max-h-40 opacity-100 py-4 px-14' : 'max-h-0 opacity-0 px-14'
                    }`}>
                        <p className="text-sm text-slate-400 font-light leading-relaxed">
                            {doc.content}
                        </p>
                    </div>
                </div>
            );
        })}
    </div>
</section>
				<section className="relative rounded-3xl overflow-hidden min-h-[400px] flex items-center justify-center text-center p-8 border border-white/10">
					<img
						alt="Campus background"
						className="absolute inset-0 w-full h-full object-cover"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuAc5lTZs16wJeZLn90UILw2BBumgMMN1KQJNBAimoum6XguFdcBRD6bVes5-SYTl8aIE_9V0JixvXMGSF-e397gvJ01VI5zwOLY27JbjuXBptZ4nWZDcn4YQ9XE0ePqCjHvcfsfC4xrsHitBUm5QJLuC7bXLP8zf7LczetbzypCanpSx5mDYQxXUcedZXDQQnm9v0GfAePje4jfSVXKSA2wSyHWgggKP4GkOV8A233PRw-AYs0ibFu_D_r8SvZT--XxZGbKIILBFEE"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
					<div className="relative z-10 max-w-lg">
						<h2 className="text-3xl font-black mb-4 tracking-tight">
							Your future awaits.
						</h2>
						<p className="text-slate-300 mb-10 text-base font-light px-4">
							The digital portal for the 2026 academic cycle is now active.
							Secure your position among the elite.
						</p>
						<div className="flex flex-col gap-5 items-center">
							<button className="w-full max-w-[280px] py-4 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/30 active:scale-95 transition-transform">
								Start Digital Application
							</button>
							<a
								className="flex items-center gap-2 text-white/80 text-sm font-semibold tracking-wide hover:text-white transition-colors"
								href="#"
							>
								<span className="material-symbols-outlined text-lg">
									file_download
								</span>
								Full Prospectus PDF
							</a>
						</div>
					</div>
				</section>
			</main>
			<footer className="mt-12 border-t border-white/5 py-16 px-5 bg-black/20">
				<div className="max-w-screen-xl mx-auto flex flex-col items-center gap-10">
					<div className="flex flex-col items-center gap-3">
						<div className="text-primary flex size-10 items-center justify-center bg-primary/10 rounded-xl">
							<span className="material-symbols-outlined text-2xl">school</span>
						</div>
						<h2 className="text-white text-lg font-black tracking-widest uppercase">
							Wolf Academy
						</h2>
					</div>
					<div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] text-slate-500 font-black uppercase tracking-widest">
						<a className="hover:text-primary transition-colors" href="#">
							Privacy
						</a>
						<a className="hover:text-primary transition-colors" href="#">
							Terms
						</a>
						<a className="hover:text-primary transition-colors" href="#">
							Support
						</a>
						<a className="hover:text-primary transition-colors" href="#">
							Portal
						</a>
					</div>
					<p className="text-[10px] text-slate-600 font-medium tracking-widest">
						© 2026 Wolf ACADEMY ADMISSIONS OFFICE
					</p>
				</div>
			</footer>
		</>
	);
}

export default Apply2026;
