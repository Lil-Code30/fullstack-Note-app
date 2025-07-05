import { useCategories } from "../contexts/CategoriesContext";
import { postNewNote } from "../api";

export default function AddNote() {
  const { categories } = useCategories();
  const categoryEl = categories.map((c) => (
    <option key={c.id} value={c.name.toLowerCase()}>
      {c.name}
    </option>
  ));

  const handleSubmit = (formData) => {
    const title = formData.get("title");
    const category = formData.get("categories");
    const content = formData.get("content");

    const newPost = {
      title,
      category,
      content,
    };
    postNewNote(newPost);
  };
  return (
    <form action={handleSubmit} class="max-w-sm mx-auto">
      <div class="mb-5">
        <label
          for="title"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Note Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Note title here"
          required
        />
      </div>
      <div class="mb-5">
        <label
          for="categories"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select a category
        </label>
        <select
          id="categories"
          name="categories"
          required
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option disabled>Choose a category</option>
          {categoryEl}
        </select>
      </div>
      <div class=" mb-5">
        <label
          for="content"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Note content
        </label>
        <textarea
          id="content"
          rows="4"
          name="content"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your content"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Create
      </button>
    </form>
  );
}
