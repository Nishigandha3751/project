import { useState } from "react"
const Card = ({id , name , info , image, price,remove}) =>{

    const [read, setRead] = useState(false)
    const desc = read ? info : info.substring(0, 100) + "..."

    return(
        <div>
<section className="card">
    <img src={image} alt="image"/>
    <div>
        <h4 className="title">{name}</h4>
        <p>{price}</p>
        <p className="information">{desc} {read ? <span onClick={()=>{setRead(false)}} style={{cursor:'pointer',color:'#0984e3'}}>Read Less</span> : <span onClick={()=>{setRead(true)}} style={{cursor:'pointer',color:'#0984e3'}}>Read More</span> } </p>
    </div>
    <button onClick={()=>{remove(id)}}>Delete</button>
</section>
        </div>
    )
}
export default Card