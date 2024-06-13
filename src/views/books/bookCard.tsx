import type { BookType } from "@/types/bookType";
import Image from "next/image";
import Link from "next/link";

const BookCard = ({ book }: { book: BookType }) => {
  return (
    <Link href={`/books/${book.id}`}>
      <div className="w-full rounded overflow-hidden shadow-md ">
        <Image
          className="w-full h-48 object-cover"
          src={book.cover_image}
          alt={book.title}
          width={100}
          height={100}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{book.title}</div>
          <p className="text-gray-700 text-base">
            By {book.author} ({book.publication_year})
          </p>
          <p className="text-gray-600 text-sm mt-2">{book.genre.join(", ")}</p>
          <p className="text-gray-700 mt-4">{book.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
