export async function booksSearch(q, limit = 10) {
  const res = await fetch(
    `https://openlibrary.org/search.json?q=${q}&limit=${limit}`
  );
  return res.json();
}

export async function getDetailBook(id) {
  const res = await fetch(`https://openlibrary.org/works/${id}.json`);
  return res.json();
}

export async function getPopularBooks(limit = 10) {
  const res = await fetch(
    `https://openlibrary.org/search.json?q=popular&limit=${limit}`
  );
  return res.json();
}
