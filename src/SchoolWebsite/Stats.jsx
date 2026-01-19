function Stats() {
	return (
		<>
			<div className="max-w-screen-xl mx-auto px-4 -mt-10 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl shadow-black/5">
						<div className="flex items-center gap-3">
							<span className="material-symbols-outlined text-primary">
								verified
							</span>
							<p className="text-slate-600 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">
								Graduation Rate
							</p>
						</div>
						<p className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold">
							98%
						</p>
					</div>
					<div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl shadow-black/5">
						<div className="flex items-center gap-3">
							<span className="material-symbols-outlined text-primary">
								groups
							</span>
							<p className="text-slate-600 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">
								Faculty Ratio
							</p>
						</div>
						<p className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold">
							1:12
						</p>
					</div>
					<div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl shadow-black/5">
						<div className="flex items-center gap-3">
							<span className="material-symbols-outlined text-primary">
								star
							</span>
							<p className="text-slate-600 dark:text-slate-400 text-sm font-medium uppercase tracking-wider">
								Extracurriculars
							</p>
						</div>
						<p className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold">
							70+
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Stats;
