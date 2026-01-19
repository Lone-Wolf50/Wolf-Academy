function ProgramCard3() {
	return (
		<>
			<div className="bg-white dark:bg-background-dark rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all">
				<div
					className="h-48 w-full bg-cover bg-center"
					data-alt="University students collaborating in a library"
					style={{
						backgroundImage:
							'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBomim_mbHXvSaO6syLavYLo6o8GaLNagHGtfKK9Xi7Mkl3POixza7tbzv5cwFOR2yA-hNAVdcfeDfn1K1x-9B9m8VGkmaETJatHNVTsyL1ok1frsECnKd54jtsURrLfwqK1PIbshHqMC6I53AyYkGjr4gA9qiYcxMI_25B9T_NgafUbDPLxAN5jSxufJRFfJkY_wqcYVkM9YRCq4AGtOeVofkCqvvyw9VdfvMtgM-jqFSVBAVhHU23jg9KyTTvdXInIQ8vIa7YsGY")',
					}}
				></div>
				<div className="p-6">
					<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
						Higher Ed Pathways
					</h3>
					<p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
						Specialized tracks and college counseling to ensure successful
						placement in top global universities.
					</p>
					<button className="text-primary font-bold text-sm uppercase tracking-wider">
						Learn More
					</button>
				</div>
			</div>
		</>
	);
}

export default ProgramCard3;
