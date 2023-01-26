require("dotenv").config();
import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `DevStickers`,
        siteUrl: `https://www.yourdomain.tld`,
        description: "buy the best stickers",
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    plugins: [
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: `p0fnj7gk15tc`,
                // Learn about environment variables: https://gatsby.dev/env-vars
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        `gatsby-plugin-typegen`,
        `gatsby-plugin-mdx`,
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,

        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/blog-posts/`, //어딜 볼건지
            },
        },
    ],
};

export default config;
