import SearchFormClient from "./SearchFormClient";
import axios from "axios";
import { MangadexResponse, Manga } from "./types";

export default function SearchForm() {
  async function handleSearch(formData: FormData): Promise<Manga[]> {
    "use server";
    const query = formData.get("query") as string;

    try {
      const response = await axios.get<MangadexResponse>(
        `https://api.mangadex.org/manga?title=${encodeURIComponent(query)}`
      );

      const mangas = response.data.data.map((item: Manga) => ({
        id: item.id,
        title:
          item.attributes.title.en ??
          item.attributes.title.jp ??
          "Título não disponível",
        type: item.type,
        attributes: item.attributes,
      }));

      return mangas;
    } catch (error) {
      console.error("Erro ao buscar mangás:", error);
      return [];
    }
  }

  return <SearchFormClient handleSearch={handleSearch} />;
}
