const searchApi = async (searchTerm, sortBy) => {
  const API = `https://api1.github.com/search/repositories?q=${searchTerm}&sort=${sortBy}&order=desc`;
  const result = await fetch(API);
  return result.json();
};

export const search = async (searchTerm, sortBy) => {
  const { items } = await searchApi(searchTerm, sortBy);
  return items.map(item => ({
    stars: item.stargazers_count,
    id: item.id,
    repo: item.full_name,
    description: item.description,
    url: item.html_url,
  }));
};
