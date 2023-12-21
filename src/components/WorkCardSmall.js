import React from "react";
import styles from "../styles/WorkCardSmall.module.css";

export default function WorkCardSmall(props) {
	const { posts } = props;
	return (
		<>
			<article
				className={`${styles.workCardSmallWrapper} flex paddingBodyInline marginBottomSection`}
			>
				{posts.map((item, idx) => {
					return (
						<React.Fragment key={idx}>
							<div
								className={`${styles.workCardSmall} fontBody flex column`}
							>
								<div
									className={`${styles.workCardSmallImgWrapper}`}
								>
									<img
										className={`${styles.workCardSmallImg}`}
										src={item.img}
										alt=""
									/>
								</div>
								<div
									className={`${styles.cardContentWrapper} flex column`}
								>
									<p className={`${styles.cardTextContent}`}>
										dsafad fasdfadsf asfasdfasdfasf
										asdfdsafadfa sdfadsf asfasdfa sdfa
										sfasdf
									</p>
									<div
										className={`${styles.cardContentLinks} flex`}
									>
										<p>svg</p>
										<p>visit website</p>
									</div>
								</div>
							</div>
						</React.Fragment>
					);
				})}
			</article>
		</>
	);
}
