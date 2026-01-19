import { useNavigate } from "react-router-dom";

function Intro8() {
    const navigate = useNavigate();
	return (
		<>
			<div className="w-full bg-navy-card rounded-2xl border border-slate-800 p-6 shadow-2xl mb-8">
				<div className="flex flex-col items-center pb-6 border-b border-slate-700/50">
					<span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-1">
						Application ID
					</span>
					<span className="text-lg font-mono font-bold text-primary">
						#HZ-2024-8892
					</span>
				</div>
				<div className="mt-6">
					<h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
						<span className="material-symbols-outlined text-primary text-lg">
							list_alt
						</span>
						Next Steps
					</h3>
					<ul className="space-y-4">
						<li className="flex items-center gap-3">
							<div className="size-6 rounded-full bg-primary/20 border border-primary/30 text-primary flex items-center justify-center text-xs font-bold">
								1
							</div>
							<span className="text-sm text-slate-300 font-medium">
								Email Verification
							</span>
						</li>
						<li className="flex items-center gap-3">
							<div className="size-6 rounded-full bg-slate-800 border border-slate-700 text-slate-500 flex items-center justify-center text-xs font-bold">
								2
							</div>
							<span className="text-sm text-slate-400 font-medium">
								Entrance Interview
							</span>
						</li>
						<li className="flex items-center gap-3">
							<div className="size-6 rounded-full bg-slate-800 border border-slate-700 text-slate-500 flex items-center justify-center text-xs font-bold">
								3
							</div>
							<span className="text-sm text-slate-400 font-medium">
								Fee Payment
							</span>
						</li>
					</ul>
				</div>
			</div>
			<div className="w-full flex flex-col gap-4">
				<button onClick={() => navigate("/Dashboard")} className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 primary-glow">
					Go to Dashboard
					<span className="material-symbols-outlined text-lg">dashboard</span>
				</button>
			</div>
			<div className="mt-12 mb-8 text-center">
				<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-navy-card/50 border border-primary/20 rounded-full">
					<span className="material-symbols-outlined text-sm text-primary">
						lock
					</span>
					<span className="text-[10px] font-bold text-primary uppercase tracking-widest">
						Secure Submission
					</span>
				</div>
				<p className="mt-4 text-[11px] text-slate-500 px-10 leading-relaxed">
					A confirmation email has been sent to your registered address. Please
					check your inbox for more details.
				</p>
			</div>
		</>
	);
}

export default Intro8;
