
import Option from "./Option"
import React from "react"

function SearchFood(){
 
    const optionData = [
        {
            id:1,
            name : "Gần tôi"
        },
        {
            id:2,
            name : "Trưa - Đồng Giá"
        },
        {
            id:3,
            name : " Tuần lễ món cơm"
        },
        {
            id:4,
            name : "5 Ưu đãi cùng 1 đơn"
        },
        {
            id:5,
            name : "Quán ngon đặc tuyển"
        },
    ]
    const optional = optionData.map((item) => <Option name={item.name}/>)
    
    return(
        <>
        <div className="search-food"></div>
            <div className="container ">
                <div className="space"></div>
                <div className="search-food-bar">
                    <input  type="text" id="search-bar-input" placeholder="Tìm món hoặc quán ăn"/>
                </div>
                <div className="container-option">
                    {optional}
                </div>
            </div>
        </>
    )
}

export default SearchFood;