export const addApi = async (
  id: number,
  toDo: string,
  isDone: boolean
): Promise<boolean> => {
  try {
    const url = `http://localhost:4000/to-do/${id}`;
    const urlOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description: toDo, isDone }),
    };
    const res = await fetch(url, urlOptions);
    const result = await res.json();
    if (result) return true;
    else return false;
  } catch (e) {
    if (e) return false;
  }
  return false;
};
