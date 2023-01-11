import Container from "@mui/material/Container";

import styles from "../../styles/ProductsPage.module.scss";
import NestedList from "./NestedList";
export default function ProductsPage() {
  return (
    <section className={styles.productsPageContainer}>
      <Container>
        <div>
          <NestedList />
        </div>
      </Container>
    </section>
  );
}
