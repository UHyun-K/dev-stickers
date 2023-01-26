import { graphql, PageProps } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";
import Seo from "../../components/Seo";

interface IBlogPostProps {
    data: Queries.PostDetailQuery;
    children: any;
}

export default function BlogPost({ data, children }: IBlogPostProps) {
    const image = getImage(
        data.mdx?.frontmatter?.headerImage?.childImageSharp?.gatsbyImageData!
    );
    return (
        <Layout title="Blog Post">
            <GatsbyImage
                image={image as any}
                alt={data.mdx?.frontmatter?.title!}
            ></GatsbyImage>
            <div>{children}</div>
        </Layout>
    );
}

export const query = graphql`
    query PostDetail($frontmatter__slug: String) {
        mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
            body
            frontmatter {
                author
                category
                date
                slug
                title
                headerImage {
                    childImageSharp {
                        gatsbyImageData(height: 450)
                    }
                }
            }
        }
    }
`;

export const Head = ({ data }: IBlogPostProps) => (
    <Seo title={data.mdx?.frontmatter?.title} />
);
