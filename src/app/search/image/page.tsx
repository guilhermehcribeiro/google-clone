import ImageSearchResults from "@/components/ImageSearchResults";
import { SearchEngineRepository } from "@/repositories/SearchEngineRepository";
import Link from "next/link";

type IImageSearchPage = {
  searchParams: {
    searchTerm: string;
  };
};

export default async function ImageSearchPage({
  searchParams,
}: IImageSearchPage) {
  const res = await SearchEngineRepository.search(
    searchParams?.searchTerm,
    true
  );

  if (!res?.items) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">No results found!</h1>
        <p className="text-lg">
          Try searching for something else or go back to the{" "}
          <Link href="/" className="text-blue-500">
            homepage
          </Link>
          .
        </p>
      </div>
    );
  }

  return <div>{res?.items && <ImageSearchResults data={res} />}</div>;
}
