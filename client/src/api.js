export async function fetchNotes() {
  const url = "http://localhost:8000/api/notes";
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const data = await res.json();

    return data;
  } catch (err) {
    console.log("Error when fetching for all the notes:", err.message);
  }
}

export async function fetchCategories() {
  const url = "http://localhost:8000/api/categories";
  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }
    const data = await res.json();

    return data;
  } catch (err) {
    console.log("Error when fetching for all the notes:", err.message);
  }
}

// APi to send new note to the backend
export async function postNewNote(newNote) {
  try {
    const url = "http://localhost:8000/post";
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNote),
    });
    const result = await res.json();
    console.log("Response :", result);
    return result;
  } catch (err) {
    console.log("error when adding new note: ", err.message);
  }
}
