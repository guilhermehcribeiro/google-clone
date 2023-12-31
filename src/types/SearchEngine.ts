export type ISearchItem = {
  title: string;
  link: string;
  formattedUrl: string;
  htmlSnippet: string;
};

export type ISearch = {
  items: ISearchItem[];
  searchInformation: {
    formattedTotalResults: number;
    formattedSearchTime: number;
  };
};
