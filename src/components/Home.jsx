
import CarourelPromo from "./CarourelPromo";
import Category from "./Category";
import PopularQuestions from "./PopularQuestions";
import BackgroundHeader from "./BackgroundHeader";
import AddressBox from "./AddressBox";
import PromoInWhere from "./PromoInWhere";
import Order from "./Order";

import { useState } from "react";

function Home(){
    return(
        <>
        <div>
            <BackgroundHeader/>
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