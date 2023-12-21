import NavBar from "../components/NavBar.js";
import WorkCardLarge from "../components/WorkCardLarge.js";
import WorkCardSmall from "../components/WorkCardSmall.js";
import Footer from "../components/Footer.js";
import styles from "../styles/work.module.css";
import data from "../data.json";

export default function Work() {
	return (
		<>
			<NavBar />
			<main>
				<header>
					<h1
						className={`${styles.headingWork} h2Center fontDisplay marginBottomSectionMedium marginTopSectionMedium`}
					>
						my precious works
					</h1>
				</header>
				<section className={`${styles.work} flex column`}>
					<WorkCardLarge posts={data.projects} />

					<WorkCardSmall posts={data.projects} />
				</section>
			</main>
			<Footer />
		</>
	);
}
