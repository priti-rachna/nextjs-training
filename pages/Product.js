import React from "react";
import styles from '../styles/Product.module.css';


export const getStaticProps = async () => {
    const responce = await fetch('https://fakestoreapi.com/products');
    const data = await responce.json();
    return {
        props: { productData: data }
    }
}
const Product = (props) => {
    const productData = props.productData;
    return (
        <div className="row">
            {productData.map((item) => {

                return (
                    <div class="col-3">
                        <div className={styles.card}>
                            <div className={styles.image_container}>
                                <img className={styles.card_image} src={item.image} alt="Card Image" />
                            </div>

                            <div class="card-body p-3">
                                <h5 className={styles.title}>{item.title}</h5>
                                <p className="card-text text-muted">Category: {item.category}</p>
                                <p className={styles.description}>{item.description}</p>
                                <p className="card-text text-muted">Price: Rs {item.price}</p>
                            </div>
                        </div>
                    </div>
                );
            })}

        </div>
    )
}
export default Product