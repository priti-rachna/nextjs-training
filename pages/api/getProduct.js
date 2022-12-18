import mongoose from "mongoose";
import products from "../../modals/products";
mongoose.connect(process.env.MONGO_URL)
    .then(() => {

        console.log('DB Connected Successfully');

    })
    .catch((err) => 
    console.error('Not Connected')
    );
export default function handler(req, res) {
    res.status(200).json({ name: 'Priti Rachana' })
  }
  