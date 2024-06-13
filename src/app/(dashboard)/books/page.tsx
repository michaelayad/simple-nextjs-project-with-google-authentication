import BookCardsSkeleton from "@/components/skeletons/bookCardsSkeleton copy";
import Books from "@/views/books";
import { Suspense } from "react";

export default async function BooksApp() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <h1 className="font-bold text-2xl pb-10">Books List</h1>
  
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
        {/* <BookCardsSkeleton/> */}
        <Suspense fallback={<BookCardsSkeleton />}>
          <Books />
        </Suspense>
      </div>
    </main>
  );
}
