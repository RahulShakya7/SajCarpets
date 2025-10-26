// /app/admin/page.jsx
"use client";

import { Box, Typography } from "@mui/material";
import StatsGrid from "./sections/dashboard/StatsGrid";
// import SalesChart from "./sections/dashboard/SalesChart"; // once you copy it

export default function AdminDashboardPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: 600 }}>
        Dashboard
      </Typography>

      <StatsGrid />

      {/* <SalesChart /> etc */}
    </Box>
  );
}
