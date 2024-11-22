"use server";

interface Manga {
  id: string;
  title: string;
  description: string;
}

async function fetchRandomManga(): Promise<Manga> {
  const axios = (await import("axios")).default;
  const response = await axios.get(
    `https://api.mangadex.org/manga/random?contentRating[]=safe`
  );

  const manga = {
    id: response.data.data.id,
    title:
      response.data.data.attributes.title.en ||
      response.data.data.attributes.title.jp ||
      "Título não disponível",
    description: response.data.data.attributes.description.en,
  };

  return manga;
}

const RandomManga = async () => {
  const manga = await fetchRandomManga();

  return (
    <div className="bg-slate-800 text-foreground p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Mangá Aleatório: {manga.title}</h2>
      </div>
      <div className="w-full h-24 overflow-auto">
        <p>{manga.description}</p>
      </div>
    </div>
  );
};

export default RandomManga;
