import styles from "../styles/WorkCardLarge.module.css";

export default function WorkCardLarge(props) {
	const { posts } = props;
	return (
		<>
			<article
				className={`${styles.workCardLargeWrapper} flex paddingBodyInline marginBottomSection`}
			>
				{posts
					.filter((item) => {
						return item.tags.includes("large");
					})
					.map((item, idx) => {
						return (
							<div
								key={idx}
								className={`${styles.workCardLarge} fontBody`}
							>
								<img
									className={`${styles.workCardLargeImg}`}
									src={item.img}
									alt=""
								/>
								<div className={`${styles.cardContentWrapper}`}>
									<div className={`${styles.cardContent}`}>
										<p className={`${styles.cardText}`}>
											{item.description}
										</p>
										<div
											className={`${styles.cardButtonsWrapper}`}
										>
											<ul
												className={`${styles.cardButtons} flex`}
											>
												<li>svg</li>
												<li>
													<a
														href={item.url}
														target="_blank"
														rel="noreferrer"
													>
														visit website
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div
										className={`${styles.cardViewProjectBtn} center fontBody`}
									>
										{/* add visit url */}
										view project details
									</div>
								</div>
							</div>
						);
					})}
			</article>
		</>
	);
}
