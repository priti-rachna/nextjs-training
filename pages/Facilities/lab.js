import React from "react";

export const getStaticProps = () => {
    //api call
    return{
        props : {footerstatus: true}
    }
}
const Lab = ({props}) => {
    return(

        <div>This is Lab Page</div>
    )
}

export default Lab;