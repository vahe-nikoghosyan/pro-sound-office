import {Container} from "@mui/material";

export interface ProductCategory {
    title: string,
    id?: string,
    subcategories?: ProductCategory[]
}

export interface ProductData {
    categories: ProductCategory[]
}

export const productData: ProductData = {
    categories: [
        {
            title: "Funktion one",
            id: "funktion",
            subcategories: [
                {
                    title: "All Rangers",
                },
                {
                    title: "Evolution",
                },
                {
                    title: "Compact",
                },

                {
                    title: "Resolution",
                },

                {
                    title: "Public Address",
                },

                {
                    title: "Electronics",
                },
                {
                    title: "Vero",
                },

                {
                    title: "Vero VX",
                },

                {
                    title: "Bass",
                },

                {
                    title: "Dance Stack",
                },
                {
                    title: "Monitor",
                },
                {
                    title: "Other",
                },
            ]
        },
        {title: "Other brands", id: "other"},
    ]
}
export default function Products() {
    return (
        <section>
            <Container>
                Products
            </Container>
        </section>
    )
}