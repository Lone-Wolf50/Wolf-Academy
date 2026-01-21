import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Intro6() {
	const navigate = useNavigate();
	const [birthCertificate, setBirthCertificate] = useState("");
	const [reportCard, setReportCard] = useState("");
	const [medicalRecords, setMedicalRecords] = useState("");

	const HandleClick = () => {
		birthCertificate && reportCard && medicalRecords
			? window.Swal.fire({
					position: "center",
					icon: "success",
					title: "Your work has been saved",
					showConfirmButton: false,
					timer: 1500,
				}).then(() => navigate("/Registration-completed"))
			: window.Swal.fire({
					icon: "warning",
					iconColor: "#fb2424",
					title: "Incomplete Form",
					background: "#101922",
					color: "#ffffff",
					text: "Please upload both Birth Certificate and Previous Report Card before continuing.",
				});
	};

	return (
		<>
			<div className="bg-navy-card rounded-2xl shadow-2xl border border-slate-800 p-6">
				<header className="mb-6">
					<h1 className="text-xl font-bold text-white">Upload Documents</h1>
					<p className="text-sm text-slate-400 mt-1">
						Please provide the necessary documents in PDF or JPEG format.
					</p>
				</header>
				<div className="space-y-4">
					{/* Birth Certificate */}
					<div className="space-y-2">
						<div className="flex items-center justify-between px-1">
							<label
								htmlFor="birthCertificate"
								className="text-xs font-semibold text-slate-300 uppercase tracking-wide"
							>
								Birth Certificate
							</label>
							<span className="text-[10px] text-slate-500 font-medium">
								Required
							</span>
						</div>
						<label
							htmlFor="birthCertificate"
							className="upload-dashed rounded-xl p-4 flex flex-col items-center justify-center gap-2 bg-midnight/50 hover:bg-midnight transition-colors group cursor-pointer border-0"
						>
							<span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">
								cloud_upload
							</span>
							<span className="text-xs text-slate-400">Tap to upload file</span>
						</label>
						<input
							id="birthCertificate"
							type="file"
							className="hidden"
							onChange={(e) => setBirthCertificate(e.target.files)}
						/>
					</div>

					{/* Previous Report Card */}
					<div className="space-y-2">
						<div className="flex items-center justify-between px-1">
							<label
								htmlFor="reportCard"
								className="text-xs font-semibold text-slate-300 uppercase tracking-wide"
							>
								Previous Report Card
							</label>
							<span className="text-[10px] text-slate-500 font-medium">
								Required
							</span>
						</div>
						<label
							htmlFor="reportCard"
							className="upload-dashed rounded-xl p-4 flex flex-col items-center justify-center gap-2 bg-midnight/50 hover:bg-midnight transition-colors group cursor-pointer border-0"
						>
							<span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">
								cloud_upload
							</span>
							<span className="text-xs text-slate-400">Tap to upload file</span>
						</label>
						<input
							id="reportCard"
							type="file"
							className="hidden"
							onChange={(e) => setReportCard(e.target.files)}
							/* onChange={...} */
						/>
					</div>

					{/* Medical Records */}
					<div className="space-y-2">
						<div className="flex items-center justify-between px-1">
							<label
								htmlFor="medicalRecords"
								className="text-xs font-semibold text-slate-300 uppercase tracking-wide"
							>
								Medical Records
							</label>
							<span className="text-[10px] text-slate-500 font-medium italic">
								Optional
							</span>
						</div>
						<label
							htmlFor="medicalRecords"
							className="upload-dashed rounded-xl p-4 flex flex-col items-center justify-center gap-2 bg-midnight/50 hover:bg-midnight transition-colors group cursor-pointer border-0"
						>
							<span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">
								cloud_upload
							</span>
							<span className="text-xs text-slate-400">Tap to upload file</span>
						</label>
						<input
							id="medicalRecords"
							type="file"
							className="hidden"
							onChange={(e) => setMedicalRecords(e.target.files)}
							/* onChange={...} */
						/>
					</div>
				</div>

				<div className="mt-6 flex items-start gap-3 p-3 bg-midnight/80 rounded-lg border border-slate-800">
					<span className="material-symbols-outlined text-primary text-sm mt-0.5">
						info
					</span>
					<p className="text-[11px] text-slate-400 leading-relaxed">
						Max file size 5MB per document. Files are encrypted and stored
						securely.
					</p>
				</div>
				<div className="mt-8 flex flex-col gap-4">
					<button
						onClick={HandleClick}
						className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 primary-glow"
					>
						Complete Enrollment
						<span className="material-symbols-outlined text-lg">
							check_circle
						</span>
					</button>
					<button
						onClick={() => navigate("/Academic-Registration")}
						className="w-full bg-transparent text-slate-400 font-semibold py-2 rounded-xl transition-all flex items-center justify-center gap-2 hover:text-white"
					>
						<span className="material-symbols-outlined text-lg">
							arrow_back
						</span>
						Back to Step 2
					</button>
					<p className="text-center text-[11px] text-slate-500 px-8 leading-relaxed">
						By completing this step, you verify that all uploaded documents are
						authentic and valid.
					</p>
				</div>
				<div className="mt-12 mb-8 text-center">
					<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-navy-card border border-primary/30 rounded-full shadow-[0_0_15px_rgba(19,127,236,0.1)]">
						<span className="material-symbols-outlined text-sm text-primary">
							lock
						</span>
						<span className="text-[10px] font-bold text-primary uppercase tracking-widest">
							Secure Submission
						</span>
					</div>
				</div>
			</div>
		</>
	);
}

export default Intro6;
