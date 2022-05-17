const { description } = require("../../package");

module.exports = {
	title: "ITS30605",
	description: description,

	/**
	 * Extra tags to be injected to the page HTML `<head>`
	 *
	 * ref：https://v1.vuepress.vuejs.org/config/#head
	 */
	head: [
		// ['meta', { name: 'theme-color', content: '#3eaf7c' }],
		["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
		["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
		["link", { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" }],
		["link", { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css" }],
		["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css" }],
		["link", { rel: "icon", type: "image/png", href: "/assets/images/hhicon.png" }],
	],

	/**
	 * Base
	 * If you are deploying to https://<USERNAME>.github.io/,
	 * you can omit base as it defaults to "/".
	 *
	 * If you are deploying to https://<USERNAME>.github.io/<REPO>/, for example your repository is at
	 * https://github.com/<USERNAME>/<REPO>,
	 * then set base to "/<REPO>/".
	 */
	base: "/wp-labs/",

	/**
	 * Theme configuration, here is the default theme configuration for VuePress.
	 *
	 * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
	 */
	themeConfig: {
		repo: "",
		editLinks: false,
		docsDir: "",
		editLinkText: "",
		lastUpdated: true,
		sidebarDepth: 4,
		nav: [
			{ text: "Practical Preparation", link: "/lab00" },
			{ text: "macOS LAMP Guide (Hard Way)", link: "/lamp_macos" },
			{
				text: "TC Practical Labs",
				items: [
					{ text: "ITS30505: Introduction to Computing", link: "https://deezombiedude612.github.io/itc-labs" },
					{ text: "ITS30605: Web Programming", link: "/" },
					{ text: "ITS42004: Object-Oriented Programming", link: "https://deezombiedude612.github.io/oop-labs" },
					{
						text: "ITS42104: Object-Oriented Analysis and Design (old)",
						link: "https://deezombiedude612.github.io/ooad-labs",
					},
				],
			},
			{
				text: "Asgn 3 Groupings",
				items: [
					{ text: "2022 April", link: "/asgn3_202204" },
					{ text: "2021 August", link: "/archive/202108/asgn3_202108" },
					{ text: "2021 April", link: "/archive/asgn3_202104" },
					{ text: "2020 August S1", link: "/archive/asgn3_202008_1" },
					{ text: "2020 August S2", link: "/archive/asgn3_202008_2" },
					{ text: "2020 August S3", link: "/archive/asgn3_202008_3" },
				],
			},
			{
				text: "Archive",
				items: [
					{
						text: "2021 August",
						link: "/archive/202108/",
					},
				],
			},
			// { text: "OOAD", link: "https://deezombiedude612.github.io/ooad-labs" },
		],
		sidebar: [
			"/",
			"/lamp_macos.md",
			"/asgn3_202204.md",
			{
				title: "2022 April",
				collapsable: false,
				children: [
					"/lab00",
					"/lab01",
					"/lab02",
					"/lab03",
					"/lab04",
					"/lab05",
					"/lab06",
					// "/lab07",
					// "/lab08",
					// "/lab09",
					// "/lab10",
					// "/lab11",
					// "/lab12",
					// "/lab13",
				],
			},
			{
				title: "Archive",
				collapsible: true,
				children: [
					{
						title: "2021 August",
						collapsable: true,
						children: [
							"/archive/202108/",
							"/archive/202108/asgn3_202108",
							"/archive/202108/lab00",
							"/archive/202108/lab01",
							"/archive/202108/lab02",
							"/archive/202108/lab03",
							"/archive/202108/lab04",
							"/archive/202108/lab05",
							"/archive/202108/lab06",
							"/archive/202108/lab07",
							"/archive/202108/lab08",
							"/archive/202108/lab09",
							"/archive/202108/lab10",
							"/archive/202108/lab11",
							"/archive/202108/lab12",
							"/archive/202108/lab13",
						],
					},
					{
						title: "2021 April",
						collapsable: true,
						children: ["/archive/asgn3_202104"],
					},
					{
						title: "2020 August",
						collapsable: true,
						children: ["/archive/asgn3_202008_1", "/archive/asgn3_202008_2", "/archive/asgn3_202008_3"],
					},
				],
			},
		],
	},
	markdown: {
		lineNumbers: true,
		extendMarkdown: (md) => {
			md.use(require("markdown-it-katex"));
		},
	},

	/**
	 * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
	 */
	plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom", "@vuepress/last-updated"],
};
