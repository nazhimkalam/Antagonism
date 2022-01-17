import DetectorPage from "../pages/detector/DetectorPage"
import HomePage from "../pages/home/HomePage"
import LandingPage from "../pages/landing/LandingPage"
import LoginPage from "../pages/login/LoginPage"
import RegisterPage from "../pages/register/RegisterPage"

const RoutePaths = {
    landing: '/',
    login: '/login',
    register: '/register',
    home: '/home',
    detector: '/detector',
}

const GetRoutes = [
    {
        path: RoutePaths.landing,
        component: LandingPage,
        exact: true,
        authGuard: false
    },
    {
        path: RoutePaths.login,
        component: LoginPage,
        exact: true,
        authGuard: false
    },
    {
        path: RoutePaths.register,
        component: RegisterPage,
        exact: true,
        authGuard: false
    },
    {
        path: RoutePaths.home,
        component: HomePage,
        exact: true,
        authGuard: false
    },
    {
        path: RoutePaths.detector,
        component: DetectorPage,
        exact: true,
        authGuard: false
    }
]

export { RoutePaths, GetRoutes }