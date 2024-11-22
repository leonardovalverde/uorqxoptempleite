"use server";

import { addPost } from "./action";
import { getPosts } from "./PostList";

async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <form action={addPost} className="mb-4">
        <input
          name="title"
          placeholder="Nome do Post"
          required
          className="border border-gray-300 p-2 rounded mb-2 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Adicionar Post
        </button>
      </form>
      <ul>
        {posts.map((post: { id: number; title: string }) => (
          <li key={post.id} className="border-b border-gray-200 py-2">
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export { PostsPage };
