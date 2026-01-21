import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Intro4() {
	const [previousSchool, setPreviousSchool] = useState("");
	const [interest, setInterest] = useState("");
	const [gpa, setGpa] = useState("");
	const navigate = useNavigate();

	const handleNext = () => {
		previousSchool && gpa
			? window.Swal.fire({
					title: "Do you want to save the changes?",
					showDenyButton: true,
					showCancelButton: true,
					background: "#101922",
					color: "#ffffff",
					confirmButtonText: "Save",
					denyButtonText: `Don't save`,
				}).then((result) => {
					if (result.isConfirmed) {
						window.Swal.fire("Saved!", "", "success");
						navigate("/Document-Registration");
					} else if (result.isDenied) {
						window.Swal.fire("Changes are not saved", "", "info");
					}
				})
			: window.Swal.fire({
					icon: "warning",
					iconColor: "#fb2424",
					title: "Incomplete Form",
					background: "#101922",
					color: "#ffffff",
					text: "Please fill in Previous School, Last Grade Completed, and Final GPA before continuing.",
				});
	};
	const action = (val) => {
		setPreviousSchool(val);
	};

	const validateSchool = () => {
		if (previousSchool.length < 10) {
			window.Swal.fire({
				icon: "warning",
				iconColor: "#fb2424",
				title: "Incomplete Form",
				background: "#101922",
				color: "#ffffff",
				text: "School name must be at least 10 characters long.",
			});
		}
	};

	return (
		<>
			<div className="bg-navy-card rounded-2xl shadow-2xl border border-white/10 p-6">
				<header className="mb-6">
					<h1 className="text-xl font-bold text-white">Academic History</h1>
					<p className="text-sm text-slate-400 mt-1">
						Please provide details about your previous educational background.
					</p>
				</header>
				<form className="space-y-5">
					<div className="space-y-1.5">
						<label
							className="text-sm font-semibold text-slate-300 ml-1"
							htmlFor="previousSchool"
						>
							Previous School Name
						</label>
						<div className="relative">
							<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-xl">
								account_balance
							</span>
							<input
								value={previousSchool}
								onChange={(e) => action(e.target.value)}
								onBlur={validateSchool}
								className="w-full pl-10 pr-4 py-3 bg-midnight border border-white/10 rounded-xl focus:ring-1 focus:ring-primary focus:border-primary transition-all text-black placeholder:text-slate-600"
								id="previousSchool"
								name="previousSchool"
								placeholder="Global International School"
								type="text"
							/>
						</div>
					</div>
					<div className="space-y-1.5">
						<label
							className="text-sm font-semibold text-slate-300 ml-1"
							htmlFor="lastGrade"
						>
							Last Grade Completed
						</label>
						<div className="relative">
							<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-xl">
								grade
							</span>
							<select
								className="w-full pl-10 pr-4 py-3 bg-midnight border border-white/10 rounded-xl focus:ring-1 focus:ring-primary focus:border-primary transition-all text-white appearance-none"
								id="lastGrade"
								name="lastGrade"
							>
								<option value="">Select Grade</option>
								<option value="7">Grade 7</option>
								<option value="8">Grade 8</option>
								<option value="9">Grade 9</option>
								<option value="10">Grade 10</option>
							</select>
						</div>
					</div>
					<div className="space-y-1.5">
						<label
							className="text-sm font-semibold text-slate-300 ml-1"
							htmlFor="gpa"
						>
							Final GPA / Average Score
						</label>
						<div className="relative">
							<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 text-xl">
								analytics
							</span>
							<input
								value={gpa}
								onChange={(e) => {
									const value = e.target.value;
									if (value >= 1.0 && value <= 4.0) {
										setGpa(value);
									} else {
										window.Swal.fire({
											icon: "warning",
											iconColor: "#fb2424",
											title: "Incomplete Form",
											background: "#101922",
											color: "#ffffff",
											text: "GPA must be between 1.0 and 4.0.",
										});
									}
								}}
								className="w-full pl-10 pr-4 py-3 bg-midnight border border-white/10 rounded-xl focus:ring-1 focus:ring-primary focus:border-primary transition-all text-black placeholder:text-slate-600"
								id="gpa"
								name="gpa"
								placeholder="3.8 / 4.0"
								type="text"
							/>
						</div>
					</div>
					<div className="space-y-3 pt-2">
						<label className="text-sm font-semibold text-slate-300 ml-1">
							Academic Interests
						</label>
						<div className="grid grid-cols-2 gap-2">
							{/* Science & Tech */}
							<button
								type="button"
								onClick={() => setInterest("Science & Tech")}
								className={`flex items-center gap-2 py-2.5 px-3 text-xs font-bold rounded-lg transition-all
            ${
							interest === "Science & Tech"
								? "border border-primary bg-primary/10 text-primary"
								: "border border-white/10 bg-midnight text-slate-400 hover:border-slate-600"
						}
          `}
							>
								<span className="material-symbols-outlined text-sm">
									biotech
								</span>
								Science &amp; Tech
							</button>

							{/* Arts & Humanities */}
							<button
								type="button"
								onClick={() => setInterest("Arts & Humanities")}
								className={`flex items-center gap-2 py-2.5 px-3 text-xs font-bold rounded-lg transition-all
            ${
							interest === "Arts & Humanities"
								? "border border-primary bg-primary/10 text-primary"
								: "border border-white/10 bg-midnight text-slate-400 hover:border-slate-600"
						}
          `}
							>
								<span className="material-symbols-outlined text-sm">
									palette
								</span>
								Arts &amp; Humanities
							</button>

							{/* Mathematics */}
							<button
								type="button"
								onClick={() => setInterest("Mathematics")}
								className={`flex items-center gap-2 py-2.5 px-3 text-xs font-bold rounded-lg transition-all
            ${
							interest === "Mathematics"
								? "border border-primary bg-primary/10 text-primary"
								: "border border-white/10 bg-midnight text-slate-400 hover:border-slate-600"
						}
          `}
							>
								<span className="material-symbols-outlined text-sm">
									calculate
								</span>
								Mathematics
							</button>

							{/* Languages */}
							<button
								type="button"
								onClick={() => setInterest("Languages")}
								className={`flex items-center gap-2 py-2.5 px-3 text-xs font-bold rounded-lg transition-all
            ${
							interest === "Languages"
								? "border border-primary bg-primary/10 text-primary"
								: "border border-white/10 bg-midnight text-slate-400 hover:border-slate-600"
						}
          `}
							>
								<span className="material-symbols-outlined text-sm">
									translate
								</span>
								Languages
							</button>
						</div>
					</div>
				</form>
			</div>
			<div className="mt-8 flex flex-col gap-4">
				<button
					onClick={handleNext}
					className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 primary-glow"
				>
					Next Step
					<span className="material-symbols-outlined text-lg">
						arrow_forward
					</span>
				</button>
				<button
					onClick={() => navigate("/Personal-Registration")}
					className="w-full bg-transparent text-slate-400 font-semibold py-2 rounded-xl transition-all flex items-center justify-center gap-2 hover:text-white"
				>
					<span className="material-symbols-outlined text-lg">arrow_back</span>
					Back to Step 1
				</button>
				<p className="text-center text-[11px] text-slate-500 px-8 leading-relaxed">
					Your progress is automatically saved. You can return at any time to
					complete your application.
				</p>
			</div>
			<div className="mt-12 mb-8 text-center">
				<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-navy-card/50 border border-white/5 rounded-full">
					<span className="material-symbols-outlined text-sm text-primary">
						lock
					</span>
					<span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
						Secure AES-256 Encryption
					</span>
				</div>
			</div>
		</>
	);
}

export default Intro4;
