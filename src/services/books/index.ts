import { BookType } from "@/types/bookType";
import { NextResponse } from "next/server";

export const BooksApiEndPoints = {
  getAllBook: async function (): Promise<BookType[]> {
    const res = await fetch("https://freetestapi.com/api/v1/books", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    const delay = new Promise((resolve) => setTimeout(resolve, 2000));
    await delay;

    return data;
  },
  getBookById: async function (id:number): Promise<BookType> {
    const res = await fetch(`https://freetestapi.com/api/v1/books/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    const delay = new Promise((resolve) => setTimeout(resolve, 2000));
    await delay;

    return data;
  },
};
