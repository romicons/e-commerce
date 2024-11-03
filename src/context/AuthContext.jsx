import { createContext, useContext, useEffect, useState } from "react";

import { v4 as uuidv4 } from 'uuid';

import { arrayUnion, doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
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

    useEffect(() => {
        const unsubscribeAuth = onAuthStateChanged(auth, async (firebaseUser) => {
            setLoading(true);
            try {
                if (firebaseUser) {
                    const docRef = doc(db, "users", firebaseUser.uid);

                    const unsubscribeDoc = onSnapshot(docRef, (docSnapshot) => {
                        if (docSnapshot.exists()) {
                            const userData = docSnapshot.data();
                            setUser(userData);
                            setCart(userData.cart || []);
                            setOrders(userData.orders || []);
                        } else {
                            console.warn("El documento del usuario no existe.");
                            setUser(null);
                            setCart([]);
                            setOrders([]);
                        }
                    }, (error) => {
                        console.error("Error fetching user data in snapshot:", error);
                    });

                    return () => {
                        unsubscribeDoc(); 
                    };
                } else {
                    setUser(null);
                    setCart([]);
                    setOrders([]);
                }
            } catch (error) {
                console.error("Error en onAuthStateChanged:", error);
                setUser(null);
                setCart([]);
                setOrders([]);
            } finally {
                setLoading(false);
            }
        });

        return () => unsubscribeAuth(); 
    }, [auth]);

    const login = async (email, password) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const firebaseUser = userCredential.user; 
    
            const docRef = doc(db, "users", firebaseUser.uid);
            const userDoc = await getDoc(docRef);
            
            if (userDoc.exists()) {
                toast({
                    title: "Has iniciado sesión correctamente",
                    description: "¡Bienvenide!",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            }
        } catch (error) {
            console.error("Error durante el login:", error);
            toast({
                title: "Error de inicio de sesión",
                description: "La contraseña o el usuario no son válidos.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
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
            console.error("Error durante el logout:", error);
            toast({
                title: "Error al cerrar sesión",
                description: "No se pudo cerrar la sesión.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    const addToCart = async (product) => {
        if (!product) {
            console.error("No product provided to add to cart");
            return;
        }

        const productExists = cart.some(item => item.id === product.id);
        if (productExists) {
            console.warn("El producto ya está en el carrito");
            toast({
                title: "Producto ya en el carrito",
                description: "Este producto ya está en tu carrito.",
                status: "info",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        try {
            setCart((prevCart) => [...prevCart, product]);

            if (user) {
                await updateDoc(doc(db, "users", user.id), {
                    cart: arrayUnion(product)
                });
                toast({
                    title: "Producto añadido",
                    description: "El producto se ha añadido a tu carrito.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            } else {
                console.warn("User is not logged in, cart not updated in Firestore");
            }
        } catch (error) {
            console.error("Error updating cart in Firestore:", error);
            toast({
                title: "Error al añadir el producto",
                description: "No se pudo añadir el producto al carrito.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
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
            toast({
                title: "Cantidad actualizada",
                description: "La cantidad del producto ha sido incrementada.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
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
            toast({
                title: "Cantidad actualizada",
                description: "La cantidad del producto ha sido decrementada.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    const removeFromCart = async (itemId) => {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
    
        if (user) {
            try {
                await updateDoc(doc(db, "users", user.id), { cart: updatedCart });
                toast({
                    title: "Producto eliminado",
                    description: "El producto ha sido eliminado del carrito.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            } catch (error) {
                console.error("Error updating cart in Firestore:", error);
                toast({
                    title: "Error al eliminar el producto",
                    description: "No se pudo eliminar el producto del carrito.",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
            }
        }
    };

    const clearCart = async () => {
        if (cart.length === 0) return;
        try {
            await updateDoc(doc(db, "users", user.id), { cart: [] });
            setCart([]);
            toast({
                title: "Carrito vacío",
                description: "Todos los productos han sido eliminados del carrito.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        } catch (error) {
            console.error("Error clearing cart in Firestore:", error);
            toast({
                title: "Error al vaciar el carrito",
                description: "No se pudo vaciar el carrito.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    const addOrder = async (cart) => {
        if (!user || cart.length === 0) {
            console.warn("No user logged in or cart is empty");
            return;
        }
    
        const order = {
            id: uuidv4(),
            products: cart,
            date: new Date().toISOString(),
            total: cart.reduce((total, item) => total + item.price * item.quantity, 0),
        };
    
        try {
            await updateDoc(doc(db, "users", user.id), {
                orders: arrayUnion(order),
            });
            setOrders((prevOrders) => [...prevOrders, order]);
            await clearCart();
            toast({
                title: "Orden creada",
                description: "Tu orden ha sido creada con éxito.",
                status: "success",
                duration: 3000,
                isClosable: true,
            });
    
        } catch (error) {
            console.error("Error adding order:", error);
            toast({
                title: "Error al crear la orden",
                description: "No se pudo crear la orden.",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, cart, orders, login, logout, addToCart, removeFromCart, clearCart, addOrder, increaseQuantity, decreaseQuantity }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
