import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import styles from "../styles/Footer.module.scss";
import Link from "../utils/Link";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import Button from "@mui/material/Button";
const footerData = [
  {
    title: "services",
    properties: [
      { title: "Equipment Sales", path: "/" },
      { title: "Equipment Rental", path: "/" },
      { title: "Equipment Maintenance", path: "/" },
      { title: "Sound System Design & Setup", path: "/" },
      { title: "Sound System Consultancy", path: "/" },
      { title: "Room Acoustic Design", path: "/" },
    ],
  },
  {
    title: "products",
    properties: [
      { title: "Funktion-One", path: "/" },
      { title: "Other Brands", path: "/" },
    ],
  },
  {
    title: "our partners",
    properties: [
      { title: "Funktion-One", path: "/" },
      { title: "Other", path: "/" },
    ],
  },
  {
    title: "contact",
    properties: [
      { title: "Telegram", path: "/" },
      { title: "Twitter", path: "/" },
      { title: "Blog", path: "/" },
    ],
  },
];

export interface FooterData {
  title: string;
  properties?: FooterData[];
}

function Footer() {
  return (
    <footer
      className={styles.section}
      style={{
        backgroundColor: "rgb(38, 38, 38)",
        width: "100vw",
        maxWidth: "100%",
        paddingTop: "24px",
        paddingBottom: "24px",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container columns={{ xs: 4, sm: 10, md: 12 }}>
            {footerData != null &&
              footerData?.map((item, index) => (
                <Grid
                  item
                  xs={3}
                  sm={3}
                  md={3}
                  key={item.title}
                  textAlign="start"
                  marginTop="10px"
                  marginBottom="10px"
                >
                  <Typography variant="h5" gutterBottom sx={{ color: "white" }}>
                    {item.title.toUpperCase()}
                  </Typography>
                  {item.properties != null &&
                    item.properties?.map(({ title, path }) => {
                      return (
                        <Link href={path} key={title} color="inherit">
                          <Typography
                            className={styles.title}
                            variant="subtitle1"
                            gutterBottom
                            sx={{ color: "rgb(103, 103, 103)" }}
                          >
                            {title}
                          </Typography>
                        </Link>
                      );
                    })}
                </Grid>
              ))}
          </Grid>
        </Box>
      </Container>
    </footer>
  );
}

export default Footer;
