import './App.css'
const Card = (props) => {
    return ( 
    <div className="card">
       <div className="left">
            <img className="img" src={props.img} alt="not at all"/>
       </div>
        <div className="right">
        <h1 className="title">{props.title}</h1>

            <div className="ing">
                
                {props.ingredients.map(ins =>(
                    <li>{ins.text}</li>
                ))}
            </div>
        </div>
    </div> 
    );
}
 
export default Card;