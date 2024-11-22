import RandomManga from "./components/RandomManga";
import SearchForm from "./components/SearchForm";
import { PostsPage } from "./posts/PostsPage";

export default function Home() {
  return (
    <main>
      <RandomManga />
      <div className="bg-slate-500 text-foreground p-4">
        <h1 className="text-2xl font-bold">Buscar Mangá</h1>
        <SearchForm />
      </div>
      <PostsPage />
    </main>
  );
}
