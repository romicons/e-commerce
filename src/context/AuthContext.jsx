import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import { db } from "../../firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const auth = getAuth();

    const getUserInfo = async (uid) => {
        try {
            const docRef = doc(db, "users", uid);
            const document = await getDoc(docRef);
            return document.data();
        } catch (err) {
            console.error("Error fetching user data:", err);
            return null;
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            setLoading(true);
            try {
                if (firebaseUser) {
                    const userInfo = await getUserInfo(firebaseUser.uid);
                    setUser(userInfo);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error("Error in onAuthStateChanged:", error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        });

        return () => unsubscribe(); 
    }, [auth]);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
