import React from "react";
import Header from "../components/header";
import About from "../components/about";
import Footer from "../components/footer";
import { getAllPostsForHome } from "../lib/api";

const about = ({ preview, allPosts }) => {
  return (
    <>
      <div className="mx-8">
        <Header />
      </div>
      <About allPosts={allPosts} preview={preview} />
      <Footer />
    </>
  );
};

export default about;

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllPostsForHome(preview)) ?? [];
  return {
    props: { preview, allPosts },
  };
}
