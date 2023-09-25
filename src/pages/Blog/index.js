import { SideBar } from "@/Components/Sidebar";
import Layout from "@/Components/Layout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Footer } from "@/Components/Footer";


const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "", userId: "" });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log("Resposta da API (get):", response.data);
        setPosts(response.data);
      } catch (error) {
        console.log("Error ao carregar o get:", error);
      }
    };
    loadPosts();
  }, []);

  const onSubmit = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        newPost
      );
      console.log("Resposta da API (post): ", response.data);
      setPosts([response.data, ...posts]);
      setNewPost({ title: "", body: "", userId: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (postId) => {
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        newPost
      );
      if (response) {
        console.log("Resposta da API (delete): Deletado com sucesso!");
        alert("deletado com sucesso");
      }
      const updatedPosts = posts.filter((post) => post.id !== postId);
      setPosts(updatedPosts);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <main className="h-full flex flex-col">
        <div className="flex flex-1">
          <SideBar />


          <section className="flex-1 p-10">
            <h1 className="font-semibold text-3xl mt-10">Deixe seu comentário sobre um filme</h1>

            <div className="flex flex-col mt-10 gap-10">

              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  placeholder="Nome do Filme"
                  value={newPost.title}
                  onChange={(e) =>
                    setNewPost({ ...newPost, title: e.target.value })
                  }
                  className="w-50  text-zinc-900 border rounded"
                  required
                />

                <input
                  placeholder="Comentário"
                  value={newPost.body}
                  onChange={(e) =>
                 setNewPost({ ...newPost, body: e.target.value })
                  }
                  className="w-70 ml-2 text-zinc-900 border rounded mt-2"
                  required
                />
                <button className=" border bg-zinc-100 text-zinc-500/50 font-bold ml-1 rounded mt-2">
              Enviar
                </button>
              </form>
              {errors.title && (
                <span className="text-red-500">{errors.title.message}</span>
              )}
              {errors.body && (
                <span className="text-red-500">{errors.body.message}</span>
              )}

              <div>
                <ul>
                  {posts.map((post) => (
                    <div key={post.id} className="bg-zinc-800 shadow-md rounded  mb-2">
                      <li>
                        <strong className="m-1 p-5">Filme:</strong>

                        <Link
                          href={`/Blog/${post.id}`}
                          className="text-zinc-400 hover:text-zinc-100"
                        >
                          {post.title}
                        </Link>
                        <p className="m-1 p-1">
                          <strong className="m-2">Comentário:</strong> {post.body}
                        </p>
                      </li>

                      <button
                        onClick={() => deletePost(post.id)}
                        className=" border zinc-800 text-zinc-100 py-1 px-2 ml-5 mb-2 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
  
     <Footer/>
    </Layout>
  );
};

export default Posts;
