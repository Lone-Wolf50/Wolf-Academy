function Intro7() {
	return (
		<>
			<div className="mt-8 mb-6 relative">
				<div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
				<div className="relative size-24 bg-primary/10 border-4 border-primary rounded-full flex items-center justify-center checkmark-glow">
					<span className="material-symbols-outlined text-primary text-6xl font-bold">
						check
					</span>
				</div>
			</div>
			<div className="text-center mb-8">
				<h1 className="text-3xl font-extrabold text-white tracking-tight">
					Registration Complete!
				</h1>
				<p className="text-slate-400 mt-3 px-4 leading-relaxed">
					Your application has been received and is currently being reviewed by
					our admissions team.
				</p>
			</div>
		</>
	);
}

export default Intro7;
