"use client";

import {
    Box,
    Button,
    Card,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";

export default function AdminProductsPage() {
  // mock data, replace later with fetch('/api/admin/products')
  const rows = [
    { id: 1, name: "Luxury Carpet", price: 120, stock: 42 },
    { id: 2, name: "Classic Carpet", price: 350, stock: 10 },
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Card>
        <CardContent
          sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600 }}>
            Products
          </Typography>
          <Button variant="contained">Add Product</Button>
        </CardContent>
      </Card>

      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Price</TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Stock</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell>{row.name}</TableCell>
                <TableCell>£{row.price}</TableCell>
                <TableCell>{row.stock}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </Box>
  );
}
