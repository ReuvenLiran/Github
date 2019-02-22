const searchApi = async (searchTerm) => {
  const API = `https://api.github.com/search/repositories?q=${searchTerm}&sort=stars&order=desc`;
  const result = await fetch(API);
  return await result.json();
};

export const search = async (searchTerm) => {
  const { items } = await searchApi(searchTerm);
  return items.map(item => ({
    stars: item.stargazers_count,
    id: item.id,
    repo: item.full_name,
    description: item.description,
  }));
};

