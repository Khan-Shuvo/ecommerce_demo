import { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setuser] = useState(null);

    const correctEmail = "test@gmail.com";
    const correctPassword = "123456";

    const login = (email, password) => {
        if (email === correctEmail && password === correctPassword) {
            setuser({ email });
            return { success: true }
        }
        else {
            return { success: false, message: "INvalid email or password" }
        }
    }

    const logout = () => {
        setuser(null)
    }

    return (
        <UserContext value={{ user, login, logout }}>
            {children}
        </UserContext>
    )
}

export default UserProvider;