import Header from "../components/common/header";
import Footer from "../components/common/footer";
import { Outlet } from "react-router-dom";

export default function LandingLayout(){
    return(
        <>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
        </>
    )
}