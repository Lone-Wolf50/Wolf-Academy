function ProgramGrids() {
	return (
		<>
			<div className="max-w-screen-xl mx-auto">
				<div className="flex justify-between items-end mb-8">
					<div>
						<h2 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">
							Academic Programs
						</h2>
						<p className="text-slate-600 dark:text-slate-400 mt-2">
							Tailored learning paths for every stage.
						</p>
					</div>
					<button className="text-primary font-bold flex items-center gap-1 group">
						View All{" "}
						<span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
							arrow_forward
						</span>
					</button>
				</div>
			</div>
		</>
	);
}

export default ProgramGrids;
