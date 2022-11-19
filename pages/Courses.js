import React from "react";
export const getStaticProps =  async () => {
const response = await fetch('https://fakestoreapi.com/products');
const data  = await response.json();
return{
  props : {productData: data}
}
}
const Courses = (props) => {
  const {productData} = props;
  return (
    <div>
      <h2>This is Courses Page</h2>
      {productData.map(item => 
      <div>{item.title}</div>
        )}
    </div>
  );
};

export default Courses;
