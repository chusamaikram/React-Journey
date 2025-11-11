import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingLayout from "../layouts/landing-layout";
import Home from "../pages/home/index";
import AuthLayout from "../layouts/auth-layout";
import Login from "../pages/auth/loginpage";
import AboutUs from "../pages/about";
import Insights from "../pages/Insights";
import InsightDetail from "../pages/Insights/insight-detail/insight-detail";
import Work from "../pages/work";
import Strategy from "../pages/strategy";




export default function CustomRoutes() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingLayout />} >
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/insights" element={< Insights />} />
                        <Route path="/insights/insight-details" element={<InsightDetail />} />
                        <Route path="/work" element={<Work />} />
                        <Route path="/services" element={<Strategy />} />
                    </Route>
                    <Route path="/auth" element={<AuthLayout />} >
                        <Route path="/auth/login" element={<Login />} />
                    </Route>
                </Routes>
  
            </BrowserRouter>
        </>
    )
}