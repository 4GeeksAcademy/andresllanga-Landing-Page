import React from "react"

 const Card =({title, text, buttonText}) => {

return(
    <>
    <div class="card mx-3" style={{width:"18rem"}}>
        <img src="https://via.placeholder.com/500x325" class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>
    
    </>
)
}
export default Card