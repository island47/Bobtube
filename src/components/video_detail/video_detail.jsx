import React from 'react';
import styles from './video_detail.module.css';

const VideoDetail = ({ video }) => {
	return (
		<section className={styles.detail}>
			<iframe
				className={styles.video}
				type="text/html"
				width="100%"
				height="500px"
				src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
				frameborder="0"
				allowfullscreen
			></iframe>
			<h3>{video.snippet.title}</h3>
			<h4>{video.snippet.channelTitle}</h4>
			<pre className={styles.description}>{video.snippet.description}</pre>
		</section>
	);
};

export default VideoDetail;
