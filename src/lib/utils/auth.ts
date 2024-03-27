import Cookies from "js-cookie";
import { AUTH_COOKIE } from "..";

interface Logout {
    (): void
}
interface Login {
    (): string | undefined
}

export const handleLogout: Logout = () => {
    Cookies.remove(AUTH_COOKIE)
    window.location.reload();
}

export const handleLogin: Login = () => {
    const statusCookie = Cookies.get(AUTH_COOKIE)
    if (!statusCookie && window.location.pathname !== '/signin') {
        return window.location.href = '/signin';
    }
    if (statusCookie && window.location.pathname === '/signin') {
        return window.location.href = '/';
    }
}