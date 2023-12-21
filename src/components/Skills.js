import styles from "../styles/Skills.module.css";

export default function Skills(props) {
	const { data, type } = props;

	return (
		<>
			{data.map((item, idx) => {
				return (
					<section
						className={`${styles.skillsWrapper} marginBottomSectionMedium`}
						key={idx}
					>
						<h3
							className={`${styles.skillType} fontDisplay marginBottomSectionMedium paddingBodyInline`}
						>
							{item.type.title}
						</h3>
						<section className={`${styles.skillCardSection} flex`}>
							{item.type.skills.map((skill, index) => {
								return (
									<div
										key={index}
										className={`${styles.skillCardWrapper} flex`}
										style={{
											flexBasis:
												type === 1 ? "25%" : "50%",
										}}
									>
										<div
											className={`${styles.skillCard} flex`}
											style={{
												height:
													type === 1
														? "140px"
														: "80px",
												width:
													type === 1
														? "140px"
														: "96%",
												flexDirection:
													type === 1
														? "column"
														: "row",
											}}
										>
											<div
												className={`${styles.skillIcon} flex column`}
											>
												<img
													src={skill.icon}
													alt={skill.title}
												/>
											</div>
											<p
												className={`${styles.skillTitle} fontBody`}
											>
												{skill.title}
											</p>
										</div>
									</div>
								);
							})}
						</section>
					</section>
				);
			})}
		</>
	);
}
