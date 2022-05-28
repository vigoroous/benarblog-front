import { createContext, useContext, useState, FC } from "react";

type AuthContextType = {
    token: string | null;
    isAuth: boolean;
    setToken: (newToken: string) => void;
}

const AuthContext = createContext<AuthContextType>({} as any);

type Props = {
    children?: React.ReactNode;
}

const AuthContextProvider: FC<Props> = ({ children }) => {
    const [auth, setAuth] = useState<Omit<AuthContextType, 'setToken'>>({
        isAuth: false,
        token: null
    });
    const setToken: AuthContextType['setToken'] = (token) => setAuth({
        isAuth: true,
        token
    })
    return (
        <AuthContext.Provider value={{ ...auth, setToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContextProvider;

