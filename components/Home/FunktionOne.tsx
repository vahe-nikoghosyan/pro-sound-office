import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import styles from "../../styles/FunktionOne.module.scss";
import Image from "next/image";
export default function FunktionOne() {
  return (
    <section className={styles.funktionOneContainer}>
      <Container maxWidth="lg">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} md={6} paddingBottom="40px">
            <Image
              src={"/assets/home-funktion-one-logo.png"}
              alt={"logo"}
              width={500}
              height={50}
              layout="responsive"
            />
            <Typography
              sx={{
                color: "#a2a2a2",
                marginBottom: "40px",
                fontSize: "18px",
                lineHeight: "35px",
              }}
              gutterBottom
            >
              Landmark audio manufacturing company, born from the mind of the
              award-winning visionary and industry pioneer Tony Andews.
            </Typography>
            <Typography
              sx={{
                color: "#a2a2a2",
                marginBottom: "40px",
                fontSize: "18px",
                lineHeight: "35px",
              }}
            >
              A legend within the professional sound community, Funktion-One is
              highly demanded in a variety of areas, with installations from
              London`s Millennium Dome to global-scale EDM festivals. Being
              especially regarded within the electronic dance music scene, it is
              the main sound system across world-renowned nightclubs such as
              Berghain, Cielo, and Space Ibiza. Our engineers brought
              Funktion-One to Armenia with a first-time-ever installation for
              Yerevan`s Scanner Club, now widely acclaimed for outstanding
              excellence of sound.
            </Typography>
            <Button
              fullWidth
              sx={{
                backgroundColor: "white",
                color: "black",
                fontWeight: "bold",
                borderRadius: "0",
              }}
            >
              Browse products
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src={"/assets/home-funktion-one.png"}
              alt="Tony Andews"
              width={500}
              height={500}
              layout="responsive"
              style={{
                objectFit: "cover",
              }}
              className={styles.funktionOneContainerMadeOf}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
