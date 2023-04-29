import DashboardBox from "@/components/DashboardBox";
import { useGetTransactionsQuery } from "@/state/api";

const Row3 = () => {
  const { data: transactionsData } = useGetTransactionsQuery();
  console.log("data:", transactionsData);

  return (
    <>
      <DashboardBox bgcolor="#fff" gridArea="g"></DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="h"></DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="i"></DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="j"></DashboardBox>
    </>
  );
};

export default Row3;
