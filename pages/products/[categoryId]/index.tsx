import { GetStaticPaths, GetStaticProps } from "next";

export default function Category(props: any) {
  console.log("props", props);
  return <section>Category</section>;
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  // const subcategoriesIds = productData.categories
  //   .map((category) => {
  //     return category.subcategories?.map((sc) => sc.id);
  //   })
  //   .flat()
  //   .filter(Boolean) as string[];
  //
  // console.log("subcategoriesIds", subcategoriesIds);

  return {
    // paths: subcategoriesIds.map((id) => ({
    //   params: { categoryId: id.toString() },
    // })),
    paths: [{ params: { categoryId: "rangers" } }],
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async (context) => {
  console.log("starting ...");
  // const categoryId = context.params?.categoryId;
  // const found = productData.categories
  //   .map((category) => {
  //     return category.subcategories?.map((sc) => sc);
  //   })
  //   .flat()
  //   .filter(Boolean) as ProductCategory[];
  //
  // const cat = found.find((c) => c.id === categoryId);
  // console.log("found", found);
  // console.log("categoryId", categoryId);
  return {
    props: {
      data: {
        // id: categoryId,
        // title: cat?.title || "",
      },
    },
  };
};
