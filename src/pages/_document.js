import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
	return (
		<Html lang="en">
			<Head>
				<meta charSet="UTF-8" />
				<link rel="icon" href="/favicon.svg" />

				{/* <!-- Meta --> */}
				<meta name="author" content="Cosmo" />
				<meta name="theme-color" content="#3b82f6" />
				<meta name="description" content="Kwizify is a quiz/trivia game with questions made by IA. You can select different game modes and topics, you can also use different wildcards to help you answer the questions." />
				<meta name="robots" content="index, nofollow" />

				{/* <!-- Open Graph --> */}
				<meta property="og:title" content="Kwizify" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://repository-images.githubusercontent.com/593410779/0555ac47-4bd6-49a9-8869-5b1ec84a58f6" />
				<meta property="og:url" content="https://kwizify.vercel.app" />
				<meta property="og:description" content="Kwizify is a quiz/trivia game with questions made by IA. You can select different game modes and topics, you can also use different wildcards to help you answer the questions." />

				{/* <!-- Twitter --> */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@Cosmoart" />
				<meta name="twitter:creator" content="@Cosmoart" />
				<meta name="twitter:title" content="Kwizify" />
				<meta name="twitter:description" content="Kwizify is a quiz/trivia game with questions made by IA. You can select different game modes and topics, you can also use different wildcards to help you answer the questions." />
				<meta name="twitter:image" content="https://repository-images.githubusercontent.com/593410779/0555ac47-4bd6-49a9-8869-5b1ec84a58f6" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
