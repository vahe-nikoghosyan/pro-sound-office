import styles from "../../styles/Service.module.scss";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "rgb(32,32,32)",
  ...theme.typography.body2,
  padding: "45px 16px",
  borderRadius: "0px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  cursor: "pointer",
  border: "2px solid #4d4d4d",
  "& > h4": {
    color: "white",
    fontSize: "1.8rem",
  },
  "&:hover h4": {
    color: "#e6a33a",
  },
  "& > button": {
    background: "white",
    color: "black",
  },
  "&:hover button": {
    background: "#e6a33a",
    color: "black",
    fontWeight: "bold",
  },
}));

const serviceData = [
  {
    title: "Equipment sales",
    description:
      "Browse our selection of critically acclaimed sonic equipment abd take your prefect pick. If any inquiries arise, help yourself to our consultancy service",
    button: "sales",
  },
  {
    title: "Equipment rental",
    description:
      "Our rental inventory assembles essential audio equipment solutions for a multitude of purposes. We offer you flexible rental terms with a personalized approach",
    button: "sales",
  },
  {
    title: "Equipment maintenance",
    description:
      "Keep the audio gear in A+ condition. We will service, maintain and repair your sound equipment to prolong its lifespan and prevent potential issues at an early stage.",
    button: "sales",
  },
  {
    title: "Sound system design & setup",
    description:
      "There is a unique set of sonic properties and needs for every space and every event type. We take the environment's characteristics and customer requirements into account to develop the most suitable and efficient sound system design & setup.",
    button: "sales",
  },
  {
    title: "ESound system consultancy",
    description:
      "Reach out to us far an in-depth consultation to evaluate, plan and design your ideal sound system setup. Our goal is to develop a setup which fulfills your desired objectives while complementing the architecture of the surrounding space.",
    button: "sales",
  },
  {
    title: "Room acoustic design",
    description:
      "When placed in an unprepared space, even the best sonic equipment will not produce high-quality audio. We work with aural variables such as reverberation time, sound reflection and loudness levels to optimize room acoustics and smooth out the environment's flaws.",
    button: "sales",
  },
];

export default function Service() {
  return (
    <section className={styles.serviceContainer}>
      <Container maxWidth="lg">
        <Box>
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold", color: "white" }}
          >
            SERVICES
          </Typography>
          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ color: "rgb(190, 190, 190)", letterSpacing: "1px" }}
          >
            Professional sound industry has evolved greatly over the past
            decade. The quality bar is constantly being raised, and intelligible
            sound is valued more than over. Our aim is to bring contemporary
            audio solutions ti emerging markets, with a special focus on
            present-day Armenia. From intimate ambient installs to large-scale
            public events, we offer services for commercial and residential
            applications. Our specialists have world with a broad spectrum of
            clients,including bars, theaters, nightclubs, malls, and sports
            arenas.
          </Typography>
          <Box sx={{ flexGrow: 1, marginTop: "30px" }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {serviceData.map(({ title, description, button }, index) => (
                <Grid
                  item
                  xs={12}
                  sm={4}
                  md={4}
                  key={index}
                  sx={{ display: "flex" }}
                >
                  <Item>
                    <Typography
                      variant="h4"
                      sx={{ color: "#999999", fontWeight: "bold" }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "#999999", margin: "20px 0 30px 0" }}
                    >
                      {description}
                    </Typography>
                    <Button
                      fullWidth
                      sx={{
                        color: "white",
                        borderRadius: "0px",
                      }}
                    >
                      {button}
                    </Button>
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
