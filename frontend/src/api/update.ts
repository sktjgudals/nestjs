export const updateApi = async (
  id: number,
  toDo: string,
  isDone: boolean
): Promise<number> => {
  try {
    const url = `http://localhost:4000/to-do/${id}`;
    const urlOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description: toDo, isDone }),
    };
    const res = await fetch(url, urlOptions);
    const result = await res.json();
    if (result) return result.id;
    else return 0;
  } catch (e) {
    if (e) return 0;
  }
  return 0;
};
