const Api = () => {
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const fetchWithErrorHandling = async (url: string, options: RequestInit) => {
    let res = null;

    try {
      res = await fetch(url, options);
      if (!res?.ok) throw new Error("Error to fetch data");
    } catch (error) {
      console.error(error);
    }
    return res;
  };

  const get = (url: string, options: RequestInit = {}) => {
    const requestOptions = {
      ...defaultOptions,
      ...options,
      method: "GET",
    };
    return fetchWithErrorHandling(`${url}`, requestOptions);
  };

  return {
    get,
  };
};

export default Api();
