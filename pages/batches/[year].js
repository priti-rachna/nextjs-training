import React from "react";



export const getStaticPaths = async () => {

  //const arr = [2022, 2021, 2020, 2019, 2018];
  const response = await fetch ('https://fakestoreapi.com/products');
  const arr  = await response.json();
  const paths =  arr.map((item) => {

    return {

      params: { year: item.id.toString() },

    };

  });

  return {

    paths,

    fallback: false,

  };

};


export const getStaticProps = async ({params}) => {

  console.log("param",params);

  const temp = params.year;
  const url = `https://fakestoreapi.com/products/${temp}`;
  const response = await fetch(url);
  const data =  await response.json();

  return {

    props: {

      product: data,

      notFound: false,

    },

  };

};


const Year = ({ product}) => {

  console.log("res" , product);

  return (

    <div>

      <h2>This is Alumni Page -{product.title}</h2>
      <div>{product.price}</div>
      <div><img src={product.image} /></div>

    </div>

  );

};



export default Year;