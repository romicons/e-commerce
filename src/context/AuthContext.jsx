import { createContext, useContext, useEffect, useState } from "react";

import { arrayUnion, doc, getDoc, updateDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { db } from "../../firebase";

import { useToast } from "@chakra-ui/react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const [orders, setOrders] = useState([]); 
    const auth = getAuth();

    const toast = useToast();

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
                    setCart(userInfo.cart || []); 
                    setOrders(userInfo.orders || []);
                } else {
                    setUser(null);
                    setCart([]);
                    setOrders([]); 
                }
            } catch (error) {
                console.error("Error in onAuthStateChanged:", error);
                setUser(null);
                setCart([]);
                setOrders([]); 
            } finally {
                setLoading(false);
            }
        });

        return () => unsubscribe(); 
    }, [auth]);


    const login = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const userInfo = await getUserInfo(userCredential.user.uid);
            setUser(userInfo);
            setCart(userInfo.cart || []);
            setOrders(userInfo.orders || []);
            toast({
                title: "¡Bienvenido!",
                description: `Hola ${userInfo.name}, ¡qué bueno verte de nuevo!`,
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        } catch (error) {
            throw error;
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            setCart([]);
            setOrders([]);
            toast({
                title: "Sesión cerrada",
                description: "Has cerrado sesión correctamente.",
                status: "info",
                duration: 3000,
                isClosable: true,
            });
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    const addToCart = async (product) => {
        if (!product) {
            console.error("No product provided to add to cart");
            return;
        }
    
        try {
            setCart((prevCart) => [...prevCart, product]);
    
            if (user) {
                await updateDoc(doc(db, "users", user.id), {
                    cart: arrayUnion(product)
                });
            } else {
                console.warn("User is not logged in, cart not updated in Firestore");
            }
        } catch (error) {
            console.error("Error updating cart in Firestore:", error);
        }
    };

    const increaseQuantity = async (item) => {
        const updatedCart = cart.map((cartItem) =>
            cartItem.id === item.id && cartItem.quantity < item.stock
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
        setCart(updatedCart);
        if (user) {
            await updateDoc(doc(db, "users", user.id), { cart: updatedCart });
        }
    };

    const decreaseQuantity = async (item) => {
        const updatedCart = cart.map((cartItem) =>
            cartItem.id === item.id && cartItem.quantity > 1
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        );
        setCart(updatedCart);
        if (user) {
            await updateDoc(doc(db, "users", user.id), { cart: updatedCart });
        }
    };

    const removeFromCart = async (itemId) => {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
    
        if (user) {
            try {
                await updateDoc(doc(db, "users", user.id), { cart: updatedCart });
            } catch (error) {
                console.error("Error updating cart in Firestore:", error);
            }
        }
    };

    const clearCart = async () => {
        if (cart.length === 0) return;
        try {
            await updateDoc(doc(db, "users", user.id), { cart: [] });
            setCart([]);
        } catch (error) {
            console.error("Error clearing cart in Firestore:", error);
        }
    };
    
    const addOrder = async (cart) => {
        if (!user || cart.length === 0) return;
    
        const order = {
            products: cart,
            date: new Date().toISOString(),
            total: cart.reduce((total, item) => total + item.price * item.quantity, 0),
        };
    
        try {
            await updateDoc(doc(db, "users", user.id), {
                orders: arrayUnion(order),
            });
            setOrders((prevOrders) => [...prevOrders, order]);
        } catch (error) {
            console.error("Error adding order:", error);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user, setUser, loading, login, logout, cart, orders, addOrder, addToCart, increaseQuantity, decreaseQuantity, removeFromCart, clearCart,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

