export default {
	target: 'static',
	head: {
		title: 'Welcome And Farewell Party 2022',
		htmlAttrs: {
			lang: 'ja',
		},
		meta: [
			{
				charset: 'utf-8',
			},
			{
				name: 'viewport', content: 'width=device-width, initial-scale=1',
			},
			{
				name: 'format-detection', content: 'telephone=no',
			},
			{
				name: 'robots', content: 'noindex, nofollow',
			},
			{
				name: 'referrer', content: 'no-referrer',
			},
		],
		link: [
			{
				rel: 'icon', type: 'image/x-icon', href: '/favicon.ico',
			},
		],
		buildModules: [
			'@nuxtjs/device',
		]
	},
	components: true,
}
