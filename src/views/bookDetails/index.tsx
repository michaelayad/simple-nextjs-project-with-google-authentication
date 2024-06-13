/* eslint-disable @next/next/no-img-element */
import { Api } from "@/services";
import type { BookType } from "@/types/bookType";
import Image from "next/image";
import Link from "next/link";

export default async function BookDetails({ id }: { id: number }) {
  const book = await Api.books.getBookById(id);

  return (
    <div className="container mx-auto px-12 py-16 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-lg shadow-lg">
      <div className="flex flex-wrap gap-10">
        <div className="w-48 h-48">
          <img
            className=" h-auto object-cover rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
            src={book.cover_image}
            alt={book.title}
          />
        </div>
        <div className="flex-1 px-10">
          <h1 className="text-4xl font-bold mb-6 text-blue-600">{book.title}</h1>
          <p className="text-gray-200 mb-4">
            By {book.author} ({book.publication_year})
          </p>
          <p className="text-gray-200 mb-4">Genre: {book.genre.join(", ")}</p>
          <p className="text-gray-200 mb-8">{book.description}</p>
          <Link
            href="/books"
            className="text-indigo-100 font-bold hover:underline bg-sky-300 px-4 py-2 rounded-md shadow-sm"
          >
            Back to Books
          </Link>
        </div>
      </div>
    </div>
  );
}
