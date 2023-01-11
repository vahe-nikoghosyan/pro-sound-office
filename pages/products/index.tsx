import Container from "@mui/material/Container";
import { GetServerSideProps } from "next";

export interface ProductCategory {
  title: string;
  id: string;
  subcategories?: ProductCategory[];
}

export interface ProductData {
  categories: ProductCategory[];
}

export const productData: ProductData = {
  categories: [
    {
      title: "Funktion one",
      id: "funktion",
      subcategories: [
        {
          title: "All Rangers",
          id: "rangers",
        },
        {
          title: "Evolution",
          id: "evolution",
        },
        {
          title: "Compact",
          id: "compact",
        },

        {
          title: "Resolution",
          id: "resolution",
        },

        {
          title: "Public Address",
          id: "public-address",
        },

        {
          title: "Electronics",
          id: "electronics",
        },
        {
          title: "Vero",
          id: "vero",
        },

        {
          title: "Vero VX",
          id: "vero-vx",
        },

        {
          title: "Bass",
          id: "bass",
        },

        {
          title: "Dance Stack",
          id: "dance-stack",
        },
        {
          title: "Monitor",
          id: "monitor",
        },
        {
          title: "Other",
          id: "other",
        },
      ],
    },
    { title: "Other brands", id: "other-brands" },
  ],
};

export interface ProductProps {
  id: string;
}
export default function Products() {
  return (
    <section>
      <Container>Products</Container>
    </section>
  );
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: false,
//   };
// };

export const getStaticProps: GetServerSideProps = async (context) => {
  // const id = context.query["id"];

  return {
    props: {},
  };
};
