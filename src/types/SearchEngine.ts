export type ISearchItem = {
  title: string;
  link: string;
  formattedUrl: string;
  htmlSnippet: string;
  displayLink: string;
  image: {
    contextLink: string;
  };
};

export type ISearch = {
  items: ISearchItem[];
  searchInformation: {
    formattedTotalResults: number;
    formattedSearchTime: number;
  };
};
