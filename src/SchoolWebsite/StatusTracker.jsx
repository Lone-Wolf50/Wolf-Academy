function StatusTracker() {
	return (
		<>
			<h2 className="text-white text-[22px] font-bold leading-tight tracking-tight mb-4 px-1">
				Status Tracker
			</h2>
			<div className="p-5 rounded-2xl bg-navy-card border border-white/5 shadow-xl">
				<div className="flex gap-2 w-full h-2.5 mb-4">
					<div className="flex-1 rounded-full status-segment-active"></div>
					<div className="flex-1 rounded-full status-segment-active"></div>
					<div className="flex-1 rounded-full status-segment-pending"></div>
					<div className="flex-1 rounded-full status-segment-pending"></div>
				</div>
				<div className="flex justify-between w-full px-1">
					<div className="flex flex-col items-center">
						<span className="text-[9px] font-bold text-primary uppercase tracking-wider">
							Applied
						</span>
					</div>
					<div className="flex flex-col items-center">
						<span className="text-[9px] font-bold text-primary uppercase tracking-wider">
							Review
						</span>
					</div>
					<div className="flex flex-col items-center">
						<span className="text-[9px] font-bold text-slate-muted uppercase tracking-wider">
							Interview
						</span>
					</div>
					<div className="flex flex-col items-center">
						<span className="text-[9px] font-bold text-slate-muted uppercase tracking-wider">
							Decision
						</span>
					</div>
				</div>
			</div>
			<div className="mt-4 bg-navy-card rounded-2xl p-5 border border-white/5 shadow-lg">
				<div className="flex items-start gap-4">
					<div className="mt-0.5 size-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
						<span className="material-symbols-outlined text-primary text-2xl">
							info
						</span>
					</div>
					<div>
						<p className="text-white text-base font-bold mb-1">Under Review</p>
						<p className="text-slate-muted text-xs font-normal leading-relaxed">
							Our admissions committee is currently reviewing your application
							documents for the 2024 academic cycle. We'll notify you of any
							updates.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default StatusTracker;
