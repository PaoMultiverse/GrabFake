import { Drawer, Checkbox } from "antd";
import "./StyleSheet.css"
import food1 from "../assets/promoFood/food1.jpg"
import { useState } from "react";

function Order(){
    var price = 90000
    const [quannity,setQuanlity] = useState('0') 

    const handleAdd = () => {
        setQuanlity(quantity + 1)
    }
    const handleSubtract = () => {
        setQuanlity(quantity -1 )
    }
    const [total,setTotal] = useState(price)
    const handleTotal = () => {

    }

    const [visible, setVisible] = useState(false);

    return(
        <>
            <div className="App">
                <div onClick={() => {setVisible(true)}}>Open Drawer</div>
                <Drawer 
                    width={600}
                    visible={visible} 
                    closable={false} 
                    onClose={()=>setVisible(false)}>
                        <div className="container-food-order">
                            <div className="container-food-detail">
                                <div className="image-box">
                                    <img className="img-in-box" src={food1} alt="" />
                                </div>
                                <div className="descrip-food">
                                    <h4>Đói quá cô ơi</h4>
                                    <p>Úm ba la xì bùa</p>
                                </div>
                                <div className="price">
                                    <h4>{price}</h4>
                                    <p>Gốc</p>
                                </div>
                            </div>
                            <div className="note-order">
                                <div>
                                <p><strong>Special instructions</strong>   Optional</p>
                                </div>
                                <div>
                                    <input className="note" type="text" placeholder="E.g No onions please" />
                                </div>
                            </div>
                        </div>
                </Drawer>
            </div>
        </>
    )
}

export default Order;