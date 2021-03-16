/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: 'EduOnline',
		author: 'Dictionary'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		// {
		// 	resolve: `gatsby-source-contentful`,
		// 	options: {
		// 		spaceId: '1bayuj6zk0y1',
		// 		accessToken: 'be_LtJ_xpdbFyrmoy1JLh-MK3AxYWqiHZb-HlCMf0Kc',
		// 		downloadLocal: true
		// 	}
		// },
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				implementation: require('node-sass')
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`
			}
		},
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					'gatsby-remark-relative-images',
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 750,
							linkImagesToOriginal: false
						}
					}
				]
			}
		}
	]
};
