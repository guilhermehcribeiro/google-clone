import { SearchEngineRepository } from "@/repositories/SearchEngineRepository";

type IWebSearchPage = {
  searchParams: {
    searchTerm: string;
  };
};

export default async function WebSearchPage({ searchParams }: IWebSearchPage) {
  const res = await SearchEngineRepository.search(searchParams?.searchTerm);
  return (
    <div>
      {res?.items &&
        res?.items?.map((result) => (
          <h1 key={result?.title}>{result?.title}</h1>
        ))}
    </div>
  );
}
