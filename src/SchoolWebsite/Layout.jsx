import NavBar from "./NavBar.jsx";
import Hero from "./Hero.jsx";
import Stats from "./Stats.jsx";
import About from "./About.jsx";
import Apply2026 from "./Apply2026.jsx";
import Admission from "./Admission.jsx";
import Departments from "./Departments.jsx";
import Scholarships from "./Scholarships.jsx";
import CampusLife from "./CampusLife.jsx";
import HistoryStatus from "./HistoryStatus.jsx";
import ProgramGrids from "./ProgramGrids.jsx";
import ProgramCard1 from "./ProgramCard1.jsx";
import ProgramCard2 from "./ProgramCard2.jsx";
import ProgramCard3 from "./ProgramCard3.jsx";
import Faqs from "./Faqs.jsx";
import Footer from "./Footer.jsx";
import PersonalInfo from "./PersonalInfo.jsx";
import PersonalInfo2 from "./PersonalInfo2.jsx";
import PersonalInfo3 from "./PersonalInfo3.jsx";
import Intro from "./Intro.jsx";
import Intro2 from "./Intro2.jsx";
import Intro3 from "./intro3.jsx";
import Intro4 from "./Intro4.jsx";
import Intro5 from "./Intro5.jsx";
import Intro6 from "./intro6.jsx";
import Intro7 from "./Intro7.jsx";
import Intro8 from "./Intro8.jsx";
import IntroDashBoard from "./IntroDashBoard.jsx";
import { Routes, Route } from "react-router";
import FinalRegistration from "./FinalRegistration.jsx";
import StatusTracker from "./StatusTracker.jsx";
import { useState } from "react";

function Layout() {
	const [fullName, setFullName] = useState("");
const firstName = fullName.trim() ? fullName.trim().split(" ")[0] : "Student";

	return (
		<>
			<Routes>
				<Route
					index
					element={
						<>
							<NavBar />
							<main className="w-full">
								<Hero />
								<Stats />
								<About />
								<section className="bg-slate-100 dark:bg-slate-900/50 py-16 px-4">
									<ProgramGrids />
									<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
										<ProgramCard1 />
										<ProgramCard2 />
										<ProgramCard3 />
									</div>
								</section>
								<section className="py-16 px-4 max-w-screen-xl mx-auto">
									<Faqs />
								</section>
								<footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 px-4">
									<Footer />
								</footer>
							</main>
						</>
					}
				/>
				<Route
					path="Personal-Registration"
					element={
						<>
							<PersonalInfo />
							<main className="p-4 max-w-md mx-auto">
								<Intro />
								<Intro2 fullName={fullName} setFullName={setFullName} />
							</main>
						</>
					}
				/>

				<Route
					path="Academic-Registration"
					element={
						<>
							<PersonalInfo2 />
							<main className="p-4 max-w-md mx-auto">
								<Intro3 />
								<Intro4 />
							</main>
						</>
					}
				/>

				<Route
					path="Document-Registration"
					element={
						<>
							<PersonalInfo3 />
							<main className="p-4 max-w-md mx-auto">
								<Intro5 />
								<Intro6 />
							</main>
						</>
					}
				/>

				<Route
					path="Registration-completed"
					element={
						<>
							<FinalRegistration />
							<main className="p-6 max-w-md mx-auto flex flex-col items-center">
								<Intro7 />
								<Intro8 />
							</main>
						</>
					}
				/>
				<Route
					path="Dashboard"
					element={
						<>
							<IntroDashBoard firstName={firstName} />
							<main className="flex-1 overflow-y-auto pb-32 max-w-md mx-auto w-full px-4 pt-6">
								<StatusTracker />
								<HistoryStatus />
							</main>
						</>
					}
				/>

				<Route path="Campus-Life" element={<CampusLife />}/>
				<Route path="Admissions" element={<Admission />}/>
				<Route path="Departments" element={<Departments />}/>
				<Route path="Scholarships" element={<Scholarships />}/>
				<Route path="Apply2026" element={<Apply2026 />}/>
			</Routes>
		</>
	);
}

export default Layout;
