import Box from "@mui/material/Box";
import {
  FormControl,
  Grid,
  InputBase,
  InputLabel,
  Menu,
  Tooltip,
  Button,
  Typography,
} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SearchIcon from "@mui/icons-material/Search";

import { useState, useEffect, ChangeEvent, MouseEvent } from "react";
import { ProductCategory, productData } from "../../pages/products";

import styles from "../../styles/Navbar.module.scss";

export default function NavbarProductToolbar({ title }: any) {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<{
    name: string;
    title?: string;
  } | null>(null);
  const [subCategories, setSubCategories] = useState<ProductCategory[] | null>(
    null
  );
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  useEffect(() => {
    if (selectedCategory) {
      const found = productData.categories.find(
        ({ id }) => id === selectedCategory.name
      );
      setSubCategories(found?.subcategories || []);
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (searchValue && searchValue.length > 0) {
      const allCategories = productData.categories.map((c) => {
        return c.subcategories?.map((sc) => {
          return sc;
        });
      });
      if (allCategories != null) {
        setSubCategories(
          allCategories.flat().filter(Boolean) as ProductCategory[]
        );
      }
    } else {
      setSubCategories(null);
    }
  }, [searchValue]);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <Box
      sx={{ display: "inline-block" }}
      className={styles.menuNavAppbarContainer}
    >
      <Tooltip title="Products menu">
        <Button
          onClick={handleOpenUserMenu}
          sx={{ color: anchorElUser ? "#e7a13a" : "#fff" }}
        >
          {title}{" "}
          {anchorElUser ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}{" "}
        </Button>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <Box className={styles.menuNavAppbar}>
          {selectedCategory == null && (
            <FormControl
              sx={{ width: "100%" }}
              className={styles.menuNavAppbarSearchParent}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: "18px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <SearchIcon />
                &nbsp;Search
              </Typography>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Product"
                inputProps={{ "aria-label": "product" }}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setSearchValue(event.target.value);
                }}
              />
            </FormControl>
          )}

          <Box
            component="div"
            className={`${styles.menuNavAppbarButtonParent} ${
              selectedCategory != null && styles.activeBtn
            }`}
          >
            {selectedCategory == null ? (
              <>
                <Button
                  onClick={(event: MouseEvent<HTMLButtonElement>) => {
                    event.preventDefault();

                    const button: HTMLButtonElement = event.currentTarget;
                    const found = productData.categories.find(
                      ({ id }) => id === button.name
                    );
                    setSelectedCategory({
                      name: button.name,
                      title: found?.title,
                    });
                  }}
                  name="funktion"
                >
                  Funktion one
                </Button>
                <Button
                  onClick={(event: MouseEvent<HTMLButtonElement>) => {
                    event.preventDefault();

                    const button: HTMLButtonElement = event.currentTarget;
                    const found = productData.categories.find(
                      ({ id }) => id === button.name
                    );
                    setSelectedCategory({
                      name: button.name,
                      title: found?.title,
                    });
                  }}
                  name="other"
                >
                  Other Brand
                </Button>
              </>
            ) : (
              <Button
                className={styles.clickedBtn}
                onClick={(event: MouseEvent<HTMLButtonElement>) => {
                  event.preventDefault();
                  setSelectedCategory(null);
                  setSubCategories(null);
                }}
                name={selectedCategory.name}
              >
                {selectedCategory?.title}
              </Button>
            )}
          </Box>
          <Box
            sx={{ flexGrow: 1 }}
            className={styles.menuNavAppbarSubCategoriesParent}
          >
            <Grid container spacing={2}>
              {subCategories
                ?.filter((el) =>
                  el.title.toLowerCase().includes(searchValue.toLowerCase())
                )
                ?.map((sc) => {
                  return (
                    <Grid item xs={6} md={6} key={sc.title}>
                      {sc.title}
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
        </Box>
      </Menu>
    </Box>
  );
}
