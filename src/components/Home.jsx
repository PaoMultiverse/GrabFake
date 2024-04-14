
import CarourelPromo from "./CarourelPromo";
import Category from "./Category";
import PopularQuestions from "./PopularQuestions";
import BackgroundHeader from "./BackgroundHeader";
import AddressBox from "./AddressBox";
import PromoInWhere from "./PromoInWhere";
import Order from "./Order";

function Home(){
    return(
        <>
        <div>
            <BackgroundHeader/>
            <AddressBox/>
            <PromoInWhere/>
            <CarourelPromo/>
            <Category/>
            <PopularQuestions/>
            <Order/>
        </div>
        </>
    )
}
export default Home;