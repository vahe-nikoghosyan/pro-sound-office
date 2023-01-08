import { Box, Container } from "@mui/material";
import styles from "../../styles/HomeBlog.module.scss";

export default function JoinCommunity() {
  return (
    <section className={styles.homeJoinCommunityContainer}>
      <Container maxWidth="lg">
        <Box className={styles.homeJoinCommunityContainerBottom}>
          Join out community
        </Box>
      </Container>
    </section>
  );
}
