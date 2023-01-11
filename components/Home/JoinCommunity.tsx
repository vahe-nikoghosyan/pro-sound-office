import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

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
