import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const CustomContext = createContext()

export const Context = (props) => {

    const navigate = useNavigate()
    const [products, setProducts] = useState([])

    const [categories, setCategories] = useState('all')
    const [page, setPage] = useState(1)
    const [cart,setCart] = useState( [])
    const [changeGender, setChangeGender] = useState('all')
    const [user, setUser] = useState({
        login: ''
    })

    const getAllProducts = () => {
        axios('https://c61db6ccb97445c0.mokky.dev/items')
            .then(({data}) => setProducts(data))
            .catch((error) => console.log(error))
    }

    const addElCart = (item) => {
        if (cart.some(el => el.id == item.id)){
            setCart(cart.map(el => el.id == item.id ? {...item,count : el.count + 1} : el))
        } else {
            setCart([...cart, {...item,count:1}])
        }
    }

    const deleteElCart = (id) => {
        return setCart(cart.filter((item) => {
            return item.id !== id
        }))
    }

    const registerUser = (data) => {
        axios.post('https://c61db6ccb97445c0.mokky.dev/orders', {...data, orders: []})
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data.user))
                setUser(res.data.user)
                navigate('/')
            })
    }

    const loginUser = (data) => {
        axios.post('https://c61db6ccb97445c0.mokky.dev/login', {...data, orders: []})
            .then((res) => {
                localStorage.setItem('user', JSON.stringify(res.data.user))
                setUser(res.data.user)
                navigate('/')
            })
    }
    const logoutUser = () => {
        localStorage.removeItem('user')
        setUser({
            login: ''
        })
    }


    useEffect(() => {
        if (localStorage.getItem('user') !== null) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }

        if (localStorage.getItem('cart') !== null) {
            setCart(JSON.parse(localStorage.getItem('cart')))
        }

        getAllProducts()
    },[])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])


    const value = {
        products, setProducts,
        getAllProducts,
        addElCart,
        categories, setCategories,
        page, setPage,
        changeGender, setChangeGender,
        cart,setCart,
        registerUser,
        user, setUser,
        logoutUser, loginUser,
        deleteElCart
    }
    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}