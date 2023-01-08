import { Button, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import styles from "../../styles/ProSound.module.scss";

const BtnRoot = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    gap: "25px",
    flexDirection: "row",
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    gap: "25px",
    flexDirection: "column",
  },
}));
export default function ProSound() {
  return (
    <section className={styles.proSection}>
      <Container maxWidth="lg">
        <div className={styles.proSoundsContainer}>
          <div className={styles.proSoundsContainerItem}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ color: "white", fontWeight: "bold" }}
            >
              PRO SOUND OFFICE
            </Typography>
            <div className={styles.proSoundsContainerItemBottomLine}></div>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ color: "white", fontWeight: "500" }}
            >
              Pro Sound Office is an independent Yerevan-based company
              specializing in sound engineering and audio equipment
              distribution.
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: "white", fontWeight: "500" }}
            >
              Coming from 25+ years of professional experience, we provide
              contemporary design & engineering services as well as equipment
              sales and rental options.
            </Typography>
            <BtnRoot>
              <Button
                variant="contained"
                className={`${styles.btn} ${styles.discoverBtn}`}
              >
                Discover more
              </Button>
              <Button className={`${styles.btn} ${styles.reachBtn}`}>
                Reach out to us
              </Button>
            </BtnRoot>
          </div>
          <div />
        </div>
      </Container>
    </section>
  );
}
