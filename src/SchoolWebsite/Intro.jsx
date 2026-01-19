function Intro() {
	return (
		<>
			<div className="mt-4 mb-8">
				<div className="flex items-center justify-between mb-4 px-1">
					<div className="flex flex-col items-center gap-1.5 flex-1">
						<div className="size-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-[0_0_15px_rgba(19,127,236,0.3)]">
							1
						</div>
						<span className="text-[10px] font-bold text-white uppercase tracking-wider">
							Personal Info
						</span>
					</div>
					<div className="h-[1px] bg-slate-800 flex-1 -mt-5"></div>
					<div className="flex flex-col items-center gap-1.5 flex-1">
						<div className="size-8 rounded-full bg-navy-card border border-slate-700 text-slate-500 flex items-center justify-center text-sm font-bold">
							2
						</div>
						<span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
							Academic
						</span>
					</div>
					<div className="h-[1px] bg-slate-800 flex-1 -mt-5"></div>
					<div className="flex flex-col items-center gap-1.5 flex-1">
						<div className="size-8 rounded-full bg-navy-card border border-slate-700 text-slate-500 flex items-center justify-center text-sm font-bold">
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

export default Intro;
