import React from "react";
import '../style.css';


export default function Body(props){
    const [names,namefunc] = React.useState({
        "toptext":"",
        "bottomtext":"",
    });
    
    function handleText(event){

        const target = event.target;
        namefunc(prevNames=>({
            ...prevNames,
            [event.target.name]:event.target.value
            
        }))
        
    }
    // props.handle(names)
    return(
        <div className="main-body">
            
            <div className="inputs">
                <input 
                type="text"  
                placeholder="Top text"
                name="toptext"
                onInput={handleText}
                value={names.toptext}
                />
                <input 
                type="text"  
                placeholder="bottom text"
                name="bottomtext"
                onInput={handleText}
                value={names.bottomext}
                /> 
            </div>
            <button onClick={props.btn} className="btn-den">{props.name}</button>
            <div className="img-cont">
                <img src={props.img} alt="broken" className="meme-img"/>
                <h2 className="top">{names.toptext} </h2>
                <h2 className="bottom">{names.bottomtext} </h2>
            </div>
        </div>
    )
}