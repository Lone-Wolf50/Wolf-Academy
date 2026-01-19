import { useState } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

function NavBar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const navigate = useNavigate();

	return (
		<>
			<nav className="sticky top-0 z-50 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
				<div className="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
					<div className="flex items-center gap-2">
						<div className="text-primary flex size-10 shrink-0 items-center justify-center bg-primary/10 rounded-lg">
							<span className="material-symbols-outlined text-2xl">school</span>
						</div>
						<h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">
							Wolf Academy
						</h2>
					</div>

					<ul
						className={`absolute md:static top-full left-0 w-full md:w-auto bg-background-light dark:bg-background-dark md:bg-transparent flex flex-col md:flex-row gap-4 p-4 md:p-0 text-sm text-slate-600 dark:text-slate-400 transition-all duration-300 ${
							menuOpen ? "block" : "hidden"
						} md:flex`}
					>
						<li>
							<a onClick={() => navigate("/Admissions")} className="hover:text-primary" href="">
								 Admission
							</a>
						</li>

						<li>
							<a onClick={() => navigate("/Departments")} className="hover:text-primary" href="">
								Departments
							</a>
						</li>
						<li>
							<a onClick={() => navigate("/Scholarships")} className="hover:text-primary">
								Scholarships
							</a>
						</li>
						<li>
							<a onClick={() => navigate("/Campus-Life")} className="hover:text-primary">
								Campus Life
							</a>
						</li>
					</ul>

					<button
						className="md:hidden text-slate-700 dark:text-slate-300"
						onClick={() => setMenuOpen(!menuOpen)}
						aria-label="Toggle menu"
					>
						<span className="material-symbols-outlined text-3xl">menu</span>
					</button>

					<div className="flex items-center gap-4">
						<button className="hidden md:block text-slate-600 dark:text-slate-400 font-medium hover:text-primary transition-colors">
							Programs
						</button>
						<button className="bg-primary text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/20">
							<Link to="/Personal-Registration" className="text-white">
								Enroll Now
							</Link>
						</button>
					</div>
				</div>
			</nav>
		</>
	);
}

export default NavBar;
