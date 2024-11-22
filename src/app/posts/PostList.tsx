"use server";

import { cache } from "react";
import axios from "axios";

const getPosts = cache(async () => {
  const response = await axios.get(
    "https://673fa96ca9bc276ec4b9405e.mockapi.io/api/users "
  );
  return response.data;
});

export { getPosts };
