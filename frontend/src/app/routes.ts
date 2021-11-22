import LandingPage from "../pages/landing/LandingPage"
import LoginPage from "../pages/login/LoginPage"
import RegisterPage from "../pages/register/RegisterPage"

const routePaths = {
    landing: '/',
    login: '/login',
    register: '/register',
}

const GetRoutes = [
    {
        path: routePaths.landing,
        component: LandingPage,
        exact: true,
        authGuard: false
    },
    {
        path: routePaths.login,
        component: LoginPage,
        exact: true,
        authGuard: false
    },
    {
        path: routePaths.register,
        component: RegisterPage,
        exact: true,
        authGuard: false
    }
]

export { routePaths, GetRoutes }