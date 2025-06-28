import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabaseServer = createClient(supabaseUrl, supabaseAnonKey);

export async function getFoodItems(page = 1, itemsPerPage = 4) {
  try {
    const from = (page - 1) * itemsPerPage;
    const to = from + itemsPerPage - 1;

    const { count, error: countError } = await supabaseServer
      .from("food_items")
      .select("*", { count: "exact", head: true });

    if (countError) {
      throw countError;
    }

    const { data, error } = await supabaseServer
      .from("food_items")
      .select("*")
      .range(from, to)
      .order("created_at", { ascending: false });

    if (error) {
      throw error;
    }

    return {
      data: data || [],
      totalItems: count || 0,
      totalPages: Math.ceil((count || 0) / itemsPerPage),
      currentPage: page,
    };
  } catch (error) {
    console.error("Error fetching food items:", error);
    throw error;
  }
}
