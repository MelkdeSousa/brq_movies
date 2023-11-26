export const simpleFetch = async <Response = {}>(
  url: string,
  options: RequestInit,
) => {
  const response = await fetch(url, options);

  const data = await response.json();

  if (response.status !== 200) {
    if (Object.keys((data as object) || {}).length) {
      throw data;
    }

    throw new Error('Error while fetching data');
  }

  return data as Response;
};
