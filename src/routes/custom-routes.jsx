import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingLayout from "../layouts/landing-layout";
import Home from "../pages/home/index";
import AuthLayout from "../layouts/auth-layout";
import Login from "../pages/auth/loginpage";
import AboutUs from "../pages/about";
import Insights from "../pages/Insights";
import InsightDetail from "../pages/Insights/insight-detail/insight-detail";
import Work from "../pages/work";
import ContactPage from "../pages/contact";
import ProducrStrategy from "../pages/services/product-design/product-strategy";
import UxResearch from "../pages/services/product-design/ux-research&insights";
import RoadMapping from "../pages/services/product-design/strategy-&-roadmapping";
import Architecture from "../pages/services/product-design/experience-architecture";
import UiUxDesign from "../pages/services/product-design/uiux-design";
import DesignSystem from "../pages/services/product-design/design-system";
import Prototyping from "../pages/services/product-design/prototyping";
import UxAudit from "../pages/services/product-design/ux-audit";
import Interaction from "../pages/services/product-design/interaction";
import BrandIdentity from "../pages/services/branding-solutions/brand-identity-solution";
import BrandStrategy from "../pages/services/branding-solutions/brand-strategy-positioning";
import CreativeDirection from "../pages/services/branding-solutions/creative-direction";
import VisualCommunication from "../pages/services/branding-solutions/visual-communication-design";
import Rebranding from "../pages/services/branding-solutions/rebranding-evaluation";
import Webflow from "../pages/services/nocode-development/webflow-development";
import FramerDevelopment from "../pages/services/nocode-development/framer-development";
import BubbleApp from "../pages/services/nocode-development/bubble-app-development";
import FigmaSites from "../pages/services/nocode-development/figma-sites";
import PlateformMaintenance from "../pages/services/nocode-development/plateform-maintenance-support";
import UseScrollToTop from "./use-scroll-to-top";




export default function CustomRoutes() {
    return (
        <>
            <BrowserRouter>
                <UseScrollToTop />
                <Routes>
                    <Route path="/" element={<LandingLayout />} >
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/insights" element={< Insights />} />
                        <Route path="/insights/insight-details" element={<InsightDetail />} />
                        <Route path="/work" element={<Work />} />
                        <Route path="/services/product-strategy-consulting" element={<ProducrStrategy />} />
                        <Route path="/services/ux-research-insights" element={<UxResearch />} />
                        <Route path="/services/product-strategy-roadmapping" element={<RoadMapping />} />
                        <Route path="/services/experience-architecture" element={<Architecture />} />
                        <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
                        <Route path="/services/design-system-guidelines" element={<DesignSystem />} />
                        <Route path="/services/prototyping-user-testing" element={<Prototyping />} />
                        <Route path="/services/interaction-motion-design" element={<Interaction />} />
                        <Route path="/services/ux-audit-product-optimization" element={<UxAudit />} />
                        <Route path="/services/brand-identity-solution" element={<BrandIdentity />} />
                        <Route path="/services/brand-strategy-positioning" element={<BrandStrategy />} />
                        <Route path="/services/creative-direction" element={<CreativeDirection />} />
                        <Route path="/services/visual-communication-design" element={<VisualCommunication />} />
                        <Route path="/services/rebranding-evolution" element={<Rebranding />} />
                        <Route path="/services/webflow-development" element={<Webflow />} />
                        <Route path="/services/framer-development" element={<FramerDevelopment />} />
                        <Route path="/services/bubble-app-development" element={<BubbleApp />} />
                        <Route path="/services/figma-sites" element={<FigmaSites />} />
                        <Route path="/services/plateform-maintenance-support" element={<PlateformMaintenance />} />

                        <Route path="/contact" element={<ContactPage />} />
                    </Route>
                    <Route path="/auth" element={<AuthLayout />} >
                        <Route path="/auth/login" element={<Login />} />
                    </Route>
                </Routes>

            </BrowserRouter>
        </>
    )
}