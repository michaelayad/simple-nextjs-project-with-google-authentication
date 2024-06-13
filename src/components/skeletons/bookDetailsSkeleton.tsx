import type { BookType } from "@/types/bookType";
import Image from "next/image";

const BookDetailsSkeleton = () => {
  const arr = new Array(20).fill("a");
  return (
    <>
      <div className="container mx-auto px-12 py-16 bg-white rounded-lg shadow-md animate-pulse">
        <div className="flex flex-wrap gap-10">
          <div className="w-48 h-48 bg-gray-300 rounded-lg animate-pulse"></div>
          <div className="flex-1 px-10">
            <div className="h-12 bg-gray-300 rounded-lg animate-pulse mb-6"></div>
            <div className="w-full h-4 bg-gray-300 rounded-lg mb-4 animate-pulse"></div>
            <div className="w-3/4 h-2 bg-gray-300 rounded-lg mb-4 animate-pulse"></div>
            <div className="h-20 bg-gray-300 rounded-lg animate-pulse mb-8"></div>
            <div className="h-6 bg-gray-300 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetailsSkeleton;
