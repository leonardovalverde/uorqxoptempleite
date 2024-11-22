"use server";

async function PostsPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <form action="/" className="mb-4">
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
      <ul></ul>
    </div>
  );
}

export { PostsPage };
