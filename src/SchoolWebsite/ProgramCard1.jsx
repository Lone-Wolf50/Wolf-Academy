function ProgramCard1() {
	return (
		<>
			<div className="bg-white dark:bg-background-dark rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all">
				<div
					className="h-48 w-full bg-cover bg-center"
					data-alt="Primary school children learning through play"
					style={{
						backgroundImage:
							'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDlNPHin__JeQPGaUimxs4pQQ7nUBeEgfCqJBLc66Dgm9156xSno_I4aHPe0S17fewW4t5tFiAsJYfULt8OFV-muMeSMR_j5fcOK1oqkxlvJD0DUPdcsNzKwZO1hUwm42YgMbY5zzFhzubQpyacnQUfvrG3rMTDCfzAi71zKc0nxMfeYOIf7NE0b6Wndf7Wn4Xuo_Z73oFWBWpWxjgMvB3vTZa1X9RiR3cxdSCcDy984woR3NJEdCkkMU9npgJ5H0a_wK74AEmbPj4")',
					}}
				></div>
				<div className="p-6">
					<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
						Primary Education
					</h3>
					<p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
						Focusing on foundational literacy, numeracy, and creative
						exploration in a supportive environment.
					</p>
					<button className="text-primary font-bold text-sm uppercase tracking-wider">
						Learn More
					</button>
				</div>
			</div>
		</>
	);
}

export default ProgramCard1;
