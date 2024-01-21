export async function booksSearch(q, limit) {
  const res = await fetch(
    `https://openlibrary.org/search.json?q=${q}&limit=${limit}`
  );
  return res.json();
}
