function Footer() {
	return (
		<>
			<div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
				<div className="flex flex-col gap-4">
					<div className="flex items-center gap-2">
						<div className="text-primary flex size-8 shrink-0 items-center justify-center bg-primary/10 rounded-lg">
							<span className="material-symbols-outlined text-xl">school</span>
						</div>
						<h2 className="text-slate-900 dark:text-white text-lg font-bold">
							Wolf Academy
						</h2>
					</div>
					<p className="text-slate-600 dark:text-slate-400 text-sm">
						Nurturing the next generation of global leaders through innovation
						and academic excellence.
					</p>
				</div>
				<div>
					<h4 className="text-slate-900 dark:text-white font-bold mb-4">
						Contact Info
					</h4>
					<ul className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400">
						<li className="flex items-center gap-2">
							<span className="material-symbols-outlined text-sm text-primary">
								location_on
							</span>
							Spintex,Airport View
						</li>
						<li className="flex items-center gap-2">
							<span className="material-symbols-outlined text-sm text-primary">
								call
							</span>
							+233 (0) 209 695 038
						</li>
						<li className="flex items-center gap-2">
							<span className="material-symbols-outlined text-sm text-primary">
								mail
							</span>
							admissions@WolfAcademy.edu
						</li>
					</ul>
				</div>
				<div>
					<h4 className="text-slate-900 dark:text-white font-bold mb-4">
						Newsletter
					</h4>
					<p className="text-slate-600 dark:text-slate-400 text-xs mb-4">
						Stay updated on school news and events.
					</p>
					<div className="flex gap-2">
						<input
							className="flex-1 bg-slate-100 dark:bg-slate-900 border-none rounded-lg text-sm px-3 focus:ring-1 focus:ring-primary outline-none"
							placeholder="Email"
							type="email"
						/>
						<button className="bg-primary text-white p-2 rounded-lg">
							<span className="material-symbols-outlined text-sm">send</span>
						</button>
					</div>
				</div>
			</div>
			<div className="max-w-screen-xl mx-auto mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
				<p>© 2026 Wolf Academy. All rights reserved.</p>
				<div className="flex gap-6">
					<a className="hover:text-primary" href="#">
						Privacy Policy
					</a>
					<a className="hover:text-primary" href="#">
						Terms of Service
					</a>
					<div className="flex gap-4 ml-4">
						<span className="material-symbols-outlined cursor-pointer hover:text-primary">
							public
						</span>
						<span className="material-symbols-outlined cursor-pointer hover:text-primary">
							share
						</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
