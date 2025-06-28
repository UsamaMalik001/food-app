import { FOOD_ITEMS } from "@/constants";
import { supabase } from "@/lib/supabaseClient";
import { notFound } from "next/navigation";

export default async function FoodDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { data, error } = await supabase
    .from(FOOD_ITEMS)
    .select("*")
    .eq("id", params.id)
    .single();

  if (error || !data) {
    return notFound();
  }

  return (
    <main className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center">
        <div className="relative h-96 w-full max-w-2xl mb-6">
          <img
            src={data.image_url ?? "/placeholder.svg"}
            alt={data.title}
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
        <h1 className="text-4xl font-semibold mb-4">{data.title}</h1>
        <p className="text-lg text-gray-700 max-w-prose text-center">
          {data.description}
        </p>
      </div>
    </main>
  );
}
