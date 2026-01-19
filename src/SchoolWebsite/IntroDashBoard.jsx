import { useNavigate } from "react-router-dom";

function IntroDashBoard({ firstName }) {
    const navigate = useNavigate();
	return (
		<>
			<header className="sticky top-0 z-50 bg-background-dark/95 backdrop-blur-md border-b border-white/5">
				<div className="flex items-center p-5 justify-between max-w-md mx-auto w-full">
					<div className="flex items-center gap-3.5">
						<div className="relative">
							<img
								alt="Alex Profile"
								className="size-12 rounded-full object-cover border-2 border-primary/20 p-0.5"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo0i5_Wg9ONmSLQQwhPC2UPkq_A4ZhRA13fnHEgK68jZE-qlexHC9d1lU_qRjaMbQPF0bke_FBBdkmahrRYZBZcuQjVzlkQ5xWW7DAdr9Sqtlo-YQHfZO4ItBaSbO8GCO8fopzzx1eOU-vSP-hNwK9vOKIKfE6mham1cS9L-XbXTA2QZ8amJ2W_eEfgPdy2ERdOqQhBylDXXTbEb-JK2Jx9letBQ0kO4OLyuoCE3wGPkYrQqWwdmjZ-Pm4f3AVw5s7jQvMOg4YbTA"
							/>
							<div className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full border-2 border-background-dark"></div>
						</div>
						<div>
							<h2 className="text-white text-lg leading-tight tracking-tight">
								<span className="font-medium text-white/70 mr-1">Welcome,</span>
								<span className="font-bold">{firstName}!</span>
							</h2>
							<div className="mt-1 inline-flex items-center px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
								<span className="text-primary text-[9px] font-bold tracking-wider uppercase">
									#HZ-2024-88
								</span>
							</div>
						</div>
					</div>
					<div onClick={() => navigate("/")} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 cursor-pointer hover:bg-white/10 transition-colors border border-white/5 active:scale-95">
						<span className="text-xs font-medium text-slate-muted">Logout</span>
						<span
							className="material-symbols-outlined text-slate-muted"
							style={{fontSize: "18px"}}
						>
							logout
						</span>
					</div>
				</div>
			</header>
		</>
	);
}

export default IntroDashBoard;
