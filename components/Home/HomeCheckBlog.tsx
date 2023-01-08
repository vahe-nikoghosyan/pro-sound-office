import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";

import styles from "../../styles/HomeCheckBlog.module.scss";
import { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const homeCheckBlogs = [
  {
    title: "Event",
    imagePath: "/assets/home-blog-1.jpg",
  },
  {
    title: "Event",
    imagePath: "/assets/home-blog-2.jpg",
  },
  {
    title: "Event",
    imagePath: "/assets/home-blog-3.jpg",
  },
  {
    title: "Event",
    imagePath: "/assets/home-blog-4.jpg",
  },
  {
    title: "Event",
    imagePath: "/assets/home-blog-7.jpg",
  },
  {
    title: "Event",
    imagePath: "/assets/home-blog-6.jpg ",
  },
];

export default function HomeCheckBlog() {
  const [imagesCount, setImagesCount] = useState(6);
  const matchesWeb = useMediaQuery("(min-width:901px)");
  const matchesTablet = useMediaQuery("(max-width:900px)");
  const matchesMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    if (matchesTablet) {
      setImagesCount(4);
    }
    if (matchesWeb) {
      setImagesCount(6);
    }
    if (matchesMobile) {
      setImagesCount(2);
    }
  }, [matchesWeb, matchesTablet, matchesMobile]);

  return (
    <section className={styles.homeCheckBlogContainer}>
      <Container maxWidth="lg">
        <Box sx={{ position: "relative" }}>
          <Grid
            container
            spacing={{ xs: 0, md: 0 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {homeCheckBlogs
              .slice(0, imagesCount)
              .map(({ imagePath, title }, index) => (
                <Grid
                  item
                  xs={4}
                  sm={4}
                  md={4}
                  key={index}
                  sx={{ position: "relative" }}
                >
                  <Image
                    src={imagePath}
                    alt={title}
                    width={500}
                    height={500}
                    layout="responsive"
                  />
                  <div className={styles.homeCheckBlogContainerImageOverley} />
                </Grid>
              ))}
          </Grid>
          <Box className={styles.homeCheckBlogContainerAction}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              CHECK OUR BLOG
            </Typography>
            <Typography
              sx={{ color: "#9f9f9f", fontSize: "15px", marginBottom: "20px" }}
              gutterBottom
            >
              Tune in to discover Pro Sound Office news and updates first-hand.
              Browse to explore our expect educational pieces, manuals, and
              more.
            </Typography>
            <Button variant="contained">See more</Button>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
