"use client";

interface Manga {
  id: string;
  title: string;
}

interface MangaListProps {
  mangas: Manga[];
}

const MangaList: React.FC<MangaListProps> = () => {
  return (
    <div className="mt-4 text-black ">
      <h2 className="m-0">Resultados da Busca:</h2>
      <div className="h-32 overflow-auto">
        <ul></ul>
      </div>
    </div>
  );
};

export default MangaList;
