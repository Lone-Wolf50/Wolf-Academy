import { useNavigate } from "react-router";
import { useState } from "react";
import BussinessPic from "../assets/Business.jpg";
import MathPic from "../assets/Maths.jpg";

// 1. Data Array - This keeps your UI logic separate from your content
const departmentData = [
	{
		title: "Science & Tech",
		icon: "precision_manufacturing",
		img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpEmw4inW2XE-a1IfyN4HQghzRB_Vv7cPl8Oc3gMTRxEtCnPhh684sA9el8hq0F2dgUFXGeYIUCii6nVrb33T7r-VLDYlvpZaVNzPQoHBf2rzrPh_RywrJg48U3ZRBfWy6htX-00DExYjoxupN9wu6INZPDxdfiqymSXnIuQ9dkewYbvRWCICTV_j3VJ7UuseMGIolINmSb__dZaww8_wfmw3nzACo49qgok9dn224Wd_h5QFgmveI3PXzEQdZmZMdldMVnlBeIxQ",
		quote:
			"Fostering innovation through hands-on inquiry and digital literacy.",
	},
	{
		title: "Humanities",
		icon: "auto_stories",
		img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCifdjlQn3iFQZ8hsbdGg9z0UfR1Z86hLpLsYwvq6ExDXCwXYwFZqevhjVg-Ac0oY_xG5b0y5E819SfMsBaP4kHqPM5s0O-WRUPjIvfa0ZVnul4c2jtT4xvvVlX3g3D_SIHw0NoYd_bKFft7_YUKG5e-bnYHB4ZmK8YU4oDypJI3xH74KBoOX1fCzL8WH6GkAVdeQ-_1_l5saH-7aQjqZ7Z9UEkql4AQ7NM1MmZp2NcZ0cgg_nL6Gas-onftW97Jv0BKM3oetfRsIE",
		quote:
			"Cultivating critical thinking and a deep understanding of human culture.",
	},
	{
		title: "Performing Arts",
		icon: "theater_comedy",
		img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-XorZrRjJ5HzpnnhO9UeV_Ha3vfGmFoKrPa4Tte2Bj3uaWXENneMLtp1WO_GhknZ0I9GO-CydGJrz0FGAWgRanukNJ64yOZvZYQc0aukX9qcWQ4PvS-9txBzf6PoessP7ygnOQkmk4HUSjGijEggtCfW__JeJobxdNwqtVBLrwrRmJ4oM_x5yKCskpE6yztgiIe_TfLWv71tqdwnj7x-2xQPT_v72h0E3jLVe12dh6Uzt7-LTIcUBHET0euH1zIWa68YFcgY1AKg",
		quote:
			"Empowering students to express their creativity through performance.",
	},
	{
		title: "Business & Entrepreneurship",
		icon: "corporate_fare",
		img: BussinessPic,
		quote:
			"Shaping future leaders with practical business acumen and ethical strategy.",
	},
	{
		title: "Mathematics & Logic",
		icon: "category",
		img: MathPic,
		quote:
			"Mastering the universal language of patterns, structures, and analysis.",
	},
	{
		title: "Athletics & PE",
		icon: "fitness_center",
		img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdEj9iJsCTlCrt7YoricW3XabxZtrm-JNKMdLhM7W9oabX7Fwd__uqqlYFsfYIhlRiL0V7DvpImgRtT7NyRDZW3kGYTS9pGsOlWbGicmbqsR88lvqZO2gtN9f0w_FB6lct73Q9ZJx94wwQeQhput6JhtB8XDA0fAjGA5Rq-lhPH2tOI4EwPC_rkOoK_POks8IJU75XT4HFzeKWl0kou6Fhp3hGcTS2-DrOvNEUCP2LucKJJqFS-_MS1WtBsqC1JTK0cmV1BENl5zE",
		quote: "Developing lifelong wellness habits and teamwork through sport.",
	},
];

