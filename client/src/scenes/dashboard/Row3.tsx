import DashboardBox from "@/components/DashboardBox";
import BoxHeader from "@/components/BoxHeader";
import FlexBetween from "@/components/FlexBetween";
import { Box, Typography, useTheme } from "@mui/material";
import { useMemo } from "react";
import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} from "@/state/api";
import { DataGrid, GridCellParams } from "@mui/x-data-grid";

const productColumns = [
  {
    field: "_id",
    headerName: "id",
    flex: 1,
  },
  {
    field: "expense",
    headerName: "Expense",
    flex: 0.5,
    renderCell: (params: GridCellParams) => `$${params.value}`,
  },
  {
    field: "price",
    headerName: "Price",
    flex: 0.5,
    renderCell: (params: GridCellParams) => `$${params.value}`,
  },
];

const Row3 = () => {
  const { palette } = useTheme();
  const { data: operationalData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  const { data: transactionsData } = useGetTransactionsQuery();
  console.log("data:", transactionsData);

  return (
    <>
      {/* TABLE 1 */}
      <DashboardBox bgcolor="#fff" gridArea="g">
        <BoxHeader title="List of Products" sideText="+4%" />
        <Box
          mt="0.5rem"
          p="0 0.5rem"
          height="75%"
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none",
            },
            // "& .MuiDataGrid-toolbarContainer:hover .MuiButton-text": {
            //   color: `${palette.secondary[800]} !important`,
            // },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnSeparator": {
              visibility: "hidden",
            },
          }}
        >
          <DataGrid
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={productData || []}
            columns={productColumns}
          />
        </Box>
      </DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="h"></DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="i"></DashboardBox>
      <DashboardBox bgcolor="#fff" gridArea="j"></DashboardBox>
    </>
  );
};

export default Row3;
