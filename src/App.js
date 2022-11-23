import React from "react";
import './style.css';
import Nav from "./components/nav";
import Body from "./components/body";

export default function App(){
    

    const [memedata,setmemedata]=React.useState([])
    const [img,func]=React.useState("https://i.imgflip.com/30b1gx.jpg")
    function add(){
        let memearr = memedata.data.memes
        let randomnum = Math.floor(Math.random()*100)
        func(memearr[randomnum].url)
    }
    

    React.useEffect(()=>{
        async function getmeme(){
            const res = await fetch('https://api.imgflip.com/get_memes')
            const data= await res.json()
            setmemedata(data)

        }
    getmeme()
    } ,[])
    return(
        <>
            <Nav />
            <Body 
                
                btn={add}
                img={img}
                name="get new image"/>
        </>
    )
}