function Intro5() {
	return (
		<>
			<div className="mt-4 mb-8">
				<div className="flex items-center justify-between mb-4 px-1">
					<div className="flex flex-col items-center gap-1.5 flex-1">
						<div className="size-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-sm">
							<span className="material-symbols-outlined text-lg">check</span>
						</div>
						<span className="text-[10px] font-bold text-primary uppercase tracking-wider">
							Personal
						</span>
					</div>
					<div className="h-[2px] bg-primary flex-1 -mt-5"></div>
					<div className="flex flex-col items-center gap-1.5 flex-1">
						<div className="size-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-sm">
							<span className="material-symbols-outlined text-lg">check</span>
						</div>
						<span className="text-[10px] font-bold text-primary uppercase tracking-wider">
							Academic
						</span>
					</div>
					<div className="h-[2px] bg-primary flex-1 -mt-5"></div>
					<div className="flex flex-col items-center gap-1.5 flex-1">
						<div className="size-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold shadow-lg ring-4 ring-primary/20">
							3
						</div>
						<span className="text-[10px] font-bold text-primary uppercase tracking-wider">
							Documents
						</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default Intro5;
