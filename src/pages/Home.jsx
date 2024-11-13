import { Carrousel } from "../components/Carrousel"
import { BrandShowcase } from "../components/BrandShowcase"
import { TopSales } from "../components/TopSales"

export const Home = () => {
    return(
        <>
            <Carrousel/>
            <BrandShowcase/>
            <TopSales/>
        </>
    )
}