import React from "react";

/**
 * AboutPage Component
 * Renders the About Us section for the website, ensuring consistent styling and incorporating scrolling functionality.
 */
const AboutPage = () => {
	return (
		<div className="about-scroll-container">
			<main className="about-us">
				{/* Page Title */}
				<h1>About Us</h1>

				{/* Welcome Message */}
				<br />
				<br />
				<p>
					<strong>Welcome to Big Thrifting!</strong>
					<br />
					<br />
					Big Thrifting is a one-person operation fueled by a passion for
					uncovering unique finds and sharing them with others. Whether it’s
					vintage treasures, rare collectibles, or trendy pieces, I take pride
					in curating high-quality items that you’ll love—all while contributing
					to a more sustainable future.
				</p>

				{/* Mission Statement */}
				<h2>My Mission</h2>
				<p>
					As a solo entrepreneur, I wear all the hats: from sourcing and
					photographing items to listing and shipping orders. My goal is to
					provide exceptional service and unique products at affordable prices.
					Every purchase you make helps support my dream while giving items a
					second chance at life.
				</p>

				{/* Social Media Links */}
				<h2>Where You Can Find Me</h2>
				<ul className="social-links">
					<li>
						<a
							href="https://tiktok.com/@bigthrifting"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-tiktok"></i> TikTok
						</a>
					</li>
					<li>
						<a
							href="https://instagram.com/bigthrifting2022"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-instagram"></i> Instagram
						</a>
					</li>
					<li>
						<a
							href="https://www.facebook.com/share/18go7qzG9p/?mibextid=wwXIfr"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-facebook"></i> Facebook
						</a>
					</li>
					<li>
						<a
							href="https://www.youtube.com/@bigthrifting5715"
							target="_blank"
							rel="noopener noreferrer"
						>
							<i className="fab fa-youtube"></i> YouTube
						</a>
					</li>
				</ul>

				{/* Future Plans Section */}
				<h2>What’s Next?</h2>
				<p>
					I’m working on making it even easier for you to shop with me. Soon,
					you’ll be able to browse and purchase items directly from this
					website. Stay tuned for updates by following me on social media or
					subscribing to my newsletter.
				</p>

				{/* Contact Information */}
				<h2>Get in Touch</h2>
				<p>
					Questions, requests, or just want to say hi?{" "}
					<a href="mailto:your-email@example.com">Email me</a>. I personally
					respond to every message and love hearing from fellow thrifting
					enthusiasts.
				</p>
			</main>
		</div>
	);
};

export default AboutPage;
