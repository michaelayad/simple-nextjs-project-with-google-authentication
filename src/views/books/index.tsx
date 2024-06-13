import { Api } from "@/services";
import BookCard from "./bookCard";
import type { BookType}  from "@/types/bookType"


export default async function Books() {
    const allBooks = await Api.books.getAllBook() ;
    // console.log(allBooks)
  return (
    <>
    {allBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </>
  );
}
