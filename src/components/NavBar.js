import styles from "../styles/NavBar.module.css";
import data from "../data.json";
import { IoMdClose } from "react-icons/io";
import { LiaBarsSolid } from "react-icons/lia";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	const classNameNav = isOpen
		? `${styles.nav}`
		: `${styles.nav} ${styles.navCls}`;

	const classNameNavLinkWrapper = isOpen
		? `${styles.navLinkWrapper}`
		: `${styles.navLinkWrapper} ${styles.navLinkWrapperCls}`;
	return (
		<>
			<nav className={`${classNameNav} flex`}>
				<div className={`${styles.clsbtnWrapper} pointer`}>
					{isOpen ? (
						<IoMdClose
							className={`${styles.clsBtn}`}
							onClick={() => setIsOpen(!isOpen)}
						/>
					) : (
						<LiaBarsSolid
							className={`${styles.clsBtn}`}
							onClick={() => setIsOpen(!isOpen)}
						/>
					)}
				</div>
				<ul
					className={`${classNameNavLinkWrapper} flex column fontDisplay`}
				>
					{data.nav.map((item, idx) => {
						return (
							<li
								key={idx}
								className={`${styles.navLink}`}
							>
								<Link to={item.url}>{item.title} </Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
}
