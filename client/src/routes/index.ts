import HomeLayout from "@src/layouts/HomeLayout";
import HomePage from "@src/pages/HomePage";
import LandingPage from "@src/pages/LandingPage";
import settingRoutes from "@src/pages/Setting/routes";

type routeInfo = {
    path: string;
    component: React.FC;
    layout?: React.FC;
};

const publicRoutes: routeInfo[] = [
    { path: "/", component: LandingPage },
    { path: "/home", component: HomePage, layout: HomeLayout },
    ...settingRoutes,
];

export { publicRoutes };
