export const deleteApi = async (id: number): Promise<any[]> => {
  try {
    const url = `http://localhost:4000/to-do/`;

    const urlOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(id),
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
