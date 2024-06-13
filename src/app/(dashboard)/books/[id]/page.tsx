import BookDetailsSkeleton from "@/components/skeletons/bookDetailsSkeleton";
import BookDetails from "@/views/bookDetails";
import { Suspense } from "react";

export default async function BookItemApp({ params }: { params: { id: string } }) {
  return (
    
        <Suspense fallback={<BookDetailsSkeleton />}>
          <BookDetails id={Number(params.id)}/>
        </Suspense>
      
  );
}
