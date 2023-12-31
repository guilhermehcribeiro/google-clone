import Api from "@/services/api";
import { ISearch } from "@/types/SearchEngine";

export const SearchEngineRepository = {
  search: async (searchTerm: string): Promise<ISearch> => {
    const res = await Api.get(
      `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${searchTerm}`,
      {
        next: { revalidate: 10000 },
      }
    );
    if (!res?.ok) throw new Error("Error to fetch data");
    const data = await res?.json();
    return data;
  },
};
