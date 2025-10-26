// /app/admin/sections/dashboard/StatsGrid.jsx
"use client";

import { Grid, Card, CardContent, Typography } from "@mui/material";

export default function StatsGrid() {
  // mock data for now
  const stats = [
    { label: "Total Sales", value: "£12,450", change: "+12%" },
    { label: "Orders Today", value: "38", change: "+5%" },
    { label: "Active Users", value: "1,284", change: "+2%" },
    { label: "Low Stock", value: "6 SKUs", change: null },
  ];

  return (
    <Grid container spacing={3}>
      {stats.map((s) => (
        <Grid item xs={12} sm={6} md={3} key={s.label}>
          <Card>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary">
                {s.label}
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 600, mt: 1 }}>
                {s.value}
              </Typography>
              {s.change && (
                <Typography
                  variant="body2"
                  color="success.main"
                  sx={{ fontWeight: 500 }}
                >
                  {s.change} vs last week
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