function Departments() {
	const navigate = useNavigate();
	const [searchTerm, setSearchTerm] = useState("");

	// 2. Logic to filter departments based on search input
	const filteredDepts = departmentData.filter((dept) =>
		dept.title.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	return (
		<div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
			{/* Header */}
			<div className="sticky top-0 z-50 flex items-center bg-background-dark/80 backdrop-blur-md p-4 pb-2 justify-between border-b border-slate-800">
				<div
					onClick={() => navigate("/")}
					className="text-white flex size-12 shrink-0 items-center justify-start cursor-pointer"
				>
					<span
						className="material-symbols-outlined"
						style={{ fontSize: "28px" }}
					>
						chevron_left
					</span>
				</div>
				<h2 className="text-white text-lg font-bold leading-tight tracking-tight flex-1 text-center font-display">
					Academic Directory
				</h2>
				<div className="flex w-12 items-center justify-end">
					<button className="flex cursor-pointer items-center justify-center rounded-lg h-12 bg-transparent text-primary">
						<span
							className="material-symbols-outlined"
							style={{ fontSize: "24px" }}
						>
							more_horiz
						</span>
					</button>
				</div>
			</div>

			{/* Title Section */}
			<div className="px-4 pt-6">
				<h1 className="text-white tracking-tight text-3xl font-bold leading-tight font-display">
					Departments
				</h1>
				<p className="text-slate-400 text-sm mt-1">
					Explore our diverse learning faculties
				</p>
			</div>

			{/* Search Bar */}
			<div className="px-4 py-4">
				<label className="flex flex-col min-w-40 h-12 w-full">
					<div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-sm">
						<div className="text-slate-400 flex border-none bg-navy-card items-center justify-center pl-4 rounded-l-xl">
							<span
								className="material-symbols-outlined"
								style={{ fontSize: "20px" }}
							>
								search
							</span>
						</div>
						<input
							className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-white focus:outline-0 focus:ring-0 border-none bg-navy-card focus:border-none h-full placeholder:text-[#9dabb9] px-4 pl-2 text-base font-normal leading-normal"
							placeholder="Search subjects or faculty"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
					</div>
				</label>
			</div>

			{/* Grid Mapping */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 pb-40">
				{filteredDepts.map((dept, index) => (
					<div
						key={index}
						className="flex flex-col items-stretch justify-start rounded-xl shadow-lg bg-navy-card overflow-hidden border border-slate-800"
					>
						<div
							className="w-full bg-center bg-no-repeat aspect-[16/9] bg-cover relative"
							style={{ backgroundImage: `url(${dept.img})` }}
						>
							<div className="absolute top-3 right-3 bg-primary text-white p-2 rounded-full shadow-lg flex items-center justify-center">
								<span
									className="material-symbols-outlined"
									style={{ fontSize: "20px" }}
								>
									{dept.icon}
								</span>
							</div>
						</div>
						<div className="flex w-full grow flex-col items-stretch justify-center gap-3 py-5 px-5">
							<div>
								<p className="text-white text-xl font-bold leading-tight tracking-tight font-display">
									{dept.title}
								</p>
								<p className="text-[#9dabb9] text-sm mt-1 italic font-light">
									"{dept.quote}"
								</p>
							</div>
							<button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 bg-primary text-white text-sm font-semibold leading-normal mt-2 active:scale-[0.98] transition-transform">
								<span>Explore Faculty</span>
							</button>
						</div>
					</div>
				))}
			</div>

			{/* Bottom Navigation */}
			<div className="fixed bottom-0 w-full bg-background-dark/90 backdrop-blur-lg border-t border-slate-800 px-6 py-4 pb-8 flex justify-between items-center z-50">
				<div className="flex flex-col items-center gap-1 text-slate-400 cursor-pointer">
					<span
						className="material-symbols-outlined"
						style={{ fontSize: "24px" }}
					>
						home
					</span>
					<span className="text-[10px] font-medium">Home</span>
				</div>
				<div className="flex flex-col items-center gap-1 text-primary cursor-pointer">
					<span
						className="material-symbols-outlined"
						style={{ fontSize: "24px", fontVariationSettings: "'FILL' 1" }}
					>
						account_tree
					</span>
					<span className="text-[10px] font-medium">Depts</span>
				</div>
				<div className="flex flex-col items-center gap-1 text-slate-400 cursor-pointer">
					<span
						className="material-symbols-outlined"
						style={{ fontSize: "24px" }}
					>
						calendar_month
					</span>
					<span className="text-[10px] font-medium">Events</span>
				</div>
				<div className="flex flex-col items-center gap-1 text-slate-400 cursor-pointer">
					<span
						className="material-symbols-outlined"
						style={{ fontSize: "24px" }}
					>
						person
					</span>
					<span className="text-[10px] font-medium">Profile</span>
				</div>
			</div>
		</div>
	);
}

export default Departments;
