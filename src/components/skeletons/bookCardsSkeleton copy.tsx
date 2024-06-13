import type { BookType } from "@/types/bookType";
import Image from "next/image";

export function CardSkeleton() {
  return (
    <div className="w-full rounded overflow-hidden shadow-md m-0 p-0 animate-pulse">
      <div className="bg-gray-300 h-48 rounded shadow animate-pulse"></div>
      <div className="px-6 py-4">
        <div className="h-6 bg-gray-300 rounded mb-2 animate-pulse"></div>
        <div className="w-full h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
        <div className="w-3/4 h-2 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-12 bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  );
}

const BookCardsSkeleton = () => {
  const arr = new Array(20).fill("a");
  return (
    <>
      {arr.map((value, index) => (
        <CardSkeleton key={index} />
      ))}
    </>
  );
};

export default BookCardsSkeleton;
