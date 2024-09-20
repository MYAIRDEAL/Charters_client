import { message } from "antd";
import { useLocale } from "antd/es/locale";
import { Navigate, useLocation } from "react-router-dom";
export const ProtectedRouteUser = ({ children }) => {

    let isAuthenticated = false;

    let temp = useLocation();
    console.log(temp)


    if (localStorage.getItem('role') === 'super-admin') {
        isAuthenticated = true
    }


    return isAuthenticated ? (
        <>{children}</>
    ) : (
        <>

            {message.error('You are not an Super Admin')}
            < Navigate to="/login" />

        </>
    );
}; 