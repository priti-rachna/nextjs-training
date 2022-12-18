
import mongoose, { Schema, model } from 'mongoose';
console.log(mongoose);
const schema = Schema;
const productsSchema =  new schema({
    title:{
        type: String
    },
    price:{
        type: String
    },
    description:{
        type: String
    },
    category:{
        type: String
    },
    image:{
        type: String
    }
})

const Products = model('ProductModel', productsSchema);
 
export default Products;
