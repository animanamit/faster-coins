import { CoinDisplay } from "@/components/mine/coin-display";

export default function Home() {
  return (
    <div className="flex flex-col gap-[32px] h-screen w-screen p-4">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>lets try again with coin collection</h1>
        <CoinDisplay />
      </main>
    </div>
  );
}
