
import LandingFooter from "./components/footer";
import LandingHeader from "./components/header";
import LandingHero from "./components/hero";


const LandingPage = () => {
    return <div className="w-full overflow-y-auto">
        <div className="bg-base-100 text-base-content sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-shadow duration-100 [transform:translate3d(0,0,0)] shadow-sm">
            <LandingHeader />
        </div>
        <LandingHero />
        <LandingFooter />
    </div>;
}

export default LandingPage;