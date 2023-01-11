import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "../../styles/HomeBlog.module.scss";

export default function HomeBlog() {
  const [blogsCount, setBlogsCount] = useState(6);
  const matchesWeb = useMediaQuery("(min-width:901px)");
  const matchesTablet = useMediaQuery("(max-width:900px)");
  const matchesMobile = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    if (matchesTablet) {
      setBlogsCount(4);
    }
    if (matchesWeb) {
      setBlogsCount(6);
    }
    if (matchesMobile) {
      setBlogsCount(2);
    }
  }, [matchesWeb, matchesTablet, matchesMobile]);

  return (
    <section className={styles.homeBlogContainer}>
      <Container maxWidth="lg">
        <Box className={styles.homeBlogContainerTop}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            textAlign="center"
          >
            {Array.from(Array(blogsCount)).map((_, index) => (
              <Grid item xs={2} sm={2} md={2} key={index}>
                <Typography
                  variant="h4"
                  sx={{ color: "white" }}
                  fontWeight="bolder"
                  key={index}
                >
                  BLOG
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
