import * as React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function About() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        About
      </Box>
    </Container>
  );
}
