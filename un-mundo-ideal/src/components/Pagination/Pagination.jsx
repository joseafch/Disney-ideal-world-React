import { useState } from "react"
import './PaginationStyle.css'
export default function Pagination({onChangePage}){
    let [count,setCount]=useState(1)

    const more=()=>{
        setCount(count +=1)
    }
    const rest=()=>{
        setCount(count -=1)
    }
    const changePage=(actualPage)=>{
setCount (actualPage)
onChangePage(actualPage)
    }
    return(
        <div>
            <div className="pagination-bton">
        
        {count>1 && <button  className="bton" onClick={()=> changePage(count-1)}>{'<--'}</button>}
        <p>PAG{count}</p>
        <button className="bton"  onClick={()=> changePage(count+1)}>{'-->'}</button>
    </div>
        </div>
    )
}