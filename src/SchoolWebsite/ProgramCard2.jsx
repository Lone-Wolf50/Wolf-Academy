function ProgramCard2() {
	return (
		<>
			<div className="bg-white dark:bg-background-dark rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all">
				<div
					className="h-48 w-full bg-cover bg-center"
					data-alt="Secondary students in a science laboratory"
					style={{
						backgroundImage:
							'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAzjj4Qt1Q9fsAcEZbrzZYsgVc-bBzrtIeoR0KkNA9T6HyMiekvfUvYORLHfQ0EQvn7I6PW4_oKgc2RHlZkPzr5K4PYWNm-cskwmOmxIgOCXvdtoDk59Jb7O4FKRPppYeKc5chZrrQZw1fUVok2zqQciRTgDLw8g6eNZZzP6N5vNnqQFIADlXZ1UB6V9SDM4Iwjw06izn8t-P2jZH4zDkGlfGWHnPyoR85FOt3FrWC3Z-pf99QLG888eccbfMZWE0JDfFbOje141B8")',
					}}
				></div>
				<div className="p-6">
					<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
						Secondary School
					</h3>
					<p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
						A comprehensive curriculum designed to build critical thinking and
						prepare students for advanced studies.
					</p>
					<button className="text-primary font-bold text-sm uppercase tracking-wider">
						Learn More
					</button>
				</div>
			</div>
		</>
	);
}

export default ProgramCard2;
