
import CateDetail from "./CateDetail";
import ItemCateImage from "./ItemCateImg";

function Category(){

    const cateData = [
        {
            id: 1,
            imageUrl:"cate1" ,
            name:"Hủ tiếu",
        },
        {
            id: 2,
            imageUrl:"cate2" ,
            name:"Pizza",
        },
        {
            id: 3,
            imageUrl:"cate3" ,
            name:"Cháo",
        },
        {
            id: 4,
            imageUrl:"cate4" ,
            name:"Rau trộn",
        },
        {
            id: 5,
            imageUrl:"cate5" ,
            name:"Trà sữa",
        },
        {
            id: 6,
            imageUrl:"cate6" ,
            name:"Hiso Party",
        },
        {
            id: 7,
            imageUrl:"cate7" ,
            name:"Mì Ý",
        },
        {
            id: 8,
            imageUrl:"cate8" ,
            name:"Weekend Treats",
        },
        {
            id: 9,
            imageUrl:"cate9" ,
            name:"Bánh mì",
        },
        {
            id: 10,
            imageUrl:"cate10" ,
            name:"Cơm",
        },
        {
            id: 11,
            imageUrl:"cate11" ,
            name:"Gà rán - Burger",
        },
        {
            id: 12,
            imageUrl:"cate12" ,
            name:"Thịt",
        },
        {
            id: 13,
            imageUrl:"cate13" ,
            name:"Gà Rán",
        },
        {
            id: 14,
            imageUrl:"cate14" ,
            name:"Đồ uống lạnh",
        },
        {
            id: 15,
            imageUrl:"cate15" ,
            name:"Ăn vặt",
        },
        {
            id: 16,
            imageUrl:"cate16" ,
            name:"Gà",
        },
        {
            id: 17,
            imageUrl:"cate17" ,
            name:"Cơm tấm",
        },
    ]

    const cate = cateData.map(
        (item) => <CateDetail
            name={item.name}
            url={ItemCateImage[item.imageUrl]}
    />)
    return(
        <>
            <div className="container">
                <h2>There's something for everyone!</h2>
                <div className="container-cate">
                    {cate}
                </div>
            </div>
        </>
    )
}
export default Category;