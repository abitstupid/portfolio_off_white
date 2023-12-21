import styles from "../styles/Featured.module.css";
import data from "../data.json";
import { useRef } from "react";

export default function Featured() {
	const projectRef = useRef(null);

	return (
		<>
			<div className={`${styles.featuredWrapper}`}>
				<h2
					className={` ${styles.featuredWorkHeading} flex h2Left fontDisplay`}
				>
					featured <span className={styles.headingWork}>work</span>
				</h2>
				{data.projects
					.filter((project) => project.tags.includes("featured"))
					.map((item, idx) => {
						return (
							<a
								key={idx}
								href={item.url}
								style={{ display: "block !important" }}
								target="_blank"
								rel="noreferrer"
							>
								<div
									className={`${styles.project}  flex fontDisplay pointer`}
									ref={projectRef}
								>
									<div
										className={`${styles.projectImgWrapper}`}
										style={{
											background: `url(${item.img})`,
											backgroundPosition: "center",
											backgroundSize: "contain",
											backgroundRepeat: "no-repeat",
										}}
									></div>
									<p>{item.title}</p>
								</div>
							</a>
						);
					})}
			</div>
		</>
	);
}
