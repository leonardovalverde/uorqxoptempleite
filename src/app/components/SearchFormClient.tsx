"use client";

import { useState } from "react";
import MangaList from "./MangaList";
import { Manga } from "./types";

interface SearchFormClientProps {
  handleSearch: (formData: FormData) => Promise<Manga[]>;
}

const SearchFormClient: React.FC<SearchFormClientProps> = ({
  handleSearch,
}) => {
  const [mangas, setMangas] = useState<Manga[]>([]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = await handleSearch(formData);
    setMangas(result);
  }

  return (
    <div className="max-w-full mt-10 p-6 bg-slate-300 rounded-lg shadow-md">
      <form onSubmit={onSubmit} className="space-y-4 text-left">
        <div>
          <label
            htmlFor="query"
            className="block text-sm font-medium text-gray-700"
          >
            Nome do Mangá:
          </label>
          <input
            type="text"
            id="query"
            name="query"
            required
            className="mt-1 block w-64 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
          />
        </div>
        <button
          type="submit"
          className="w-32 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Buscar
        </button>
      </form>
      {mangas.length > 0 ? (
        <MangaList mangas={mangas} />
      ) : (
        <div className="mt-4 mb-6 h-32" />
      )}
    </div>
  );
};

export default SearchFormClient;
