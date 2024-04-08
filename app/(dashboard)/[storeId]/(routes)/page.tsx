import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface DashboardPageProps {
  params: {
    storeId: string;
  };
}

const DashboardPage: React.FC<DashboardPageProps> = ({ params }) => {
  return <div>DashboardPage</div>;
};

export default DashboardPage;
