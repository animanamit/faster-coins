import CoinCard from "@/components/mine/coin-card";
import { createClient } from "@/utils/supabase";
export async function CoinDisplay() {
  const supabase = await createClient();
  const { data: coins, error } = await supabase
    .from("coins")
    .select("*")
    .order("id", { ascending: false })
    .limit(100);
  if (error) {
    console.error("Error fetching coins:", error);
    return <div>Error fetching coins</div>;
  }
  return (
    <div className="grid grid-cols-3 gap-4">
      {coins?.map((coin) => (
        <CoinCard key={coin.id} coin={coin} />
      ))}
    </div>
  );
}
