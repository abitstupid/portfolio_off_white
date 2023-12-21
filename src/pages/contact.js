import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import styles from "../styles/contact.module.css";

export default function Contact() {
	return (
		<>
			<NavBar />
			<main>
				<section
					className={`${styles.contact}  paddingBodyInline marginBottomSectionMedium`}
				>
					<ContactSection />
				</section>
				<p
					className={`${styles.contactFooterText} center fontDisplay marginBottomSectionMedium`}
				>
					text me, stalker
				</p>
			</main>
			<Footer />
		</>
	);
}
