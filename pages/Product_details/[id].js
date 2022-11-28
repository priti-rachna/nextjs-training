
import React, { useCallback } from "react";
import { useRouter } from "next/router";

// Making API call
export const getServerSideProps = async ({params}) => {
  const id = params.id;
  const url = `https://fakestoreapi.com/products/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return {
    props: { productData: data }
  }

}

const Product1 = ({productData}) => {

  const router = useRouter();
  return (
    <div>
      <h2>This is Product1 Page</h2>
      <div>{productData.title}</div>
      {/* {productData.map(item => 
      <div>{item.title}</div>
        )} */}
    </div>
  );
};

export default Product1;
