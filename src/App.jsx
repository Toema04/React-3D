import {
	Hero,
	Navbar,
	About,
	Tech,
	Experience,
	Works,
	Feedbacks,
	Contact,
	EarthCanvas,
	BallCanvas,
	ComputersCanvas,
	StarsCanvas,
} from "./components";
import { BrowserRouter } from "react-router-dom";
function App() {
	return (
		<div className="relative z-0 bg-primary">
			<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
				<BrowserRouter>
					<Navbar />
				</BrowserRouter>
				<Hero />
			</div>
			<About />
			<Experience />
			<Tech />
			<Works />
			<Feedbacks />
			<div className="relative z-0">
				<Contact />
				<StarsCanvas />
			</div>
		</div>
	);
}

export default App;
