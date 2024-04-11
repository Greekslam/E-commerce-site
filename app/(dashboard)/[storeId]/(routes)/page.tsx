import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

interface DashboardPageProps {
  params: {
    storeId: string;
  };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <div className="mt-4 px-3">
      WELCOME TO {store?.name.toLocaleUpperCase()}
    </div>
  );
};

export default DashboardPage;
