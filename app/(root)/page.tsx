import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4 items-start p-5">
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
      <div className="h-screen w-full flex flex-col gap-4 justify-center items-center">
        <div className="text-base">KEEP CALM, WE DEY COOOOK🧑‍🍳🥘!</div>
        <Button>CLICK ME</Button>
      </div>
    </main>
  );
}
