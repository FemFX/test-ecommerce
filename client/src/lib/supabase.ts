import { createClient, SupabaseClient } from "@supabase/supabase-js";

import { createBrowserClient } from "@supabase/ssr";

// export function createClient() {
//   return createBrowserClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
//   );
// }
function createSupabaseClient(): SupabaseClient {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "",
    process.env.SUPABASE_SERVICE_ROLE_KEY || ""
  );
}

export async function fetchImageById(imageId: string) {
  const supabaseAdmin = createSupabaseClient();

  try {
    const { data, error } = await supabaseAdmin
      .from("images")
      .select("*")
      .eq("id", imageId);

    if (error) {
      throw new Error(error.message);
    }

    return { data, error };
  } catch (error: any) {
    console.error("Supabase error:", error.message);
    return { data: null, error: error.message };
  }
}
