import { useState } from "react";
import styles from "../styles/ContactSection.module.css";

export default function ContactSection() {
	const [name, setName] = useState("");
	const [mail, setMail] = useState("");
	const [message, setMessage] = useState("");

	const handleName = (e) => {
		setName(e.target.value);
	};

	const handleMail = (e) => {
		setMail(e.target.value);
	};

	const handleMessage = (e) => {
		setMessage(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<form
				className={`${styles.contactWrapper} marginSectionBottom paddingInlineBody flex`}
			>
				{/* LEFT */}
				<div className={`${styles.one} ${styles.formSection} fontBody`}>
					<input
						type="text"
						name="name"
						required
						placeholder="name"
						value={name}
						onChange={handleName}
						className={`marginBottomSectionMedium`}
					/>
					<input
						type="email"
						name="email"
						required
						placeholder="e-mail"
						value={mail}
						onChange={handleMail}
						className={`marginBottomSectionMedium`}
					/>
					<textarea
						name="message"
						id="messageTextarea"
						placeholder="message"
						value={message}
						onChange={handleMessage}
						className={`marginBottomSectionMedium`}
					></textarea>
				</div>
				{/* RIGHT */}
				<div
					className={`${styles.two} ${styles.formSection} flex column	`}
				>
					<h2
						className={` ${styles.contactHeading} h2Left fontDisplay `}
					>
						contact
					</h2>
					<div className={`${styles.buttonWrapper} `}>
						<button
							className={`${styles.submitBtn} fontBody pointer`}
							type="submit"
							value="Submit"
							onClick={handleSubmit}
						>
							Submit
						</button>
					</div>
				</div>
			</form>
		</>
	);
}
