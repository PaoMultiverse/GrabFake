
import CarourelPromo from "./CarourelPromo";
import Category from "./Category";
import PopularQuestions from "./PopularQuestions";
import BackgroundHeader from "./BackgroundHeader";
import PromoInWhere from "./PromoInWhere";

function Home(){
    return(
        <>
        <div>
            <BackgroundHeader/>
            <PromoInWhere/>
            <CarourelPromo/>
            <Category/>
            <PopularQuestions/>
        </div>
        </>
    )
}
export default Home;