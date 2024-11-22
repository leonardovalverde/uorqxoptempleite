"use server";

import axios from "axios";
import { revalidateTag } from "next/cache";

export async function addPost(formData: FormData) {
  const title = formData.get("title");
  if (!title) throw new Error("Title is required");

  await axios.post("https://673fa96ca9bc276ec4b9405e.mockapi.io/api/users", {
    title,
    body: "Este é um post de exemplo",
    userId: 1,
  });

  revalidateTag("posts");
}
