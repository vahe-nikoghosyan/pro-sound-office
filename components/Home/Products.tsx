import Link from "../../utils/Link";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material/styles";
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import styles from "../../styles/HomeProduct.module.scss";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  cursor: "pointer",
  padding: theme.spacing(2),
  borderRadius: "0",
  color: theme.palette.text.secondary,
}));

const homeProductsData = [
  {
    id: "p1",
    title: "psm318",
    imagePath: "/assets/home-product-1.png",
    description:
      "PSM318 DJ Monitor delivers outstanding full frequency output, accuracy and immediacy, setting a new benchmark for DJs looking for ultimate stage sound",
  },
  {
    id: "p2",
    title: "psm318",
    imagePath: "/assets/home-product-2.png",
    description:
      "PSM318 DJ Monitor delivers outstanding full frequency output, accuracy and immediacy, setting a new benchmark for DJs looking for ultimate stage sound",
  },
  {
    id: "p3",
    title: "psm318",
    imagePath: "/assets/home-product-3.png",
    description:
      "PSM318 DJ Monitor delivers outstanding full frequency output, accuracy and immediacy, setting a new benchmark for DJs looking for ultimate stage sound",
  },
];
export default function Products() {
  return (
    <section className={styles.homeProductContainer}>
      <Container maxWidth="lg">
        <Box marginBottom="30px">
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            PRODUCTS
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ marginBottom: "30px" }}
            gutterBottom
          >
            Our curated selection of sound equipment is characterized by high
            efficiency, excellent intelligibility, and outstanding performance.
          </Typography>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Typography
              variant="h6"
              sx={{ whiteSpace: "nowrap", marginRight: "20px" }}
              fontWeight="bold"
            >
              FUNKTION ONE
            </Typography>
            <div className={styles.homeProductContainerFunktionOneLine}></div>
          </Box>
        </Box>
        <Box>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {homeProductsData.map(
              ({ id, title, description, imagePath }, index) => {
                const listItem = homeProductsData.length - 1 === index;
                return (
                  <Grid item xs={12} sm={4} md={4} key={id}>
                    <Link href={"/about"}>
                      <Item>
                        <Image
                          src={imagePath}
                          alt={title}
                          width={500}
                          height={500}
                          layout="responsive"
                        />
                        <Typography
                          variant="h5"
                          fontWeight="bold"
                          sx={{ color: "black" }}
                        >
                          {title.toUpperCase()}
                        </Typography>
                        <Typography>{description}</Typography>
                      </Item>
                      {listItem && (
                        <Button
                          fullWidth
                          variant="contained"
                          sx={{
                            marginTop: "40px",
                            backgroundColor: "black",
                            color: "white",
                            borderRadius: "0",
                            fontWeight: "bold",
                            padding: "10px 20px",
                          }}
                        >
                          See all
                        </Button>
                      )}
                    </Link>
                  </Grid>
                );
              }
            )}
          </Grid>
          <div className={styles.homeProductContainerSeeAllLine}>
            <ArrowForwardIosIcon />
          </div>
        </Box>
      </Container>
    </section>
  );
}
