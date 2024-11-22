"use server";

interface Manga {
  id: string;
  title: string;
  description: string;
}

const RandomManga = async () => {
  return (
    <div className="bg-slate-800 text-foreground p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Mangá Aleatório:</h2>
      </div>
      <div className="w-full h-24 overflow-auto">
        <p></p>
      </div>
    </div>
  );
};

export default RandomManga;
