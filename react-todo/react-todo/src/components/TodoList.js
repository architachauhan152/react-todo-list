import React, { useState } from "react";
 const TodoList=()=>{
    const [activity, setActivity]=useState("")
    const [listData, setListData]=useState([])

    function addActivity(){
        // setListData([...listData,activity])
        // console.log(listData)
        setListData((listData)=>{
            const updatedList=[...listData,activity]
            console.log(updatedList)
            setActivity('')
            return updatedList;
        })

    }
    function removeActivity(i){
        const UpdatedeListData=listData.filter((ele, id)=>{
            return i!=id

        })
        setListData(UpdatedeListData)
    }
    function removeAll(){
        setListData("")
    }
    return(
    <>
    <div className="container">
        <div className="header">TodoList</div>
        <input type="text" placeholder="Add Activity" value={activity} onChange={(e)=>setActivity(e.target.value)}/>
        <button onClick={addActivity}>Add</button>
        <p className="List-heading">Here is your List :{")"}</p>
        {
            listData!=[] && listData.map((data, i)=>{
                return(
                    <>
                    <p key={i}>
                        <div className="listData">{data}</div>
                        <div className="btn-position"><button onClick={()=>removeActivity(i)}>Remove</button></div>
                    </p>
                    </>
                )
            })
        }
        {listData.length>=1 &&
        <button onClick={removeAll}>Remove All</button>}
    </div>

    </>
) }
 export default TodoList;