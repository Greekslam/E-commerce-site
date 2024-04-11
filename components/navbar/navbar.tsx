import { UserButton, auth } from "@clerk/nextjs";
import Navlinks from "./navlinks";
import StoreSelector from "./store-selector";
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="w-full p-3 flex items-center border-b">
      <StoreSelector items={stores} />
      <Navlinks className="mx-6" />
      <div className="ml-auto">
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </div>
  );
};

export default Navbar;
