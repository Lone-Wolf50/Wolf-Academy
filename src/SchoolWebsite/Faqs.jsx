import { useState } from "react";

function Faqs() {
	const [openIndex, setOpenIndex] = useState(null);

	const faqs = [
		{
			question: "When does the 2026 admission cycle open?",
			answer:
				"The early admission cycle begins on September 1st, 2026. We recommend submitting applications early as seats are limited for key grade levels.",
		},
		{
			question: "What extracurricular activities are offered?",
			answer:
				"We offer over 50 clubs including Robotics, Competitive Debate, Swimming, Jazz Band, and Community Service initiatives.",
		},
		{
			question: "Do you offer financial aid or scholarships?",
			answer:
				"Yes, Wolf Academy offers merit-based scholarships for outstanding achievement in academics, arts, and athletics. Needs-based aid is also available.",
		},
	];

	return (
		<>
			<h2 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight mb-8">
				Frequently Asked Questions
			</h2>
			<div className="flex flex-col gap-4">
				{faqs.map((faq, index) => (
					<details
						key={index}
						className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm"
						open={openIndex === index}
					>
						<summary
							className="flex justify-between items-center p-5 cursor-pointer list-none font-semibold text-slate-900 dark:text-white"
							onClick={(e) => {
								e.preventDefault();
								setOpenIndex(openIndex === index ? null : index);
							}}
						>
							{faq.question}
							<span className="material-symbols-outlined group-open:rotate-180 transition-transform">
								expand_more
							</span>
						</summary>
						<div className="px-5 pb-5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
							{faq.answer}
						</div>
					</details>
				))}
			</div>
		</>
	);
}

export default Faqs;
