function Intro3() {
	return (
		<>
			<div className="mt-4 mb-8">
				<div className="flex items-center justify-between mb-4 px-1">
					<div className="flex flex-col items-center gap-1.5 flex-1">
						<div className="size-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-lg">
							<span className="material-symbols-outlined text-base">check</span>
						</div>
						<span className="text-[10px] font-bold text-primary uppercase tracking-wider">
							Personal
						</span>
					</div>
					<div className="h-[2px] bg-primary flex-1 -mt-5"></div>
					<div className="flex flex-col items-center gap-1.5 flex-1">
						<div className="size-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-lg ring-4 ring-primary/20">
							2
						</div>
						<span className="text-[10px] font-bold text-white uppercase tracking-wider">
							Academic
						</span>
					</div>
					<div className="h-[2px] bg-white/10 flex-1 -mt-5"></div>
					<div className="flex flex-col items-center gap-1.5 flex-1">
						<div className="size-8 rounded-full bg-navy-card border border-white/10 text-slate-500 flex items-center justify-center text-sm font-bold">
							3
						</div>
						<span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
							Documents
						</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default Intro3;
