import DetailMeal from "./DetailMeal";
import "./StyleSheet.css"
import { Tabs } from "antd" 
import { Link } from "react-router-dom";
import icRate from "../assets/icon-rate.png";
import icClock from "../assets/icon-clock.png";
import icDot from "../assets/icon-dot.png";
function Store(){
    return(
        <>
           
            <div className="search-food"></div>
                <div className="container ">
                    <div className="space"></div>
                    <div className="search-food-bar">
                        <h6><Link to="/" style={{textDecoration : "none"}}>Trang chủ</Link> &gt; <Link to="/Restaurant" style={{textDecoration : "none"}}>Nhà hàng</Link>&gt; Cơm Tấm Bốn Phương Quán</h6>
                        <h1>Cơm Tấm Bốn Phương Quán</h1>
                        <p>Cơm</p>
                        <p>
                            <img className='icon-in-food' src={icRate} alt="icon-rate" /> 4.4
                            <img className='icon-in-food' src={icClock} alt="icon-clock" /> 25 phút
                            <img className='icon-in-food' src={icDot} alt="icon-dot" /> 3.5 km
                        </p>
                        <p>Giờ mở cửa    Hôm nay 00:00-23:59</p>
                    </div>
                    <div className="container-option">
                        
                    </div>
                    <div className="">
                    
                </div>
           
                    <Tabs defaultActiveKey="tab1">
                    <Tabs.TabPane
                    tab={<span className="tab-title">Promotion Combo</span>}
                    key="tab1"
                    >
                    <DetailMeal />
                    </Tabs.TabPane>
                    <Tabs.TabPane
                    tab={<span className="tab-title">Bestseller Chicken Rice</span>}
                    key="tab2"
                    >
                    <DetailMeal />
                    </Tabs.TabPane>
                    <Tabs.TabPane
                    tab={<span className="tab-title">Món ăn kèm</span>}
                    key="tab3"
                    >
                    <div> Chào cô ạ</div>
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </>
    )
}
export default Store