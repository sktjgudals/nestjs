export const getApi = async (): Promise<any[]> => {
  try {
    const url = `http://localhost:4000/to-do/`;
    const urlOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const res = await fetch(url, urlOptions);
    const result = await res.json();
    if (result) return result;
    else return [];
  } catch (e) {
    if (e) return [];
  }
  return [];
};
