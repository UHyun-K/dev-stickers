import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

export default function AboutUs() {
    return (
        <Layout title="About Us">
            <p>we are the happies sticker</p>
        </Layout>
    );
}
export const Head = () => <Seo title="AboutUs" />;
