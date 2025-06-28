import Link from "next/link";
import { getFoodItems } from "@/lib/supabase-server";
import { Suspense } from "react";
import { PaginationClient } from "./Pagination-client";

export type FoodItem = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  created_at: string;
};

interface PageProps {
  searchParams?: { page?: string };
}

export default async function HeroSection({ searchParams }: PageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const { data: foodItems, totalPages } = await getFoodItems(currentPage, 4);

  return (
    <main className="container mx-auto px-4 py-8 mt-20">
      {foodItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No food items found.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {foodItems.map((item) => (
              <Link
                key={item.id}
                href={`/food-detail/${item.id}`}
                className="flex flex-col group"
              >
                <div className="relative h-64 w-full mb-3">
                  <img
                    src={item.image_url}
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105 rounded-xl"
                  />
                </div>
                <h2 className="text-2xl text-center mb-2">{item.title}</h2>
                <p className="text-sm text-gray-600 text-center">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Suspense
              fallback={
                <div className="text-center">Loading pagination...</div>
              }
            >
              <PaginationClient
                currentPage={currentPage}
                totalPages={totalPages}
              />
            </Suspense>
          </div>
        </>
      )}
    </main>
  );
}

export async function generateMetadata({ searchParams }: PageProps) {
  const currentPage = Number(searchParams?.page) || 1;

  return {
    title: `My Food - Page ${currentPage}`,
    description: `Browse our delicious food items - Page ${currentPage}`,
  };
}
