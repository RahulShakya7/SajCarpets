"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  AppBar,
  Avatar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import CategoryIcon from "@mui/icons-material/Category";
import PeopleIcon from "@mui/icons-material/People";

const drawerWidth = 260;

const navItems = [
  { label: "Dashboard", icon: <DashboardIcon />, href: "/admin" },
  { label: "Products", icon: <Inventory2Icon />, href: "/admin/products" },
  { label: "Categories", icon: <CategoryIcon />, href: "/admin/categories" },
  { label: "Users", icon: <PeopleIcon />, href: "/admin/users" },
];

export default function DashboardLayout({ children }) {
  const [open, setOpen] = React.useState(true);
  const pathname = usePathname();

  return (
    <Box sx={{ display: "flex", minHeight: "100dvh", bgcolor: "background.default" }}>
      {/* Top bar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: "background.paper",
          color: "text.primary",
          boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* left side: menu toggle + title */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton edge="start" onClick={() => setOpen((o) => !o)}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Admin Panel
            </Typography>
          </Box>

          {/* right side: user avatar etc */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar
              sx={{
                bgcolor: "primary.main",
                width: 36,
                height: 36,
                fontSize: 14,
                fontWeight: 600,
              }}
            >
              AD
            </Avatar>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="persistent"
        open={open}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "1px solid rgba(0,0,0,0.08)",
            bgcolor: "background.paper",
          },
        }}
      >
        {/* Push content below top bar height */}
        <Toolbar />
        <Divider />

        <List sx={{ py: 0 }}>
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemButton
                  selected={active}
                  sx={{
                    "&.Mui-selected": {
                      bgcolor: "rgba(0,0,0,0.04)",
                      borderLeft: (theme) =>
                        `4px solid ${theme.palette.primary.main}`,
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: active ? "primary.main" : "text.secondary",
                      minWidth: 40,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>

                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      sx: {
                        fontWeight: active ? 600 : 400,
                        color: active ? "primary.main" : "text.primary",
                      },
                    }}
                  />
                </ListItemButton>
              </Link>
            );
          })}
        </List>
      </Drawer>

      {/* Main content area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          minWidth: 0,
          p: { xs: 2, sm: 3, md: 4 },
          bgcolor: "background.default",
        }}
      >
        {/* spacer so content isn't hidden under AppBar */}
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
