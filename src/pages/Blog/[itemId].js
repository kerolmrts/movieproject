import React from "react";
import axios from "axios";
import { SideBar } from "@/Components/Sidebar";
import { Footer } from "@/Components/Footer";
import Layout from "@/Components/Layout";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const PostPage = ({ post, comments }) => {
  return (
    <Layout>
      <div className="h-full min-h-screen flex flex-col">
        <div className="flex flex-row">
          <SideBar />
          <div>
            <div className="flex mt-10 items-center mx-5">
              <Link href="/Blog">
                <ChevronLeft />
              </Link>
              <h1 className="flex font-semibold text-3xl m-10">
                {post.title}{" "}
              </h1>
            </div>

            <ul>
              {comments.map((comment) => (
                <div className="bg-zinc-800 shadow-md rounded m-10 p-4 mb-4">
                  <li key={comment.id}>
                    <p>{comment.name}</p>
                    <p>{comment.email}</p>
                    <p>{comment.body}</p>
                  </li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default PostPage;

export async function getServerSideProps({ params }) {
  const { itemId } = params;
  const postResponse = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${itemId}`
  );
  const post = postResponse.data;

  const commentsResponse = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${itemId}/comments`
  );
  const comments = commentsResponse.data;
  return {
    props: {
      post,
      comments,
    },
  };
}
