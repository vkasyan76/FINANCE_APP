import DashboardBox from "@/components/DashboardBox";
import { useGetKpisQuery } from "@/state/api";

const Row1 = () => {
  const { data } = useGetKpisQuery();
  console.log("data:", data);

  return (
    <>
      <DashboardBox bgcolor="#fff" gridArea="a"></DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="b"></DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="c"></DashboardBox>
    </>
  );
};

export default Row1;

// if (!data) {
//   return <div>Loading...</div>;
// }

// const { data, isLoading } = useGetKpisQuery();

// if (isLoading) {
//   return <div>Loading...</div>;
// }

// const { data, isLoading, isError } = useGetKpisQuery();

// if (isLoading) {
//   return <div>Loading...</div>;
// }

// if (isError) {
//   return <div>Error fetching data</div>;
// }

// if (!data) {
//   return null;
// }

// console.log("data:", data);
