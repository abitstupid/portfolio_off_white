import NavBar from "../components/NavBar";
import styles from "../styles/home.module.css";
import data from "../data.json";
import Skills from "../components/Skills";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Featured from "../components/Featured";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<NavBar />
			{/* HERO */}
			<section className={`${styles.hero} `}>
				<div
					className={`${styles.heroBannerWrapper} paddingBodyInline`}
				>
					<div
						className={`${styles.animationDotWrapper} flex fontBody`}
					>
						<div className={`flex`}>
							<div className={`${styles.animationDot} `}></div>
							<p className={`${styles.animationText}`}>
								place your cursor here
							</p>
						</div>
					</div>
					<div className={`${styles.heroBanner} flex `}>
						<div className={`${styles.navWrapper} fontDisplay`}>
							{data.nav.map((item, idx) => {
								return (
									<p
										className={`${styles.navItem} pointer`}
										key={idx}
									>
										<Link to={item.url}> {item.title}</Link>
									</p>
								);
							})}
						</div>

						<div className={`${styles.authorInfoWrapper} flex `}>
							<div className={`${styles.authorImg} center`}>
								<img
									src="../assets/images/profilePic.png"
									alt={data.authorInfo.img.alt}
								/>
							</div>

							<div className={`${styles.authorInfo} flex column`}>
								<p
									className={`${styles.authorName} fontTertiary`}
								>
									{data.authorInfo.name}
								</p>
								<p
									className={`${styles.authorDescription} fontBody`}
								>
									{data.authorInfo.description}
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* SKILLS */}
			<section
				className={`${styles.skills} paddingBodyInline marginBottomSection `}
			>
				<h2 className={` ${styles.skillsHeading} h2Right fontDisplay`}>
					skills
				</h2>
				<Skills
					data={data.skills}
					type={1}
				/>
			</section>

			{/* FEATURED WORK */}
			<section
				className={`${styles.featured} paddingBodyInline marginBottomSection`}
			>
				<Featured />
			</section>

			{/* CONTACT  */}
			<section
				className={`${styles.contact} paddingBodyInline marginBottomSection`}
			>
				<ContactSection />
			</section>

			{/* FOOTER */}
			<section className={`${styles.footer}`}>
				<Footer />
			</section>
		</>
	);
}
