import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Intro2({ fullName, setFullName }) {
	const [dob, setDob] = useState("");
	const [email, setEmail] = useState("");
	const [interest, setInterest] = useState("Choice");
	const navigate = useNavigate();

	const handleNext = () => {
		fullName && dob && email
			? window.Swal.fire({
					title: "Do you want to save the changes?",
					showDenyButton: true,
					background: "#101922",
					color: "#ffffff",
					showCancelButton: true,
					confirmButtonText: "Save",
					denyButtonText: `Don't save`,
				}).then((result) => {
					if (result.isConfirmed) {
						window.Swal.fire("Saved!", "", "success");
						navigate("/Academic-Registration");
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
					text: "Please fill in Full Name, Date of Birth, and Email before continuing.",
				});

	};


	return (
		<>
			

			<header className="mb-6">
				<h1 className="text-xl font-bold text-white">Student Information</h1>
				<p className="text-sm text-slate-300 mt-1">
					Please provide the student's basic details to begin the enrollment
					process.
				</p>
			</header>
			<form className="space-y-5">
				<div className="space-y-1.5">
					<label
						className="text-sm font-semibold text-slate-200 ml-1"
						htmlFor="fullName"
					>
						Student Full Name
					</label>
					<div className="relative">
						<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
							person
						</span>
						<input
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
							className="w-full pl-10 pr-4 py-3 bg-midnight border border-slate-700/50 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-black placeholder:text-slate-500"
							id="fullName"
							name="fullName"
							placeholder="Johnathan Doe"
							type="text"
						/>
					</div>
				</div>
				<div className="space-y-1.5">
					<label
						className="text-sm font-semibold text-slate-200 ml-1"
						htmlFor="dob"
					>
						Date of Birth
					</label>
					<div className="relative">
						<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
							calendar_today
						</span>
						<input
							value={dob}
							onChange={(e) => setDob(e.target.value)}
							className="w-full pl-10 pr-4 py-3 bg-midnight border border-slate-700/50 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-white"
							id="dob"
							name="dob"
							type="date"
						/>
					</div>
				</div>
				<div className="space-y-1.5">
					<label
						className="text-sm font-semibold text-slate-200 ml-1"
						htmlFor="parentEmail"
					>
						Parent/Guardian Email
					</label>
					<div className="relative">
						<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">
							mail
						</span>
						<input
							value={email}
							onChange={(e) => {
								const value = e.target.value;
								if (value.includes("@gmail.com")) {
									setEmail(value);
								} else {
									window.Swal.fire({
										icon: "warning",
										iconColor: "#fb2424",
										title: "Invalid Email",
										background: "#101922",
										color: "#ffffff",
										text: "Please enter a valid Gmail address.",
									});
								}
							}}
							className="w-full pl-10 pr-4 py-3 bg-midnight border border-slate-700/50 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-white placeholder:text-slate-500"
							id="parentEmail"
							name="parentEmail"
							placeholder="parent@example.com"
							type="email"
						/>
					</div>
				</div>
				<div className="space-y-1.5 pt-2">
					<label className="text-sm font-semibold text-slate-200 ml-1">
						Applying htmlFor Grade
					</label>
					<div className="grid grid-cols-3 gap-2">
						<button
							onClick={() => setInterest("Primary")}
							className={`py-2.5 px-3 text-xs font-bold rounded-lg transition-colors ${
								interest === "Primary"
									? "border border-primary bg-primary text-white"
									: "border border-slate-700 bg-midnight text-slate-400 hover:border-slate-500"
							}`}
							type="button"
						>
							Primary
						</button>
						<button
							onClick={() => setInterest("Secondary")}
							className={`py-2.5 px-3 text-xs font-bold rounded-lg transition-colors ${
								interest === "Secondary"
									? "border border-primary bg-primary text-white"
									: "border border-slate-700 bg-midnight text-slate-400 hover:border-slate-500"
							}`}
							type="button"
						>
							Secondary
						</button>
						<button
							onClick={() => setInterest("Higher Ed")}
							className={`py-2.5 px-3 text-xs font-bold rounded-lg transition-colors ${
								interest === "Higher Ed"
									? "border border-primary bg-primary text-white"
									: "border border-slate-700 bg-midnight text-slate-400 hover:border-slate-500"
							}`}
							type="button"
						>
							Higher Ed
						</button>
					</div>
				</div>
			</form>
			<div className="mt-8 flex flex-col gap-4">
				<button
					onClick={handleNext}
					className="w-full bg-primary hover:bg-[#1171d1] text-white font-bold py-4 rounded-xl shadow-2xl shadow-primary/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
				>
					Next Step
					<span className="material-symbols-outlined text-lg">
						arrow_forward
					</span>
				</button>

				<button
					onClick={() => navigate("/")}
					className="w-full bg-transparent text-slate-400 font-semibold py-2 rounded-xl transition-all flex items-center justify-center gap-2 hover:text-white"
				>
					<span className="material-symbols-outlined text-lg">arrow_back</span>
					Back to Home
				</button>
				<p className="text-center text-[11px] text-slate-400 px-8 leading-relaxed">
					Your progress is automatically saved. You can return at any time to
					complete your application.
				</p>
			</div>
			<div className="mt-12 mb-8 text-center">
				<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-navy-card/50 border border-slate-700/50 rounded-full">
					<span className="material-symbols-outlined text-sm text-primary">
						lock
					</span>
					<span className="text-[10px] font-bold text-slate-200 uppercase tracking-widest">
						Secure Submission
					</span>
				</div>
			</div>
		</>
	);
}

export default Intro2;
