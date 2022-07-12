export const deleteApi = async (id: number): Promise<any[]> => {
  try {
    const url = `http://localhost:4000/to-do/${id}`;

    const urlOptions = {
      method: "DELETE",
    };
    const res = await fetch(url, urlOptions);
    console.log(res);
    const result = await res.json();
    if (result) return result;
    else return [];
  } catch (e) {
    if (e) return [];
  }
  return [];
};
