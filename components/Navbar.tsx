import { Fragment, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "../utils/Link";
import NavbarProductToolbar from "./Home/NavbarProductToolbar";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { productData } from "../pages/products";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Products",
    path: "/products",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Support",
    path: "/support",
  },
];

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Link href="/" color="secondary">
        <Typography variant="h6" sx={{ my: 2 }}>
          MUI
        </Typography>
      </Link>

      <Divider />
      <List>
        {navItems.map(({ title, path }) => {
          if (title.toLowerCase() === "products") {
            return (
              <Fragment key={path}>
                <ListItemButton onClick={handleClick}>
                  <ListItemText primary={title} />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                      bgcolor: "background.paper",
                      position: "relative",
                      overflow: "auto",
                      maxHeight: 300,
                      "& ul": { padding: 0 },
                    }}
                    subheader={<li />}
                  >
                    {productData.categories.map((category) => (
                      <li key={`section-${category.id}`}>
                        <ul>
                          <ListSubheader>{category.title}</ListSubheader>
                          {category.subcategories?.map((item) => (
                            <ListItem key={`item-${category.id}-${item.title}`}>
                              <Link href={`/products?${category.id}`}>
                                <ListItemText primary={item.title} />
                              </Link>
                            </ListItem>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </List>
                  {/*<List component="div" disablePadding>*/}
                  {/*  <ListItemButton sx={{ pl: 4 }}>*/}
                  {/*    <ListItemIcon>*/}
                  {/*      <CategoryIcon />*/}
                  {/*    </ListItemIcon>*/}
                  {/*    <ListItemText primary="Starred" />*/}
                  {/*  </ListItemButton>*/}
                  {/*</List>*/}
                </Collapse>
              </Fragment>
              // <Link href={path} key={title} color="secondary">
              // <ListItem disablePadding key={title}>
              //   <ListItemButton sx={{ textAlign: "center" }}>
              //     <ListItemText primary={title} />
              //   </ListItemButton>
              // </ListItem>
              // </Link>
            );
            //
            // console.log("path", path)
          }
          return (
            <Link href={path} key={title} color="secondary">
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemText primary={title} />
                </ListItemButton>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar
          sx={{
            display: "flex",
            maxWidth: "lg",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link href="/" color="secondary">
              MUI
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(({ title, path }) => {
              if (title.toLowerCase() === "products") {
                return <NavbarProductToolbar title={title} key={title} />;
              }
              return (
                <Link href={path} key={title} color="secondary">
                  <Button sx={{ color: "#fff" }}>{title}</Button>
                </Link>
              );
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
