function HistoryStatus() {
	return (
		<>
			<div className="pt-8">
				<h2 className="text-white text-[22px] font-bold leading-tight tracking-tight mb-4 px-1">
					Helpful Resources
				</h2>
				<div className="grid grid-cols-1 gap-3">
					<div className="flex items-center gap-4 p-4 bg-navy-card rounded-xl border border-white/5 hover:bg-navy-card/80 transition-colors cursor-pointer group">
						<div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
							<span className="material-symbols-outlined text-primary">
								menu_book
							</span>
						</div>
						<div className="flex-1">
							<p className="text-white text-base font-bold">Student Handbook</p>
							<p className="text-slate-muted text-xs">
								Academic policies and rules
							</p>
						</div>
						<span className="material-symbols-outlined text-white/20 group-hover:text-primary transition-colors">
							chevron_right
						</span>
					</div>
					<div className="flex items-center gap-4 p-4 bg-navy-card rounded-xl border border-white/5 hover:bg-navy-card/80 transition-colors cursor-pointer group">
						<div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
							<span className="material-symbols-outlined text-primary">
								map
							</span>
						</div>
						<div className="flex-1">
							<p className="text-white text-base font-bold">Campus Map</p>
							<p className="text-slate-muted text-xs">
								Navigate Horizon Academy
							</p>
						</div>
						<span className="material-symbols-outlined text-white/20 group-hover:text-primary transition-colors">
							chevron_right
						</span>
					</div>
					<div className="flex items-center gap-4 p-4 bg-navy-card rounded-xl border border-white/5 hover:bg-navy-card/80 transition-colors cursor-pointer group">
						<div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
							<span className="material-symbols-outlined text-primary">
								support_agent
							</span>
						</div>
						<div className="flex-1">
							<p className="text-white text-base font-bold">Contact Support</p>
							<p className="text-slate-muted text-xs">
								Get help with your application
							</p>
						</div>
						<span className="material-symbols-outlined text-white/20 group-hover:text-primary transition-colors">
							chevron_right
						</span>
					</div>
				</div>
			</div>
			<nav className="fixed bottom-0 left-0 right-0 bg-background-dark/95 backdrop-blur-xl border-t border-white/5 pb-8 pt-3 z-50">
				<div className="max-w-md mx-auto flex justify-around items-center px-4">
					<div className="flex flex-col items-center gap-1.5 text-primary cursor-pointer">
						<span
							className="material-symbols-outlined"
							style={{ fontVariationSettings: "'FILL' 1" }}
						>
							dashboard
						</span>
						<span className="text-[10px] font-bold">Dashboard</span>
					</div>
					<div className="flex flex-col items-center gap-1.5 text-slate-muted cursor-pointer hover:text-white transition-colors">
						<span className="material-symbols-outlined">analytics</span>
						<span className="text-[10px] font-medium">Status</span>
					</div>
					<div className="flex flex-col items-center gap-1.5 text-slate-muted cursor-pointer hover:text-white transition-colors">
						<span className="material-symbols-outlined">description</span>
						<span className="text-[10px] font-medium">Documents</span>
					</div>
					<div className="flex flex-col items-center gap-1.5 text-slate-muted cursor-pointer hover:text-white transition-colors">
						<span className="material-symbols-outlined">account_circle</span>
						<span className="text-[10px] font-medium">Profile</span>
					</div>
				</div>
			</nav>
		</>
	);
}
export default HistoryStatus;
