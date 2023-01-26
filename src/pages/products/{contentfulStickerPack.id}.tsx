import { graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../../components/Layout";

export default function ProductDetail({
    data,
}: PageProps<Queries.ProductQuery>) {
    return (
        <Layout title={data.contentfulStickerPack?.name + ""}>
            <article>
                <GatsbyImage
                    image={
                        getImage(
                            data.contentfulStickerPack?.preview
                                ?.gatsbyImageData!
                        )!
                    }
                    alt={data.contentfulStickerPack?.name!}
                />
                <h4>${data.contentfulStickerPack?.price!}</h4>
            </article>
        </Layout>
    );
}

export const query = graphql`
    query Product($id: String!) {
        contentfulStickerPack(id: { eq: $id }) {
            name
            price
            preview {
                gatsbyImageData(height: 450, placeholder: BLURRED)
            }
        }
    }
`;
