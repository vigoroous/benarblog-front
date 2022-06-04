import { createContext, useContext, useState, FC, useEffect, useReducer } from "react";

type AuthData = {
    token: string | null;
    isAuth: boolean;
}

type AuthContextType = {
    data: AuthData;
    dispatch: React.Dispatch<any>
}

export type AuthAction =
    | { type: 'LOGOUT' }
    | { type: 'LOGIN', payload: AuthData }

type AuthReducerType = (state: AuthData, action: AuthAction) => AuthData

const initAuth = (state: AuthData) => {
    return {...state}
}

const authReducer: AuthReducerType = (state, action) => {
    switch (action.type) {
        case 'LOGOUT': return { ...state, isAuth: false, token: null }
        case 'LOGIN': {
            return initAuth(action.payload)
        }
        default: return { ...state }
    }
}

const AuthContext = createContext<AuthContextType>({} as any);

type Props = {
    children?: React.ReactNode;
}

export const STORAGE_KEY = "auth_token"

const initialState = JSON.parse(localStorage.getItem(STORAGE_KEY) as string) || { isAuth: false, token: null };

const AuthProvider: FC<Props> = ({ children }) => {

    const [data, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        console.log(JSON.stringify(data))
    }, [data]);
    
    return (
        <AuthContext.Provider value={{ data, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;

