"use client";

import useStoreModal from "@/app/hooks/useStoreModal";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Home() {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);

  return (
    <main className="flex min-h-screen flex-col gap-4 items-start p-5">
      <div>
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
      <div className="h-screen w-full flex flex-col gap-4 justify-center items-center">
        <div className="text-base">KEEP CALM, WE DEY COOOOK🧑‍🍳🥘!</div>
        <Button>CLICK ME</Button>
      </div>
    </main>
  );
}
